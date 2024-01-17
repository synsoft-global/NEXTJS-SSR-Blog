import { RiInstagramLine, RiLinkedinFill, RiFacebookFill, RiTwitterXLine } from 'react-icons/ri'
import { TNav, TSocialMediaLink } from "./Footer.type"



export const NAVS: TNav = {
  LINKS: [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '#!' },
    { label: 'Our Clients', link: '#!' },
  ],
  LEGALS: [
    { label: 'Privacy Policy', link: '#!' },
    { label: 'Terms of Service', link: '#!' },
    { label: 'License', link: '#!' },
  ]
}


export const SOCIAL_MEDIA_LINKS: TSocialMediaLink[] = [
  { link: '#!', children: <RiTwitterXLine /> },
  { link: '#!', children: <RiLinkedinFill /> },
  { link: '#!', children: <RiFacebookFill /> },
  { link: '#!', children: <RiInstagramLine /> },
]