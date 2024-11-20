'use client'

import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

import Container from "@/components/Container"

const Home = () => {
  return (
    <Container className="flex-1 flex justify-center items-center bg-accent mb-4 rounded-[32px] border border-border relative overflow-hidden __bg-hero">
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
        className="max-w-3xl text-center space-y-8 z-10">
        <h1 className="text-7xl font-medium">Think, plan, and track <span className="text-muted-foreground">all in one place</span></h1>
        <p>Efficently manage your tasks and boost productivity</p>
        <Button size='lg' className="font-normal">
          Get free demo
        </Button>
      </motion.div>
      <motion.div
        initial={{ x: "-100%", rotate: -15 }}
        animate={{ x: 0, transition: { duration: 0.3, delay: 1, type: "spring", stiffness: 100 } }}
        whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
        transition={{ type: "spring", stiffness: 100 }}
        className="z-0 absolute flex flex-col gap-2 p-4 -left-8 top-24 size-40 rounded-3xl bg-[#fff9b1] shadow-lg rotate-12 hover:rotate-0">
      </motion.div>
      <motion.div
        initial={{ x: "100%", rotate: 15 }}
        animate={{ x: 0, transition: { duration: 0.3, delay: 0.8, type: "spring", stiffness: 100 } }}
        whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
        transition={{ type: "spring", stiffness: 100 }}
        className="z-0 absolute -right-8 bottom-24 size-40 rounded-3xl bg-gray-100 shadow-lg rotate-12 hover:rotate-0">

      </motion.div>
    </Container>
  )
}

export default Home