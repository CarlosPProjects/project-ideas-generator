'use client'

import { motion } from 'framer-motion'
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

const HeroContainer = () => {

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
      className="max-w-3xl text-center space-y-8 z-10">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold md:font-medium">Think, plan, and track <br /><span className="text-muted-foreground">all in one place</span></h1>
      <p>Efficently manage your tasks and boost productivity</p>
      <Link className={buttonVariants({ size: 'lg' })} href='/ideas'>Get free demo</Link>
    </motion.div>
  )
}

export default HeroContainer;