import { ProjectGrid } from '@/components/ProjectGrid';
import { getXataClient } from '@/xata';

const xata = getXataClient();

export default async function Admin() {
  const projects = await xata.db.project
    .select([
      'id',
      'name',
      'featuredInCarousel',
      'slug',
      'isApproved',
      'contributor.*',
    ])
    .getAll();

  const tags = await xata.db.tag_project
    .select(['projects.id', 'tags.name', 'tags.id'])
    .getAll();

  // build a projects list, with tags
  const projectsWithTags = projects.map((project) => {
    // get this project's tags
    const projectTags = tags.filter((tag) => tag.projects?.id === project.id);

    // reformat my tags to match the shape of the Tag type
    const myTags = projectTags.map((tag) => ({ ...tag.tags }));

    return {
      ...project,
      tags: [...myTags],
    };
  });

  const approvedProjects = projectsWithTags.filter(
    (project) => project.isApproved
  );

  const unApprovedProjects = projectsWithTags.filter(
    (project) => !project.isApproved
  );

  return (
    <>
      {projects && (
        <div className="mb-36">
          <ProjectGrid xataData={JSON.stringify(approvedProjects)} />
        </div>
      )}
      {projects && (
        <div>
          <ProjectGrid
            isApproved={false}
            xataData={JSON.stringify(unApprovedProjects)}
          />
        </div>
      )}
    </>
  );
}
