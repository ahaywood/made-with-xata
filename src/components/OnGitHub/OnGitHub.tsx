import Link from "next/link"
import { Icon } from "../Icon"

interface OnGitHubProps {
  href: string
}

const OnGitHub = ({ href}: OnGitHubProps) => {
  return (
    <Link href={href} className="flex items-center gap-x-3 text-white hover:text-selectiveYellow">
      <Icon height={32} width={32} name="github" />
      <div className="text-lg font-bold">Project on GitHub</div>
    </Link>
  )
}

export { OnGitHub }