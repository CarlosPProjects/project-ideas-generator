'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button';


const HeroContainer = () => {
  return (
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
  )
}

export default HeroContainer;