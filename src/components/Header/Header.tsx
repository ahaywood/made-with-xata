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
            <li><Link href={CONSTANTS.NAV.HOME} data-testid="homeLink"><Logo /></Link></li>
            <li><Link href={CONSTANTS.NAV.FEATURES}>Features</Link></li>
            <li><Link href={CONSTANTS.NAV.PRICING}>Pricing</Link></li>
            <li><Link href={CONSTANTS.NAV.BLOG}>Blog</Link></li>
            <li><Link href={CONSTANTS.NAV.DOCS}>Docs</Link></li>
            <li><Link href={CONSTANTS.NAV.AI}>AI</Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-x-12 font-semibold">
          <div className="header-links"><Link href={CONSTANTS.NAV.LOGIN}>Login</Link></div>
          <ButtonLink href={CONSTANTS.NAV.START_BUILDING} label="Start building for free" borderWidth="thin" />
        </div>
      </div>
    </div>
  )
}

export {Header}