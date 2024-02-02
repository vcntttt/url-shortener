import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link
} from '@nextui-org/react'
import Image from 'next/image'
import ThemeSwitch from './ThemeSwitch'
import DbStatus from './DbStatus'

export default function Header () {
  return (
    <Navbar className="dark:bg-[#121212]">
            <NavbarBrand>
              <Link href="/" className='flex gap-x-2'>
                <Image src="/favicon.svg" alt="icon" width={24} height={24}/>
                <p className="font-bold dark:text-white text-black">URL Shortener</p>
              </Link>
            </NavbarBrand>

            <NavbarContent as="div" justify="end">
              <DbStatus/>
              <ThemeSwitch></ThemeSwitch>
              <Link target='_blank' href="https://github.com/vcntttt/url-shortener">
                <Image src="/githubIcon.svg" alt="github" width={24} height={24}></Image>
              </Link>
            </NavbarContent>
          </Navbar>
  )
}
