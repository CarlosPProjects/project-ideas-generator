'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import Container from "./Container"
import { ModeToggle } from "./mode-toggle"

const Header = () => {

  const pathName = usePathname();

  const isHomePage = pathName === '/';

  return (
    <header className={`${!isHomePage && 'border-b border-border shadow'}`}>
      <Container className="flex justify-between items-center py-4">
        <Link href='/' className="font-semibold text-2xl">
          ChronoProject
        </Link>
        <ModeToggle />
      </Container>
    </header>
  )
}

export default Header