'use client'

import Link from "next/link"
import Container from "./Container"
import { buttonVariants } from "./ui/button"
import { usePathname } from "next/navigation"

const Header = () => {

  const pathName = usePathname();

  const isHomePage = pathName === '/';

  return (
    <header className={`${!isHomePage && 'border-b border-border shadow'}`}>
      <Container className="flex justify-between items-center py-4">
        <Link href='/' className="font-semibold text-2xl">
          ChronoProject
        </Link>
        <Link className={buttonVariants({ size: 'lg', variant: 'outline' })} href='/ideas'>Get demo</Link>
      </Container>
    </header>
  )
}

export default Header