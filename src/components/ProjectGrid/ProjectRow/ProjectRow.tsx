'use client';

import { Icon } from '@/components/Icon';
import { Tag } from '@/components/Tag';
import { Avatar } from '@/components/Avatar';
import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { SlideOutPanel } from '@/components/SlideOutPanel';
import { ProjectForm } from '@/app/admin/components/ProjectForm/ProjectForm';

interface ProjectRowProps {
  project: Project;
  tags?: Tag[];
}

const ProjectRow = ({ project, tags = [] }: ProjectRowProps) => {
  const { id, featured, slug, name, contributor, isApproved } = project;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const handleEdit = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const handleDelete = () => {
    fetch(`/api/project/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <div className="bg-black admin-gallery-table relative items-center py-6 border-bunker border-b-2 project-row">
      <div className="absolute -left-8 drag-drop-handle pr-6 py-6">
        {/* drag and drop handle */}
        <button type="button" className="cursor-grab">
          <Icon name="verticalDots" />
        </button>
      </div>
      <div className="text-selectiveYellow">
        {featured && <Icon name="check" width={32} height={32} />}
      </div>
      <div className="text-xl font-bold">
        {slug ? (
          <Link
            href={`/${slug}`}
            className={`hover:text-selectiveYellow hover:underline ${
              !isApproved ? 'italic text-gray' : ''
            }`}
          >
            {name}
          </Link>
        ) : (
          <div>{name}</div>
        )}
      </div>
      <div
        className={`flex items-center gap-x-2 text-lg ${
          !isApproved ? 'italic text-gray' : ''
        }`}
      >
        {contributor && (
          <Avatar src={contributor.avatar} alt={contributor.name} />
        )}
        <div className="whitespace-nowrap truncate">
          {contributor?.name && contributor.name}
        </div>
      </div>
      <div className="relative">
        <div className="flex relative gap-x-4 overflow-x-auto pb-4 top-2 z-80 pr-12">
          {tags &&
            tags.map((tag) => (
              <Tag isXShowing={false} name={tag.name} key={tag.id} />
            ))}
        </div>
        <div className="absolute w-1/2 right-0 h-full bg-gradient-to-l from-black z-90 top-0 pointer-events-none" />
      </div>
      <div className="flex gap-x-4">
        {/* EDIT */}
        <button
          type="button"
          className="hover:text-selectiveYellow"
          data-testid="editProject"
          onClick={handleEdit}
        >
          <Icon width={32} height={32} name="edit" />
        </button>
        {/* DELETE */}
        <button
          type="submit"
          className="hover:text-selectiveYellow"
          data-testid="deleteProject"
          onClick={handleDelete}
        >
          <Icon width={32} height={32} name="delete" />
        </button>
      </div>
      {typeof window === 'object' &&
        createPortal(
          <SlideOutPanel defaultIsShowing={showModal} toggleModal={toggleModal}>
            <ProjectForm state="edit" project={project} />
          </SlideOutPanel>,
          document.body
        )}
    </div>
  );
};

export { ProjectRow };
