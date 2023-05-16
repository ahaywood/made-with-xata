'use client';

import { AccountNav } from '@/components/AccountNav';
import { Logo } from '@/components/Logo';
import { SlideOutPanel } from '@/components/SlideOutPanel';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ProjectForm } from '../ProjectForm';

interface HeaderProps {
  user: User;
}

const Header = ({ user }: HeaderProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  return (
    <div className="flex justify-between">
      <Logo />
      <div className="flex gap-x-10">
        <button
          type="button"
          className="font-bold text-lg py-2 px-5 rounded-full hover:bg-selectiveYellow hover:text-black"
          onClick={toggleModal}
        >
          Add Project
        </button>
        <AccountNav user={user} />
      </div>
      {typeof window === 'object' &&
        createPortal(
          <SlideOutPanel defaultIsShowing={showModal} toggleModal={toggleModal}>
            <ProjectForm state="add" />
          </SlideOutPanel>,
          document.body
        )}
    </div>
  );
};

export { Header };
