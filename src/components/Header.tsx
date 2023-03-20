import { ButtonLink } from './ButtonLink'
import Link from 'next/link'
import Logo from './Logo'

const Header = () => {
  return (
    <div className="page py-8">
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
        <nav className="flex items-center gap-x-12 font-semibold">
          <Link href="https://app.xata.io/signin">Login</Link>
          <ButtonLink href="https://app.xata.io/signin" label="Start building for free" />
        </nav>
      </div>
    </div>
  )
}

export {Header}