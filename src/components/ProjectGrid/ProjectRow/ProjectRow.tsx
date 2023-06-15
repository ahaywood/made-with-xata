'use client';

import { Icon } from '@/components/Icon';
import { Tag } from '@/components/Tag';
import { Avatar } from '@/components/Avatar';
import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { SlideOutPanel } from '@/components/SlideOutPanel';
import { ProjectForm } from '@/app/admin/components/ProjectForm/ProjectForm';
import { AnimatePresence, motion } from 'framer-motion';
import { Spinner } from '@/components/Spinner';

interface ProjectRowProps {
  deleteProject: (projectId: string) => void;
  project: Project;
  tags?: Tag[];
}

const ProjectRow = ({ deleteProject, project, tags = [] }: ProjectRowProps) => {
  const [isConfirmDeleteShowing, setIsConfirmDeleteShowing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const { id, featured, slug, name, contributor, isApproved } = project;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const handleEdit = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const toggleConfirmDelete = () => {
    setIsConfirmDeleteShowing((prevValue) => !prevValue);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    deleteProject(id);
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
          onClick={toggleConfirmDelete}
        >
          <Icon width={32} height={32} name="delete" />
        </button>
        <AnimatePresence>
          {isConfirmDeleteShowing && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-x-4 absolute -right-0 bg-black"
            >
              <div className="whitespace-nowrap text-lg font-bold">
                You sure?
              </div>

              {isDeleting ? (
                <div className="text-white flex items-center justify-center">
                  <Spinner size={24} />
                </div>
              ) : (
                <div className="h-8">
                  <button
                    onClick={handleDelete}
                    type="button"
                    className="text-carmine hover:text-uclaGold"
                  >
                    <Icon name="check" height={32} width={32} />
                  </button>
                </div>
              )}
              <button
                onClick={toggleConfirmDelete}
                type="button"
                className="text-stack hover:text-uclaGold"
              >
                <Icon name="close" height={32} width={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {typeof window === 'object' &&
        createPortal(
          <SlideOutPanel defaultIsShowing={showModal} toggleModal={toggleModal}>
            <ProjectForm
              toggleVisibility={() => {}}
              state="edit"
              project={project}
            />
          </SlideOutPanel>,
          document.body
        )}
    </div>
  );
};

export { ProjectRow };
