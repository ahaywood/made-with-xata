import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* eslint-disable @next/next/no-img-element */
interface BrowserProps {
  alt: string;
  src: string;
  width: number;
  height: number;
}

const Browser = ({ alt, height, src, width }: BrowserProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    setScrollHeight(Number(imageRef.current?.scrollHeight) - height || 0);
  }, [height]);

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      data-testid="browserComponent"
    >
      <div className="flex gap-x-2 bg-opacity-50 bg-white py-2 px-3 rounded-t-md">
        <div className="w-2 h-2 circle bg-white" />
        <div className="w-2 h-2 circle bg-white" />
        <div className="w-2 h-2 circle bg-white" />
      </div>
      <div className="rounded-b-md w-full h-full overflow-y-scroll">
        <motion.img
          whileHover={{
            y: -scrollHeight,
            transition: { duration: 2, ease: [0.34, 0.12, 0.6, 1.1] },
          }}
          ref={imageRef}
          alt={alt}
          src={src}
          className="w-full"
        />
      </div>
    </div>
  );
};

export { Browser };
