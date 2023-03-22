import Image from "next/image"

interface AvatarProps {
  alt: string,
  size?: number
  src: string
}

const Avatar = ({ alt, size = 32, src }: AvatarProps) => {
  return (
    <Image src={src} alt={alt} height={size} width={size} className="rounded-full" />
  )
}

export { Avatar }