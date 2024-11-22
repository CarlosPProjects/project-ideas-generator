import Container from "@/components/Container"
import FloatingBox from "./_components/floating-box"
import HeroContainer from "./_components/hero-container"
import Header from "@/components/Header"

const Home = () => {
  return (
    <>
      <Header />
      <Container className="w-full flex-1 flex justify-center items-center bg-accent sm:rounded-[32px] px-4 py-8 sm:mb-4 border border-border relative overflow-hidden __bg-hero">
        <HeroContainer />
        <FloatingBox initialPosition="-100%" className="-left-8 top-24 bg-[#fff9b1]" />
        <FloatingBox initialPosition="100%" className="-right-8 bottom-24 bg-gray-100" />
      </Container>
    </>
  )
}

export default Home