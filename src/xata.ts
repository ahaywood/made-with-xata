// Generated by Xata Codegen 0.22.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "project",
    columns: [
      { name: "name", type: "string" },
      { name: "isApproved", type: "bool" },
      { name: "slug", type: "string" },
      { name: "featuredOnHomepage", type: "bool" },
      { name: "contributor", type: "link", link: { table: "contributor" } },
      { name: "featuredImage", type: "string" },
      { name: "additionalImages", type: "string" },
      { name: "description", type: "text" },
      { name: "projectUrl", type: "string" },
      { name: "gitHubRepo", type: "string" },
      { name: "order", type: "int" },
      { name: "featuredInCarousel", type: "bool", defaultValue: "false" },
    ],
  },
  {
    name: "contributor",
    columns: [
      { name: "name", type: "string" },
      { name: "avatar", type: "string" },
      { name: "email", type: "email" },
      { name: "avatarColor", type: "string" },
    ],
  },
  { name: "tag", columns: [{ name: "name", type: "string" }] },
  {
    name: "tag_project",
    columns: [
      { name: "tags", type: "link", link: { table: "tag" } },
      { name: "projects", type: "link", link: { table: "project" } },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Project = InferredTypes["project"];
export type ProjectRecord = Project & XataRecord;

export type Contributor = InferredTypes["contributor"];
export type ContributorRecord = Contributor & XataRecord;

export type Tag = InferredTypes["tag"];
export type TagRecord = Tag & XataRecord;

export type TagProject = InferredTypes["tag_project"];
export type TagProjectRecord = TagProject & XataRecord;

export type DatabaseSchema = {
  project: ProjectRecord;
  contributor: ContributorRecord;
  tag: TagRecord;
  tag_project: TagProjectRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Amy-Dutton-s-workspace-bhcbd8.us-east-1.xata.sh/db/madewithxata",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};