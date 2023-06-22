'use server';

import { slugify } from '@/utils/Slugify';

import { randomAvatarColor } from '@/utils/Colors';
import { getXataClient } from '@/xata';

const xata = getXataClient();

async function addProject(
  data: Project & {
    contributorName?: string;
    contributorEmail?: string;
    contributorAvatar?: string;
  }
) {
  try {
    console.log({ data });

    // add the contributor
    const contributor = await xata.db.contributor.create({
      name: data.contributorName,
      email: data.contributorEmail,
      avatar: data.contributorAvatar,
      avatarColor: randomAvatarColor(),
    });

    // add the project
    await xata.db.project.create({
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
      tags: JSON.stringify(data.tags),
    });
  } catch (error) {
    console.error(error);
  }
}

async function editProject(
  data: Project & {
    contributorName?: string;
    contributorEmail?: string;
    contributorId?: string;
    contributorAvatar?: string;
  }
) {
  try {
    let contributorId: string = data.contributorId || '';

    // if the contributor exists update it
    if (contributorId) {
      await xata.db.contributor.update(contributorId, {
        name: data.contributorName,
        email: data.contributorEmail,
        avatar: data.contributorAvatar,
      });
    } // otherwise, create a new contributor
    else {
      const record = await xata.db.contributor.create({
        name: data.contributorName,
        email: data.contributorEmail,
        avatar: data.contributorAvatar,
        avatarColor: randomAvatarColor(),
      });
      contributorId = record.id;
    }

    // edit project
    await xata.db.project.update(data.id as string, {
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
      contributor: contributorId,
      tags: data.tags,
    });
  } catch (error) {
    console.error(error);
  }
}

async function removeProject(projectId: string) {
  try {
    // find the contributor ID
    const record = await xata.db.project.read(projectId);

    // remove contributor
    await xata.db.contributor.delete(record?.contributor?.id as string);

    // remove project
    await xata.db.project.delete(projectId);
  } catch (error) {
    console.error(error);
  }
}

// TODO: Move reorder projects function here
// async function reorderProjects(data: Project[]) { }

const getAvatarFromAvatar = () => { };

export { addProject, editProject, removeProject };
