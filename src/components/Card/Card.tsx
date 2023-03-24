/* eslint-disable @next/next/no-img-element */
import { ButtonLink } from '../ButtonLink';
import { OnGitHub } from '../OnGitHub/OnGitHub';

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => (
  <div className="border-darkGray rounded-xl border-[1px] overflow-hidden max-h-[700px]">
    <div className="p-10">
      <h2 className="mb-3">{project?.name && project.name}</h2>
      <p className="mb-6 text-sm leading-8">
        {project?.description && project.description}
      </p>
      <div className="flex items-center gap-x-9">
        <ButtonLink
          href={`/${project.slug}`}
          label="Project Details"
          borderWidth="thin"
          isButterflyShowing={false}
          textSize="large"
        />
        <OnGitHub href={project.gitHubRepo} />
      </div>
    </div>

    <div className="flex gap-x-4 w-[820px] -top-8 relative">
      {/* screen 1 */}
      <div className="mt-14 -rotate-12">
        <img
          className="rounded-lg"
          src={project.featuredImage}
          alt={`${project.name} featured screenshot`}
        />
      </div>

      {/* screen 2 */}
      <div className="-rotate-12">
        <img
          className="rounded-lg"
          src={project.screenshot1}
          alt={`${project.name} first screenshot`}
        />
      </div>
    </div>
  </div>
);

export { Card };
