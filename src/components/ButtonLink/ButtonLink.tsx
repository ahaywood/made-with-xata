import Link from 'next/link';
import { Butterfly } from '../Butterfly';

interface ButtonLinkProps {
  borderWidth?: "thick" | "thin";
  href: string;
  isButterflyShowing?: boolean;
  label: string;
}

const ButtonLink = ({ borderWidth = "thick", href, isButterflyShowing = true, label }: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <div className={`rainbow-border rounded-full relative inline-block
        ${borderWidth === 'thin' && `p-[2px]`}
        ${borderWidth === 'thick' && `p-[6px]`}
        `} data-testid="border">
        <div className="flex items-center gap-x-2 text-sm font-bold text-white px-10 py-4 bg-black rounded-full">
          {isButterflyShowing && <Butterfly height={24} width={24} />}
          {label}
        </div>
      </div>
    </Link>
  )
}

export {ButtonLink}