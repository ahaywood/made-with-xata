'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AccountForm } from '@/app/admin/components/AccountForm';
import { ButtonLink } from '../ButtonLink';
import { AccountNav } from '../AccountNav';
import { SlideOutPanel } from '../SlideOutPanel';

interface LoggedInBarProps {
  buttonLabel: string;
  buttonLink: string;
  user: User;
}

const LoggedInBar = ({
  buttonLabel,
  buttonLink,
  user,
}: /* props */ LoggedInBarProps) => {
  const [showAccountForm, setShowAccountForm] = useState(false);

  const toggleAccountFormModal = () => {
    setShowAccountForm((prevValue) => !prevValue);
  };

  return (
    <div className="bg-black py-3 z-accountBar fixed bottom-0 w-full border-t-[1px] border-darkGray">
      <div className="max-w-pageWidth mx-auto flex justify-between">
        <div className="flex items-center gap-x-8 relative">
          <ButtonLink
            href={buttonLink}
            label={buttonLabel}
            borderWidth="thin"
            height="short"
            width="short"
          />
          <Link
            href="/admin"
            className="hover:text-selectiveYellow hover:underline font-bold"
          >
            Manage Projects
          </Link>
        </div>
        <AccountNav handleAccountClick={toggleAccountFormModal} user={user} />
      </div>
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
    </div>
  );
};

export { LoggedInBar };
