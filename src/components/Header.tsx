import Link from "next/link"
import Container from "./Container"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header>
      <Container className="flex justify-between items-center py-4 px-4 md:px-8">
        <Link href='/' className="font-semibold text-2xl">
          ChronoProject
        </Link>
        <Button variant='outline' size='lg'>
          Get demo
        </Button>
      </Container>
    </header>
  )
}

export default Header