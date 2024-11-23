import { Button } from "@/components/ui/button"
import { Loader2Icon, Sparkles } from "lucide-react"
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
      {pending ? <Loader2Icon className='size-4 animate-spin' /> : <Sparkles className='size-4' />}
      <span>Generate</span>
    </Button>
  )
}

export default SubmitBtn