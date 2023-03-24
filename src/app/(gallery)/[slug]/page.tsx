import { Browser } from '@/components/Browser';
import { ButtonLink } from '@/components/ButtonLink';
import { Card } from '@/components/Card';
import { ContributorDetails } from '@/components/ContributorDetails';
import { Header } from '@/components/Header';
import { OnGitHub } from '@/components/OnGitHub';
import { Tag } from '@/components/Tag';
import Image from 'next/image';
import Link from 'next/link';

const IndividualItem = () => (
  <div className="gradient">
    <Header />
    <div className="page text-center pt-24 mb-16">
      <div className="col-start-3 col-span-8">
        <h1>Prune Your Follows</h1>
        <h2 className="mb-8">
          Find Twitter accounts you follow that no longer spark joy, unfollow
          them and make room for new connections to grow 🌱
        </h2>

        <div className="flex justify-center items-center gap-x-12">
          <Link
            className="bg-black text-lg py-5 px-10 rounded-full hover:bg-selectiveYellow hover:text-black"
            href="#"
          >
            Visit Website
          </Link>
          <OnGitHub href="#" />
        </div>
      </div>
    </div>

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

    <div className="page">
      <div className="col-span-7 mb-44 project-description">
        <h3>About this Project</h3>
        <p>
          Find Twitter accounts you follow that no longer spark joy, unfollow
          them and make room for new connections to grow 🌱
        </p>
        <p>
          PruneYourFollows is a web app and was built Xata using GatsbyJS,
          NextAuth and Tailwind to let you find accounts on Twitter to unfollow.
          It uses Xata's search capabilities to find accounts that you follow
          that are inactive or stale and lets you unfollow them in bulk.
        </p>
      </div>

      <div className="col-start-9 col-span-4">
        <div className="mb-16">
          <ContributorDetails />
        </div>
        <div>
          <h3>Tagged As</h3>
          <div className="flex flex-wrap gap-4">
            <Tag name="Gatsby" isXShowing={false} />
            <Tag name="Tailwind" isXShowing={false} />
            <Tag name="React" isXShowing={false} />
            <Tag name="Styled Components" isXShowing={false} />
            <Tag name="date-fns" isXShowing={false} />
          </div>
        </div>
      </div>
    </div>

    <div className="mb-48">
      <h2 className="mb-16 text-center">More Projects, More Inspiration</h2>
      <div className="overflow-x-scroll pb-5 snap-mandatory snap-x flex gap-x-14">
        <div className="snap-center flex-1 max-w-[590px]">
          <Card />
        </div>
        <div className="snap-center flex-1 max-w-[590px]">
          <Card />
        </div>
        <div className="snap-center flex-1 max-w-[590px]">
          <Card />
        </div>
        <div className="snap-center flex-1 max-w-[590px]">
          <Card />
        </div>
        <div className="snap-center flex-1 max-w-[590px]">
          <Card />
        </div>
      </div>
    </div>

    <div className="text-center mb-52">
      <h2 className="mb-9">
        <div>We'd love to see what you create, share your own</div>
        <div>projects with us, in our community!</div>
      </h2>
      <ButtonLink href="/add" textSize="large" label="Submit Your Project" />
    </div>
  </div>
);

export default IndividualItem;
