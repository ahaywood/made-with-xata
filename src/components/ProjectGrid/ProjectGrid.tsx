'use client';

import { Reorder } from 'framer-motion';
import { useEffect, useState } from 'react';
import { removeProject } from '@/actions/projects';
import { ProjectRow } from './ProjectRow';
import { ProjectRowHeader } from './ProjectRowHeader';

interface ProjectGridProps {
  isApproved?: boolean;
  xataData: string;
}

const ProjectGrid = ({ isApproved = true, xataData }: ProjectGridProps) => {
  const [orderedProjects, setOrderedProjects] = useState(
    JSON.parse(xataData) as Partial<Project[]>
  );

  const deleteProject = (projectId: string) => {
    // remove the project from the database
    removeProject(projectId);

    // remove project from the list
    const updatedProjects = orderedProjects.filter(
      (project) => project?.id !== projectId
    );

    // update the state
    setOrderedProjects(updatedProjects);
  };

  useEffect(() => {
    fetch(`${process.env.url as string}/api/project/reorder`, {
      method: 'POST',
      body: JSON.stringify(orderedProjects),
    }).catch((err) => console.error(err));
  }, [orderedProjects]);

  return (
    <div className="max-w-pageWidth mx-auto">
      {/* table header */}
      {!isApproved && (
        <div className="admin-gallery-table bg-bunker py-2">
          <div className="font-bold text-sm uppercase pl-4">Unapproved</div>
        </div>
      )}
      <ProjectRowHeader />

      {/* table rows */}
      <div className="relative z-stickyTableContents">
        <Reorder.Group
          axis="y"
          values={orderedProjects}
          onReorder={setOrderedProjects}
        >
          {orderedProjects.map((project) => {
            if (!project) return <li />;

            return (
              <Reorder.Item key={project.id} value={project}>
                <ProjectRow
                  key={project.id}
                  project={project}
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
