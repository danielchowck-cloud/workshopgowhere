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
