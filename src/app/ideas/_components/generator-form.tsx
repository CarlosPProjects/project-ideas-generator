'use client'

import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"

import { formSchema } from '@/lib/zod/form-schema'
import ProjectTypeSelector from './project-type-selector'
import SubmitBtn from './submit-btn'
import { generateIdeas, State } from '@/app/actions/generator'

import { useActionState, useEffect } from 'react'

const GeneratorForm = () => {

  const [state, formAction] = useActionState<State, FormData>(generateIdeas, null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (!state) {
      return;
    }
  
    if (state.status === "success") {
      alert(state.message);
    }
  }, [state]);

  return (
    <Card className='rounded-2xl'>
      <Form {...form}>
        <form action={formAction} className="h-full flex flex-col">
          <CardHeader>
            <CardTitle className='text-lg'>
              Generator
            </CardTitle>
            <CardDescription>
              Customize your ideas by filling out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex-1 pt-0'>
            <Separator className='mb-5' />
            {/* Project Type Select */}
            <div className='space-y-4'>
              <ProjectTypeSelector form={form} />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitBtn />
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

export default GeneratorForm