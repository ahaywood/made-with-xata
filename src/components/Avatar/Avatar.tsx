import { getTextColor } from "@/utils/Colors"
import Image from "next/image"
import Tailwind from "../../../tailwind.config"

interface AvatarProps {
  alt: string,
  avatarColor?: 'alienArmpit' | 'malachite' | 'munsellGreen' | 'tiffanyBlue' | 'irisBlue' | 'vividCerulean' | 'blueDeFrance' | 'veryLightBlue' | 'lavenderBlue' | 'lavender' | 'phlox' | 'fluorescentPink' | 'folly'
  size?: number
  src?: string
}

const Avatar = ({ alt, avatarColor = 'fluorescentPink', size = 32, src }: AvatarProps) => {
  if (src) {
    return (
      <Image src={src} alt={alt} height={size} width={size} className="rounded-full" />
    )
  } else {
    const textColor = getTextColor(Tailwind.theme?.extend?.colors[avatarColor]);
    return (
      <div
        className={`flex items-center justify-center text-xl rounded-full bg-${avatarColor}`}
        style={{ width: `${size}px`, height: `${size}px`, color: textColor }}
      >
        {alt[0]}
      </div>
    )
  }
}

export { Avatar }