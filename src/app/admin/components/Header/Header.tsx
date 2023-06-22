'use client';

import { AccountNav } from '@/components/AccountNav';
import { Logo } from '@/components/Logo';
import { SlideOutPanel } from '@/components/SlideOutPanel';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ProjectForm } from '../ProjectForm';
import { AccountForm } from '../AccountForm';
import { UserForm } from '../UserForm';

interface HeaderProps {
  user: User;
}

const Header = ({ user }: HeaderProps) => {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showAccountForm, setShowAccountForm] = useState(false);
  const [showUserFormModal, setShowUserFormModal] = useState(false);
  const pathname = usePathname();

  const toggleProjectFormModal = () => {
    setShowProjectModal((prevValue) => !prevValue);
  };

  const toggleAccountFormModal = () => {
    setShowAccountForm((prevValue) => !prevValue);
  };

  const toggleUserFormModal = () => {
    setShowUserFormModal((prevValue) => !prevValue);
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-12">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/admin" className="hover:text-uclaGold font-bold text-lg">
          Projects
        </Link>
        <Link
          href="/admin/users"
          className="hover:text-uclaGold font-bold text-lg"
        >
          Users
        </Link>
      </div>
      <div className="flex gap-x-10">
        {pathname === '/admin/users' ? (
          <button
            type="button"
            className="font-bold text-lg py-2 px-5 rounded-full hover:bg-selectiveYellow hover:text-black"
            onClick={toggleUserFormModal}
          >
            Invite User
          </button>
        ) : (
          <button
            type="button"
            className="font-bold text-lg py-2 px-5 rounded-full hover:bg-selectiveYellow hover:text-black"
            onClick={toggleProjectFormModal}
          >
            Add Project
          </button>
        )}
        <AccountNav handleAccountClick={toggleAccountFormModal} user={user} />
      </div>
      {typeof window === 'object' &&
        createPortal(
          <SlideOutPanel
            data-testid="slideOutPanel"
            defaultIsShowing={showProjectModal}
            toggleModal={toggleProjectFormModal}
          >
            <ProjectForm
              state="add"
              toggleVisibility={toggleProjectFormModal}
            />
          </SlideOutPanel>,
          document.body
        )}
      {typeof window === 'object' &&
        createPortal(
          <SlideOutPanel
            data-testid="accountSlideOutPanel"
            defaultIsShowing={showAccountForm}
            toggleModal={toggleAccountFormModal}
          >
            <AccountForm />
          </SlideOutPanel>,
          document.body
        )}
      {typeof window === 'object' &&
        createPortal(
          <SlideOutPanel
            data-testid="accountSlideOutPanel"
            defaultIsShowing={showUserFormModal}
            toggleModal={toggleUserFormModal}
          >
            <UserForm />
          </SlideOutPanel>,
          document.body
        )}
    </div>
  );
};

export { Header };
