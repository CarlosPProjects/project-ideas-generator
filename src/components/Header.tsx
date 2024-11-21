import Link from "next/link"
import Container from "./Container"
import { buttonVariants } from "./ui/button"

const Header = () => {
  return (
    <header>
      <Container className="flex justify-between items-center py-4 px-4 md:px-8">
        <Link href='/' className="font-semibold text-2xl">
          ChronoProject
        </Link>
        <Link className={buttonVariants({ size: 'lg', variant: 'outline' })} href='/ideas'>Get demo</Link>
      </Container>
    </header>
  )
}

export default Header