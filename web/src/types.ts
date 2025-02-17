export interface Organization {
  name: string;
  display_name?: string;
  description?: string;
  home_url: string;
  logo_url?: string;
}

export interface BaseProject {
  id: string;
  name: string;
  display_name?: string;
  description?: string;
  home_url: string;
  logo_url?: string;
  devstats_url?: string;
  maturity_id: Maturity;
  category_id: Category;
  score: Score;
  updated_at: number;
}

export interface Project extends BaseProject {
  repositories: BaseRepository[];
  organization: {
    name: string;
  };
}

export interface ProjectDetail extends BaseProject {
  repositories: Repository[];
}

export interface BaseRepository {
  name: string;
  url: string;
  kind: RepositoryKind;
}

export interface Repository extends BaseRepository {
  digest: string;
  repository_id: string;
  score: Score;
  reports: Report[];
}

export interface Report {
  data: CoreReport | any;
  linter_id: LinterId;
  report_id: string;
  updated_at: number;
}

export interface CoreReport {
  // ScoreType
  [key: string]: {
    [key: string]: number | boolean;
  };
}

export type Score = {
  [key in ScoreType]: number;
} & { score_kind: ScoreKind };

export interface FiltersSection {
  name: string;
  title: string;
  filters: Filter[];
}

export interface Filter {
  name: string | number;
  label: string;
  legend?: string;
  decorator?: JSX.Element;
}

export interface Issue {
  level: number;
  description: string;
}

export interface Prefs {
  search: { limit: number; sort: { by: SortBy; direction: SortDirection } };
  theme: {
    effective: string;
  };
}

export interface ReportOptionData {
  icon: JSX.Element;
  name: string;
  legend: JSX.Element;
  description: JSX.Element;
}

export enum Maturity {
  Graduated = 0,
  Incubating,
  Sandbox,
}

export enum Category {
  'App definition' = 0,
  Observability,
  Orchestration,
  Platform,
  Provisioning,
  Runtime,
  Serverless,
}

export enum Rating {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
}

export enum FilterKind {
  Maturity = 'maturity',
  Category = 'category',
  Rating = 'rating',
}

export enum LinterId {
  core = 0,
}

export enum ScoreType {
  Documentation = 'documentation',
  License = 'license',
  BestPractices = 'best_practices',
  Security = 'security',
  Global = 'global',
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export enum SortBy {
  Name = 'name',
  Score = 'score',
}

export enum RepositoryKind {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ScoreKind {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ReportOption {
  Adopters = 'adopters',
  ApprovedLicense = 'approved',
  ArtifactHubBadge = 'artifacthub_badge',
  Changelog = 'changelog',
  CodeOfConduct = 'code_of_conduct',
  CommunityMeeting = 'community_meeting',
  Contributing = 'contributing',
  Governance = 'governance',
  LicenseScanning = 'scanning',
  Maintainers = 'maintainers',
  OpenSSFBadge = 'openssf_badge',
  Readme = 'readme',
  RecentRelease = 'recent_release',
  Roadmap = 'roadmap',
  SecurityPolicy = 'security_policy',
  SPDX = 'spdx_id',
  Website = 'website',
}

export interface SearchFiltersURL extends BasicQuery {
  pageNumber: number;
}

export interface BasicQuery {
  text?: string;
  filters?: {
    [key: string]: (string | number)[];
  };
}

export interface SearchQuery extends BasicQuery {
  limit: number;
  offset: number;
  sort_by: SortBy;
  sort_direction: SortDirection;
}

export interface SearchData {
  limit: number;
  offset: number;
  sort_by: string;
  sort_direction: string;
  text?: string;
  category?: number[];
  maturity?: number[];
  rating?: number[];
}

export interface Error {
  kind: ErrorKind;
  message?: string;
}

export enum ErrorKind {
  Other,
  NotFound,
}

export type ReportOptionInfo = {
  [key in ReportOption]: ReportOptionData;
};
