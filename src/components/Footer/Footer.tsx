import Link from "next/link"
import { Xata } from "../Xata/Xata"
import { Icon } from "../Icon"
import { CONSTANTS } from "@/utils/Constants"

const Footer = () => {

  const currentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <footer className="text-sm">
      <div className="page pb-20">
        <div className="col-span-10">
          <div className="mb-10"><Xata /></div>
          <div>
            <div>Xata is a Serverless Data Platform that radically</div>
            <div>simplifies the way developers work with data.</div>
          </div>
        </div>
        <div>
          <div className="mb-8"><strong>Product</strong></div>
          <ul className="footer-links">
            <li><Link href={CONSTANTS.NAV.PRICING}>Pricing</Link></li>
            <li><Link href={CONSTANTS.NAV.DOCS}>Docs</Link></li>
            <li><Link href={CONSTANTS.NAV.SUPPORT}>Support</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-8"><strong>Company</strong></div>
          <ul className="footer-links">
            <li><Link href={CONSTANTS.NAV.ABOUT}>About Us</Link></li>
            <li><Link href={CONSTANTS.NAV.BLOG}>Blog</Link></li>
            <li><Link href={CONSTANTS.NAV.CAREERS}>Careers</Link></li>
          </ul>
        </div>

        <div className="col-span-12"><hr className="mt-8 mb-6" /></div>

        <div className="col-span-6">
          Copyright &copy; {currentYear()}. Xatabase, Inc. All rights reserved.
        </div>
        <div className="col-span-6 flex items-center justify-end gap-x-4">
          <ul className="flex legal-links">
            <li><Link href={CONSTANTS.LEGAL.COOKIES}>Cookies</Link></li>
            <li><Link href={CONSTANTS.LEGAL.TERMS}>Terms</Link></li>
            <li><Link href={CONSTANTS.LEGAL.PRIVACY_POLICY}>Privacy Policy</Link></li>
          </ul>
          <ul className="flex gap-x-4 items-center">
            <li><Link href="#"><Icon height={32} width={32} name="email" /></Link></li>
            <li><Link href="#"><Icon height={32} width={32} name="twitter" /></Link></li>
            <li><Link href="#"><Icon height={32} width={32} name="discord" /></Link></li>
            <li><Link href="#"><Icon height={32} width={32} name="linkedin" /></Link></li>
          </ul>
        </div>
      </div>
    </footer>

  )
}

export {Footer}