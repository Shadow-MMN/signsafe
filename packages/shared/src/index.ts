export type RiskLevel = "low" | "medium" | "high";

export type SafetyReport = {
  riskLevel: RiskLevel;
  summary: string;
  details: string[];
};
