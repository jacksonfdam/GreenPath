export interface CodelabArtifact {
  name: string;
  where: string;
}

export interface CodelabFrontmatter {
  week: number;
  slug: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
  prerequisites: string[];
  outcomes: string[];
  artifact: CodelabArtifact;
}

export interface StepMeta {
  id: string;
  title: string;
  minutes: number;
}

export interface CodelabMeta extends CodelabFrontmatter {
  steps: StepMeta[];
}

export interface ProgressState {
  version: number;
  steps: Record<string, boolean>;
  portfolio: Record<string, string>;
  lastActive: string | null;
  streakDays: number;
}
