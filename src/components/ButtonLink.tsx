import Link from 'next/link';
import { Butterfly } from './Butterfly';

interface ButtonLinkProps {
  borderWidth?: "thick" | "thin";
  href: string;
  isButterflyShowing?: boolean;
  label: string;
}

const ButtonLink = ({ borderWidth = "thick", href, isButterflyShowing = true, label }: ButtonLinkProps) => {
  return (
    <Link href={href}>
      {isButterflyShowing && <Butterfly height={24} width={24} />}
      {label}
    </Link>
  )
}

export {ButtonLink}