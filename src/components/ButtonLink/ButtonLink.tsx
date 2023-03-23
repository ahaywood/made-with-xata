import Link from 'next/link';
import { Butterfly } from '../Butterfly';

interface ButtonLinkProps {
  borderWidth?: 'thick' | 'thin';
  height?: 'short' | 'normal';
  width?: 'short' | 'normal';
  href: string;
  isButterflyShowing?: boolean;
  label: string;
  textSize?: 'small' | 'large';
}

const ButtonLink = ({
  borderWidth = 'thick',
  height = 'normal',
  href,
  isButterflyShowing = true,
  label,
  textSize = 'small',
  width = 'normal',
}: ButtonLinkProps) => (
  <Link href={href}>
    <div
      className={`rainbow-border rounded-full relative inline-block
        ${borderWidth === 'thin' ? `p-[2px]` : ''}
        ${borderWidth === 'thick' ? `p-[6px]` : ''}
        `}
      data-testid="border"
    >
      <div
        className={`flex items-center gap-x-2 font-bold text-white bg-black rounded-full relative z-rainbowButton
        ${textSize === 'small' ? 'text-sm' : ''}
        ${textSize === 'large' ? 'text-lg' : ''}
        ${width === 'short' ? 'px-7' : ''}
        ${width === 'normal' ? 'px-10' : ''}
        ${height === 'normal' ? 'py-4' : ''}
        ${height === 'short' ? 'py-2' : ''}
      `}
      >
        {isButterflyShowing && <Butterfly height={24} width={24} />}
        {label}
      </div>
    </div>
  </Link>
);

export { ButtonLink };
