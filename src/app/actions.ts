'use server';

import { getXataClient } from '../xata';

const xata = getXataClient();

async function AddProject(data: Project) {
  const record = await xata.db.project.create({
    name: data.name,
    isApproved: data.isApproved || false,
    slug: slugify(data.name),
    featuredOnHomepage: data.featuredOnHomepage || false,
    // contributor: 'rec_xyz',
    featuredImage: 'string',
    additionalImages: 'string',
    description: data.description,
    projectUrl: data.projectUrl,
    gitHubRepo: data.gitHubRepo,
    featuredInCarousel: data.featuredInCarousel || false,
  });
  console.log(record);
}

async function EditProject(data: Project) {
  const record = await xata.db.project.update(data.id, {
    name: data.name,
    isApproved: data.isApproved || false,
    slug: slugify(data.name),
    featuredOnHomepage: data.featuredOnHomepage || false,
    // contributor: 'rec_xyz',
    featuredImage: 'string',
    additionalImages: 'string',
    description: data.description,
    projectUrl: data.projectUrl,
    gitHubRepo: data.gitHubRepo,
    featuredInCarousel: data.featuredInCarousel || false,
  });
  console.log(record);
}

async function ReorderProjects(data) { }

async function DeleteProject(projectId: string) {
  const record = await xata.db.project.delete(projectId);
  console.log(record);
}

export { AddProject, EditProject, ReorderProjects, DeleteProject };
