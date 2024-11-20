import { Button } from "@/components/ui/button"

import Container from "@/components/Container"

const Home = () => {
  return (
    <Container className="flex-1 flex justify-center items-center bg-accent mb-4 rounded-[32px] border border-border __bg-hero">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-7xl font-medium">Think, plan, and track <span className="text-muted-foreground">all in one place</span></h1>
        <p>Efficently manage your tasks and boost productivity</p>
        <Button size='lg' className="font-normal">
          Get free demo
        </Button>
      </div>
    </Container>
  )
}

export default Home