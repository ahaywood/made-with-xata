'use client';

import { UserForm } from '@/app/admin/components/UserForm';
import { Avatar } from '@/components/Avatar';
import { Icon } from '@/components/Icon';
import { SlideOutPanel } from '@/components/SlideOutPanel';
import { Spinner } from '@/components/Spinner';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface UserRowProps {
  deleteUser: (userId: string) => Promise<void>;
  user: User;
}

const UserRow = ({ user, deleteUser }: UserRowProps) => {
  const [isConfirmDeleteShowing, setIsConfirmDeleteShowing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { id, name, verifiedEmail, isApproved, email, avatar } = user;

  const handleEdit = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteUser(id as string);
    setIsDeleting(false);
  };

  const toggleConfirmDelete = () => {
    setIsConfirmDeleteShowing((prevValue) => !prevValue);
  };

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  return (
    <div className="bg-black admin-user-table py-6 border-bunker border-b-2">
      <div className="text-selectiveYellow flex justify-center">
        {user.isApproved && <Icon name="check" width={32} height={32} />}
      </div>
      <div className="text-selectiveYellow flex justify-center">
        {user.verifiedEmail && <Icon name="check" width={32} height={32} />}
      </div>
      <div
        className={`flex items-center gap-x-2 font-bold text-lg ${
          !isApproved ? 'italic text-gray' : ''
        }`}
      >
        <Avatar avatarColor="alienArmpit" src={avatar} alt={name} />
        <div className="whitespace-nowrap truncate">{name && name}</div>
      </div>
      <div className={`text-lg ${!isApproved ? 'italic text-gray' : ''}`}>
        <div className="whitespace-nowrap truncate">{email && email}</div>
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
            <UserForm user={user} state="edit" toggleVisibility={toggleModal} />
          </SlideOutPanel>,
          document.body
        )}
    </div>
  );
};

export { UserRow };
