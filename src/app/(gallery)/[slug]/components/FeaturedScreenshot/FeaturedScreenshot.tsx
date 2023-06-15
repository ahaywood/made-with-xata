'use client';

import { Browser } from '@/components/Browser';
import Image from 'next/image';
import { useState } from 'react';

interface FeaturedScreenshotProps {
  featuredImages: {
    src: string;
    alt: string;
  }[];
}

const FeaturedScreenshot = ({ featuredImages }: FeaturedScreenshotProps) => {
  const [featuredScreenshot, setFeaturedScreenshot] = useState(0);

  return (
    <div className="page pb-20">
      <div className="col-start-3 col-span-8" data-testid="featured">
        {featuredImages[featuredScreenshot]?.src && (
          <Browser
            alt={
              featuredImages[featuredScreenshot]?.alt &&
              featuredImages[featuredScreenshot].alt
            }
            src={featuredImages[featuredScreenshot].src}
            width={815}
            height={544}
          />
        )}
      </div>
      {/* thumbnails */}
      <div className="col-span-2 flex flex-col gap-10 justify-center items-end">
        {featuredImages &&
          featuredImages.map((image, index) => (
            <button
              type="button"
              key={index}
              className="h-28 rounded-md overflow-hidden"
              onClick={() => setFeaturedScreenshot(index)}
            >
              <Image alt={image.alt} height={11} width={177} src={image.src} />
            </button>
          ))}
      </div>
    </div>
  );
};

export { FeaturedScreenshot };
