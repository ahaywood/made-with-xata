import Link from 'next/link';
import { Avatar } from '../Avatar';

interface AccountNavProps {
  user: {
    name: string;
    avatar: string;
    avatarColor: ThemeColors;
  };
}

const AccountNav = ({ user }: /* props */ AccountNavProps) => (
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
      <div className="font-bold text-lg leading-none">{user.name}</div>
      <Link
        href="#"
        className="text-gray text-sm hover:underline hover:text-white"
      >
        Logout
      </Link>
    </div>
  </div>
);

export { AccountNav };
