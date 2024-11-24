'use client'

import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

import { useActionState, useEffect } from 'react'
import { useForm } from "react-hook-form"

import { Form } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

import { formSchema } from '@/lib/zod/form-schema'
import SubmitBtn from './submit-btn'
import ProjectTypeSelector from './project-type-selector'
import DifficultyCheckbox from './difficulty-checkbox'
import ProjectThemeSelector from './project-theme-selector'
import { processAndGenerateIdeas, State } from '@/actions/generator'
import { useIdeas } from '@/contexts/IdeasContext'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import AditionalInfoTextarea from './aditional-info-textarea'

const GeneratorForm = () => {

  const router = useRouter()

  const [formState, formAction] = useActionState<State, FormData>(processAndGenerateIdeas, null);

  const ideasContext = useIdeas();
  if (!ideasContext) {
    throw new Error("useIdeas must be used within an IdeasProvider");
  }

  const { setIdeas } = ideasContext;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      difficulty: "Easy",
    }
  })

  useEffect(() => {
    if (!formState) {
      return;
    }

    if (formState.status === "success" && formState.ideas) {
      toast.success("Ideas generated successfully");
      setIdeas(formState.ideas);
    }
  }, [setIdeas, formState]);

  return (
    <Card className='h-fit rounded-2xl'>
      <Form {...form}>
        <form action={formAction} className="flex flex-col">
          <CardHeader>
            <CardTitle className='flex text-lg'>
              <div onClick={() => router.push('/')} className='flex items-center gap-2 cursor-pointer'>
                <ArrowLeft className='size-4' strokeWidth={3} />
                <span>
                  ChronoProject
                </span>
              </div>
            </CardTitle>
            <CardDescription>
              Customize your ideas by filling out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex-1 pt-0 space-y-5'>
            <Separator />
            <ProjectTypeSelector form={form} formState={formState} />
            <DifficultyCheckbox form={form} formState={formState} />
            <ProjectThemeSelector form={form} formState={formState} />
            <AditionalInfoTextarea form={form} formState={formState} />
          </CardContent>
          <Separator className='mb-5' />
          <CardFooter>
            <SubmitBtn />
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

export default GeneratorForm