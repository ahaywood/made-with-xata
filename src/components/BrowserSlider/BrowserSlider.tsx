import { Browser, type BrowserProps } from '../Browser/Browser';

interface BrowserSliderProps {
  slides: BrowserProps[];
}

const BrowserSlider = ({ slides }: BrowserSliderProps) => (
  <div className="flex gap-x-[60px] snap-mandatory snap-x pb-5 overflow-x-scroll px-96">
    {slides.map((slide: BrowserProps, index: number) => (
      <div className="snap-center" key={index}>
        <Browser key={index} {...slide} />
      </div>
    ))}
  </div>
);

export { BrowserSlider };
