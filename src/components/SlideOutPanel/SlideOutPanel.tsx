import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Icon } from '../Icon';

interface SlideOutPanelProps {
  children: React.ReactNode;
  defaultIsShowing?: boolean;
}

const SlideOutPanel = ({
  children,
  defaultIsShowing = false,
}: SlideOutPanelProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(defaultIsShowing);

  const handleClick = () => {
    setIsShowing((prevState) => !prevState);
  };

  useEffect(() => {
    setIsShowing(defaultIsShowing);
  }, [defaultIsShowing]);

  const variants = {
    visible: { x: 0 },
    hidden: { x: '100%' },
  };

  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          className="p-24 w-[70vw] h-screen fixed right-0 page-padding-right bg-eerieBlack z-90"
          data-testid="slide-out-panel"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <button
            type="button"
            className="absolute right-8 top-8"
            onClick={handleClick}
          >
            <Icon height={32} width={32} name="close" />
          </button>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { SlideOutPanel };
