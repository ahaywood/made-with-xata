import { ButtonLink } from '@/components/ButtonLink';
import { Card } from '@/components/Card';
import { ContributorDetails } from '@/components/ContributorDetails';
import { Header } from '@/components/Header';
import { OnGitHub } from '@/components/OnGitHub';
import { Tag } from '@/components/Tag';
import Link from 'next/link';
import { getXataClient } from '@/xata';
import { FeaturedScreenshot } from './components/FeaturedScreenshot';

type PageContext = {
  params: {
    slug: string;
  };
};

const xata = getXataClient();

const IndividualItem = async (context: PageContext) => {
  const slug: string = context?.params?.slug;

  // get the featured project
  const project = await xata.db.project
    .filter('slug', slug)
    .select(['*', 'contributor.*'])
    .getAll();

  // get the tags for the featured project
  const tags = await xata.db.tag_project
    .filter('projects.id', project[0]?.id)
    .select(['tags.name', 'tags.id'])
    .getAll();

  // get the additional projects
  const additionalProjects = await xata.db.project
    .select([
      'id',
      'description',
      'projectUrl',
      'slug',
      'name',
      'gitHubRepo',
      'featuredImage',
      'additionalImages',
    ])
    .getPaginated({
      pagination: {
        size: 7,
      },
    });

  return (
    <div className="gradient">
      <Header />
      <div className="page text-center pt-24 mb-16">
        <div className="col-start-3 col-span-8">
          <h1>{project[0]?.name && project[0].name}</h1>
          <h2 className="mb-8">
            {project[0]?.description && project[0].description}
          </h2>

          <div className="flex justify-center items-center gap-x-12">
            {project[0]?.projectUrl && (
              <Link
                className="bg-black text-lg py-5 px-10 rounded-full hover:bg-selectiveYellow hover:text-black"
                href={project[0].projectUrl}
                target="_blank"
              >
                Visit Website
              </Link>
            )}
            {project[0]?.gitHubRepo && (
              <OnGitHub href={project[0].gitHubRepo} />
            )}
          </div>
        </div>
      </div>

      <FeaturedScreenshot featuredImages={[]} />

      <div className="page">
        <div className="col-span-7 mb-44 project-description">
          <h3>About this Project</h3>
          {project[0]?.description && project[0].description}
        </div>

        <div className="col-start-9 col-span-4 mb-44">
          <div className="mb-16">
            <ContributorDetails
              contributor={{
                name: project[0]?.contributor?.name || '',
                avatar: project[0]?.contributor?.avatar || '',
                avatarColor:
                  (project[0]?.contributor?.avatarColor as ThemeColors) ||
                  'alienArmpit',
              }}
              githubRepo={project[0]?.gitHubRepo as string}
            />
          </div>

          {tags && (
            <div>
              <h3>Tagged As</h3>
              <div className="flex flex-wrap gap-4">
                {tags.map((tag) => (
                  <Tag
                    key={tag.id}
                    name={tag?.tags?.name as string}
                    isXShowing={false}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {additionalProjects?.records && (
        <div className="mb-48">
          <h2 className="mb-16 text-center">More Projects, More Inspiration</h2>
          <div className="overflow-x-scroll pb-5 snap-mandatory snap-x flex gap-x-14 px-5">
            {additionalProjects.records.map((item) => (
              <div className="snap-center flex-1 max-w-[590px]" key={item.id}>
                <Card
                  project={{
                    id: item.id,
                    name: item.name as string,
                    description: item.description as string,
                    projectUrl: item.projectUrl as string,
                    slug: item.slug as string,
                    gitHubRepo: item.gitHubRepo as string,
                    featuredImage: item.featuredImage as string,
                    additionalImages: item.additionalImages as string,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mb-52">
        <h2 className="mb-9">
          <div>We'd love to see what you create, share your own</div>
          <div>projects with us, in our community!</div>
        </h2>
        <ButtonLink href="/add" textSize="large" label="Submit Your Project" />
      </div>
    </div>
  );
};

export default IndividualItem;
