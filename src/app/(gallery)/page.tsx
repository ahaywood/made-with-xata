import { BrowserSlider } from '@/components/BrowserSlider';
import { slides } from '@/components/BrowserSlider/BrowserSlider.mocks';
import { ButtonLink } from '@/components/ButtonLink';
import { Card } from '@/components/Card/Card';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="gradient">
      <Header />
      <div className="max-w-pageWidth mx-auto text-center pt-24 mb-16">
        <h1>Made with Xata</h1>
        <h2>
          <div>Explore the possibilities by checking out some</div>
          <div>amazing apps built with Xata.</div>
        </h2>
      </div>

      <div className="mb-24">
        <BrowserSlider slides={slides} />
      </div>

      <div className="page mb-36">
        <div className="col-start-4 col-span-6 text-center">
          <h2 className="mb-9">
            We&apos;d love to see what you create, share your own projects with
            us, in our community!
          </h2>
          <div>
            <ButtonLink
              href="/add"
              label="Submit Your Project"
              textSize="large"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-[60px] max-w-pageWidth mx-auto card-grid mb-[200px]">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
