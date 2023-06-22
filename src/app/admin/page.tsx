import { ProjectGrid } from '@/components/ProjectGrid';
import { getXataClient } from '@/xata';

const xata = getXataClient();

export const metadata = {
  title: 'Manage Projects | Made with Xata',
};

export default async function Admin() {
  const projects = await xata.db.project
    .sort('order', 'asc')
    .select([
      'id',
      'name',
      'featuredOnHomepage',
      'featuredInCarousel',
      'slug',
      'isApproved',
      'order',
      'tags',
      'gitHubRepo',
      'description',
      'featuredImage',
      'additionalImages',
      'projectUrl',
      'contributor.*',
    ])
    .getAll();

  const approvedProjects = projects.filter((project) => project.isApproved);

  const unApprovedProjects = projects.filter((project) => !project.isApproved);

  return (
    <>
      <div className="max-w-pageWidth mx-auto mb-4">
        <h1>Projects</h1>
      </div>
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
