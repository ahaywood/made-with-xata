'use client';

import Link from 'next/link';
import { Avatar } from '../Avatar';

interface AccountNavProps {
  handleAccountClick?: () => void;
  user: {
    name?: string;
    avatar?: string;
    avatarColor?: ThemeColors;
  };
}

const AccountNav = ({
  handleAccountClick = () => {},
  user,
}: /* props */ AccountNavProps) => (
  <div className="flex gap-x-4 items-center">
    <div>
      <Avatar
        alt={user.name}
        src={user.avatar}
        avatarColor={user.avatarColor}
        size={42}
      />
    </div>
    <div>
      <div className="font-bold text-lg leading-none hover:text-uclaGold">
        <button type="button" onClick={handleAccountClick}>
          {user.name}
        </button>
      </div>
      <Link href="/logout" className="text-gray text-sm hover:text-uclaGold">
        Logout
      </Link>
    </div>
  </div>
);

export { AccountNav };
