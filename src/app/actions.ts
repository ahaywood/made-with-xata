'use server';

import { slugify } from '@/utils/Slugify';

import { randomAvatarColor } from '@/utils/Colors';
import { getXataClient } from '../xata';

const xata = getXataClient();

async function addProject(
  data: Project & { contributorName?: string; contributorEmail?: string }
) {
  // add the contributor
  const contributor = await xata.db.contributor.create({
    name: data.contributorName,
    email: data.contributorEmail,
    avatar: 'string',
    avatarColor: randomAvatarColor(),
  });

  // add the project
  const newProject = await xata.db.project.create({
    contributor: contributor.id,
    name: data.name,
    isApproved: data.isApproved || false,
    slug: slugify(data.name || ''),
    featuredOnHomepage: data.featuredOnHomepage || false,
    featuredImage: 'string',
    additionalImages: 'string',
    description: data.description,
    projectUrl: data.projectUrl,
    gitHubRepo: data.gitHubRepo,
    featuredInCarousel: data.featuredInCarousel || false,
  });

  return newProject;
}

async function editProject(data: Project) {
  const record = await xata.db.project.update(data.id as string, {
    name: data.name,
    isApproved: data.isApproved,
    slug: slugify(data.name as string),
    featuredOnHomepage: data.featuredOnHomepage,
    featuredImage: 'string',
    additionalImages: 'string',
    description: data.description,
    projectUrl: data.projectUrl,
    gitHubRepo: data.gitHubRepo,
    featuredInCarousel: data.featuredInCarousel,
  });
  console.log(record);
}

// async function reorderProjects(data: Project[]) { }

async function removeProject(projectId: string) {
  await xata.db.project.delete(projectId);
}

export { addProject, editProject, removeProject };
