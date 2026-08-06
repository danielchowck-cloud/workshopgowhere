import { CAR_MODELS, type CarModel, type CommonIssue } from "@/data/carModels";
import { listings, type Listing } from "@/data/listings";

export type IssueWithModel = CommonIssue & { model: CarModel };

export function getAllIssues(): IssueWithModel[] {
  return CAR_MODELS.flatMap((model) =>
    model.commonIssues.map((issue) => ({ ...issue, model })),
  );
}

export function getIssue(issueId: string): IssueWithModel | undefined {
  return getAllIssues().find((issue) => issue.id === issueId);
}

export function getListing(id: string): Listing | undefined {
  return listings.find((listing) => listing.id === id);
}

export function getMatchingWorkshops(issue: IssueWithModel): Listing[] {
  const modelBrand = issue.model.brand;
  const symptomMatches = listings.filter((listing) => listing.symptomPrices?.[issue.id]);
  const brandMatches = listings.filter((listing) => listing.brands?.includes(modelBrand));
  const requiredTools = issue.requiredTools ?? [];
  const toolMatches = listings.filter((listing) =>
    requiredTools.some((tool) =>
      listing.diagnosticTools?.some((workshopTool) =>
        workshopTool.toLowerCase().includes(tool.split(" ")[0].toLowerCase()),
      ),
    ),
  );

  const merged = [...symptomMatches, ...toolMatches, ...brandMatches];
  return Array.from(new Map(merged.map((listing) => [listing.id, listing])).values())
    .sort((a, b) => {
      const aExact = a.symptomPrices?.[issue.id] ? 1 : 0;
      const bExact = b.symptomPrices?.[issue.id] ? 1 : 0;
      const aVerified = a.verified ? 1 : 0;
      const bVerified = b.verified ? 1 : 0;
      return bExact - aExact || bVerified - aVerified || (b.rating ?? 0) - (a.rating ?? 0);
    })
    .slice(0, 6);
}

export function formatSgd(value: number): string {
  return `$${value.toLocaleString("en-SG")}`;
}

export function formatRange(range: [number, number]): string {
  return `${formatSgd(range[0])}–${formatSgd(range[1])}`;
}

function cleanSlugPart(value: string): string {
  return value
    .toLowerCase()
    .replace(/mercedes-benz/g, "mercedes")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ownerModelName(model: string): string {
  if (model.includes("E-Class")) return "E-Class";
  if (model.includes("C-Class")) return "C-Class";
  if (model.includes("GLE")) return "GLE";
  if (model.includes("GLC")) return "GLC";
  if (model.includes("3-Series")) return "3-Series";
  if (model.includes("5-Series")) return "5-Series";
  if (model.includes("A4")) return "A4";
  if (model.includes("A5")) return "A5";
  if (model.includes("A6")) return "A6";
  if (model.includes("Q5")) return "Q5";
  if (model.includes("Golf")) return "Golf Passat";
  if (model.includes("Cayenne")) return "Cayenne";
  if (model.includes("Macan")) return "Macan";
  if (model.includes("XC60")) return "XC60 XC90";
  if (model.includes("Model 3")) return "Model 3 Model Y";
  return model.replace(/^([A-Z][0-9]{2,3}|F\d+|G\d+|B\d+)\s+/g, "").replace(/\([^)]*\)/g, "").trim();
}

export function ownerFacingModelLabel(model: CarModel): string {
  return `${ownerModelName(model.model)} (${model.yearsActive})`;
}

export function getIssueSeoSlug(issue: IssueWithModel): string {
  return cleanSlugPart(`${issue.model.brand} ${ownerModelName(issue.model.model)} ${issue.symptom}`)
    .replace(/car-too-low-airmatic-warning-air-suspension-dropping-overnight/, "air-suspension-drops-overnight")
    .replace(/air-suspension-dropping-airmatic-warning/, "air-suspension-drops")
    .replace(/12v-battery-warning-car-cannot-start-or-wake-up/, "12v-battery-warning-cannot-start")
    .replace(/12v-battery-warning-car-does-not-wake-up/, "12v-battery-warning-cannot-wake-up")
    .replace(/s-tronic-dsg-jerky-shifting/, "dsg-jerky-shifting");
}

export function getIssueBySeoSlug(slug: string): IssueWithModel | undefined {
  return getAllIssues().find((issue) => getIssueSeoSlug(issue) === slug);
}

export function getIssueSeoTitle(issue: IssueWithModel): string {
  return `${issue.model.brand.replace("Mercedes-Benz", "Mercedes")} ${ownerModelName(issue.model.model)}: ${issue.symptom}`;
}
