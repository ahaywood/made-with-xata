/* eslint-disable @next/next/no-img-element */
import { getTextColor } from '@/utils/Colors';
import { COLORS } from '@/utils/Constants';

interface AvatarProps {
  alt?: string;
  avatarColor?: ThemeColors;
  size?: number;
  src?: string;
}

const Avatar = ({
  alt = 'A',
  avatarColor = 'fluorescentPink',
  size = 32,
  src,
}: AvatarProps) => {
  // if there's an avatar image, display it
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        height={size}
        width={size}
        className="rounded-full aspect-square object-cover"
      />
    );
  }

  // otherwise, display a colored circle with the first letter of the name
  const textColor = getTextColor(COLORS[avatarColor]);
  return (
    <div
      className={`flex items-center justify-center text-xl rounded-full bg-${avatarColor} not-italic`}
      style={{ width: `${size}px`, height: `${size}px`, color: textColor }}
    >
      {alt[0]}
    </div>
  );
};

export { Avatar };
