import { AccountNav } from '@/components/AccountNav';
import { Logo } from '@/components/Logo';

interface HeaderProps {
  user: User;
}

const Header = ({ user }: HeaderProps) => (
  <div className="flex justify-between">
    <Logo />
    <AccountNav user={user} />
  </div>
);

export { Header };
