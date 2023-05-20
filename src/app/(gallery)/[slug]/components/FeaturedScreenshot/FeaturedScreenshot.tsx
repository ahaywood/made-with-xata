'use client';

import { Browser } from '@/components/Browser';
import Image from 'next/image';

const FeaturedScreenshot = () => (
  <div className="page pb-20">
    <div className="col-start-3 col-span-8">
      <Browser
        alt="Kittens"
        src="http://placekitten.com/1080/1080"
        width={815}
        height={544}
      />
    </div>
    {/* thumbnails */}
    <div className="col-span-2 flex flex-col gap-10 justify-center items-end">
      <button type="button">
        <Image
          alt="thumbnail"
          height={11}
          width={177}
          src="/images/placeholder-thumbnail.png"
        />
      </button>
      <button type="button">
        <Image
          alt="thumbnail"
          height={11}
          width={177}
          src="/images/placeholder-thumbnail.png"
        />
      </button>
      <button type="button">
        <Image
          alt="thumbnail"
          height={11}
          width={177}
          src="/images/placeholder-thumbnail.png"
        />
      </button>
    </div>
  </div>
);

export { FeaturedScreenshot };
