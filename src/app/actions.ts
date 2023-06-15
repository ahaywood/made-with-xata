'use server';

import { slugify } from '@/utils/Slugify';

import { getXataClient } from '../xata';

const xata = getXataClient();

async function addProject(data: Project) {
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

async function editProject(data: Project) {
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

async function reorderProjects(data) { }

async function removeProject(projectId: string) {
  await xata.db.project.delete(projectId);
}

export { addProject, editProject, reorderProjects, removeProject };
