'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { FC } from 'react'

interface Props {
  className?: string
  initialPosition: string | number
}

const FloatingBox: FC<Props> = ({ className, initialPosition }) => {
  return (
    <motion.div
      initial={{ x: initialPosition, rotate: 15 }}
      animate={{ x: 0, transition: { duration: 0.3, delay: 0.8, type: "spring", stiffness: 100 } }}
      whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
      transition={{ type: "spring", stiffness: 100 }}
      className={cn("z-0 absolute size-40 rounded-3xl shadow-lg dark:bg-opacity-50", className)} />
  )
}

export default FloatingBox