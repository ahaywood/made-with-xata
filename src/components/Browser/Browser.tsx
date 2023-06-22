'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export interface BrowserProps {
  name: string;
  slug?: string;
  featuredImage: string;
  width: number;
  height: number;
}

const Browser = ({
  name,
  height,
  slug = '',
  featuredImage,
  width,
}: BrowserProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    setScrollHeight(Number(imageRef.current?.scrollHeight) - height || 0);
  }, [height]);

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <div className="flex gap-x-2 bg-opacity-50 bg-white py-2 px-3 rounded-t-md">
        <div className="w-2 h-2 circle bg-white" />
        <div className="w-2 h-2 circle bg-white" />
        <div className="w-2 h-2 circle bg-white" />
      </div>
      <div
        className="rounded-b-md w-full h-full overflow-hidden"
        style={{ width: `${width}px`, height: `${height}px` }}
        data-testid="browserComponent"
      >
        {slug ? (
          <Link href={`/${slug}`}>
            <BrowserImage
              imageRef={imageRef}
              name={name}
              featuredImage={featuredImage}
              scrollHeight={scrollHeight}
              height={height}
            />
          </Link>
        ) : (
          <BrowserImage
            imageRef={imageRef}
            name={name}
            featuredImage={featuredImage}
            scrollHeight={scrollHeight}
            height={height}
          />
        )}
      </div>
    </div>
  );
};

const BrowserImage = ({
  imageRef,
  name,
  featuredImage,
  scrollHeight,
  height,
}: Omit<BrowserProps, 'width' | 'slug'> & {
  imageRef: React.MutableRefObject<HTMLImageElement | null>;
  scrollHeight: number;
}) => (
  <motion.img
    whileHover={{
      y: -scrollHeight,
      transition: {
        duration: (scrollHeight / height) * 3,
        ease: [0.34, 0.12, 0.6, 1.1],
      },
    }}
    ref={imageRef}
    alt={name}
    src={featuredImage}
    className="w-full drop-shadow-browser"
  />
);

export { Browser };
