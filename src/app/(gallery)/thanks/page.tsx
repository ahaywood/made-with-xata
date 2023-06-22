import { Header } from '@/components/Header/Header';

export const metadata = {
  title: 'Thanks | Made with Xata',
};

export default function Thanks() {
  return (
    <>
      <Header />
      <div className="page text-center min-h-[83vh] center flex-col">
        <div className="relative -top-20 col-start-3 col-span-8">
          <h1 className="mb-8">
            <div>Thank You for</div> <div>Submitting Your Project</div>
          </h1>
          <h2>
            We’ll review your submission and send you an email as soon as your
            project is published to our site.
          </h2>
        </div>
      </div>
    </>
  );
}
