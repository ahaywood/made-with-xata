'use client';

import { Reorder } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ProjectRow } from './ProjectRow';

interface ProjectGridProps {
  isApproved?: boolean;
  xataData: string;
}

const ProjectGrid = ({ isApproved = true, xataData }: ProjectGridProps) => {
  const [orderedProjects, setOrderedProjects] = useState(
    JSON.parse(xataData) as Partial<Project[]>
  );

  const deleteProject = (projectId: string) => {
    // remove project frm the list
    const updatedProjects = orderedProjects.filter(
      (project) => project?.id !== projectId
    );

    // update the state
    setOrderedProjects(updatedProjects);
  };

  useEffect(() => {
    console.log({ orderedProjects });
    fetch(`${process.env.url as string}/api/project/reorder`, {
      method: 'POST',
      body: JSON.stringify(orderedProjects),
    }).catch((err) => console.error(err));
  }, [orderedProjects]);

  return (
    <div className="max-w-pageWidth mx-auto">
      {/* table header */}
      {isApproved ? (
        <div className="admin-gallery-table text-sm pb-3 border-bunker border-b-2 sticky pt-3 top-0 bg-black z-stickyTableHeader">
          <div>Carousel?</div>
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
      <div className="relative z-stickyTableContents">
        <Reorder.Group
          axis="y"
          values={orderedProjects}
          onReorder={setOrderedProjects}
        >
          {orderedProjects.map((project) => {
            if (!project) return <li />;

            // have to simplify the result coming back from Xata so I can pass it to a client component
            const { contributor, tags, ...simplifiedProject } = project;

            return (
              <Reorder.Item key={project.id} value={project}>
                <ProjectRow
                  key={project.id}
                  project={{
                    ...simplifiedProject,
                    contributor: { ...(contributor as Contributor) },
                  }}
                  tags={tags}
                  deleteProject={deleteProject}
                />
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </div>
    </div>
  );
};

export { ProjectGrid };
