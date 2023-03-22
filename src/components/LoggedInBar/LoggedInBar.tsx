import Link from 'next/link';
import { ButtonLink } from '../ButtonLink';
import { AccountNav } from '../AccountNav';

interface LoggedInBarProps {
  buttonLabel: string;
  buttonLink: string;
  user: User;
}

const LoggedInBar = ({
  buttonLabel,
  buttonLink,
  user,
}: /* props */ LoggedInBarProps) => (
  <div className="bg-black py-3 z-accountBar fixed bottom-0 w-full">
    <div className="max-w-pageWidth mx-auto flex justify-between">
      <div className="flex items-center gap-x-8 relative">
        <ButtonLink
          href={buttonLink}
          label={buttonLabel}
          borderWidth="thin"
          height="short"
          width="short"
        />
        <Link
          href="/"
          className="hover:text-selectiveYellow hover:underline font-bold"
        >
          All Projects
        </Link>
      </div>
      <AccountNav user={user} />
    </div>
  </div>
);

export { LoggedInBar };
