import { ButtonLink } from '../ButtonLink/ButtonLink'
import Link from 'next/link'
import { Logo } from '../Logo'
import { CONSTANTS } from '@/utils/Constants'

const Header = () => {
  return (
    <div className="max-w-pageWidth mx-auto py-8">
      <div className="flex justify-between text-sm font-semibold">
        <nav>
          <ul className="flex items-center gap-x-12">
            <li><Link href="/"><Logo /></Link></li>
            <li><Link href="https://xata.io/features">Features</Link></li>
            <li><Link href="https://xata.io/pricing">Pricing</Link></li>
            <li><Link href="https://xata.io/blog">Blog</Link></li>
            <li><Link href="https://xata.io/docs/overview">Docs</Link></li>
            <li><Link href="https://xata.io/chatgpt">AI</Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-x-12 font-semibold">
          <div className="header-links"><Link href="https://app.xata.io/signin">Login</Link></div>
          <ButtonLink href="https://app.xata.io/signin" label="Start building for free" borderWidth="thin" />
        </div>
      </div>
    </div>
  )
}

export {Header}