import Link from 'next/link';
import { Browser, type BrowserProps } from '../Browser/Browser';

interface BrowserSliderProps {
  slides: (BrowserProps & { slug: string })[];
}

const BrowserSlider = ({ slides }: BrowserSliderProps) => (
  <div className="flex gap-x-[60px] snap-mandatory snap-x pb-5 overflow-x-scroll px-96">
    {slides.map((slide, index: number) => (
      <div className="snap-center" key={index}>
        <Link href={slide.slug}>
          <Browser key={index} {...slide} />
        </Link>
      </div>
    ))}
  </div>
);

export { BrowserSlider };
