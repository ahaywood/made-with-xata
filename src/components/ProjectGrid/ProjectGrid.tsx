import { ProjectRow } from './ProjectRow';

interface ProjectGridProps {
  isApproved?: boolean;
  projects: Project[];
}

const ProjectGrid = ({ projects, isApproved = true }: ProjectGridProps) => {
  const handleEdit = () => {
    console.log('edit');
  };

  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <div className="max-w-pageWidth mx-auto">
      {isApproved ? (
        <div className="admin-gallery-table text-sm pb-3 border-bunker border-b-2 sticky pt-3 top-0 bg-black z-10">
          <div>Featured?</div>
          <div>Project</div>
          <div>Contributor</div>
          <div>Tags</div>
          <div />
        </div>
      ) : (
        <div className="admin-gallery-table bg-bunker py-2">
          <div className="font-bold text-sm col-start-2 uppercase">
            Unapproved
          </div>
        </div>
      )}

      {/* table rows */}
      <div className="relative z-0">
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={{ ...project, isApproved }}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export { ProjectGrid };
