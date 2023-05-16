'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Icon } from '../Icon';

interface SlideOutPanelProps {
  children: React.ReactNode;
  defaultIsShowing?: boolean;
  toggleModal?: () => void;
}

const SlideOutPanel = ({
  children,
  defaultIsShowing = false,
  toggleModal = () => {},
}: SlideOutPanelProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(defaultIsShowing);

  const handleCloseClick = () => {
    setIsShowing((prevState) => !prevState);
    toggleModal();
  };

  useEffect(() => {
    setIsShowing(defaultIsShowing);
  }, [defaultIsShowing]);

  // set up the escape key listener
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsShowing(false);
      }
    };
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const variants = {
    visible: { x: 0 },
    hidden: { x: '100%' },
  };

  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          className="w-[40vw] h-screen fixed top-0 right-0 page-padding-right bg-eerieBlack z-slideOutPanel"
          data-testid="slide-out-panel"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <button
            type="button"
            className="absolute right-8 top-8"
            onClick={handleCloseClick}
          >
            <Icon height={32} width={32} name="close" />
          </button>
          <div className="p-24 h-full overflow-y-scroll">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { SlideOutPanel };
