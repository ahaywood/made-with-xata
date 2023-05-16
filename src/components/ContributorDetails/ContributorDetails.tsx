import { Avatar } from '../Avatar';

interface ContributorDetailsProps {
  contributor: Contributor;
  githubRepo: string;
}

export const getGitHubUsername = (url: string) => {
  const urlParts = url.split('/');
  const username = urlParts[urlParts.length - 2];
  return username;
};

export const getGitHubAvatar = (username: string, size = '200') =>
  `https://github.com/${username}.png?size=${size}`;

const ContributorDetails = ({
  contributor,
  githubRepo,
}: ContributorDetailsProps) => (
  <div className="flex gap-x-5 items-center">
    <div>
      <Avatar
        alt="Queen Raae"
        size={72}
        src={getGitHubAvatar(getGitHubUsername(githubRepo))}
      />
    </div>
    {contributor.name && (
      <div>
        <h3 className="leading-none">Contributed By</h3>
        <div className="text-2xl leading-none">{contributor.name}</div>
      </div>
    )}
  </div>
);
export { ContributorDetails };
