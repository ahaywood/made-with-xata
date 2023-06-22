'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/utils/Constants';
import { useEffect, useState } from 'react';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Logo } from '../Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // check if the user has scrolled
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // add event listener to window object
    window.addEventListener('scroll', handleScroll);

    // remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-50 ${
        isScrolled
          ? 'bg-black bg-opacity-50 backdrop-blur-md py-2'
          : 'py-8 transition-all'
      }`}
    >
      <div className="max-w-pageWidth mx-auto">
        <div className="flex items-center justify-between text-sm font-semibold">
          <nav>
            <ul className="flex items-center gap-x-12">
              <li>
                <Link href={CONSTANTS.NAV.HOME} data-testid="homeLink">
                  <Logo />
                </Link>
              </li>
              <li>
                <Link href={CONSTANTS.NAV.GALLERY}>All Projects</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-x-12 font-semibold">
            <div className="header-links">
              <Link href={CONSTANTS.NAV.LOGIN}>Login</Link>
            </div>
            <ButtonLink
              href={CONSTANTS.NAV.START_BUILDING}
              label="Start building for free"
              borderWidth="thin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
