'use client'

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useFormStatus } from "react-dom"

const SubmitBtn = () => {

  const { pending } = useFormStatus()

  return (
    <Button
      className='w-full flex items-center gap-2'
      size='lg'
      type='submit'
      disabled={pending}
    >
      <Sparkles className='size-4' />
      <span>Generate</span>
    </Button>
  )
}

export default SubmitBtn