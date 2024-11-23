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
import ProjectTypeSelector from './project-type-selector'
import SubmitBtn from './submit-btn'
import { State, generateIdeas } from '../actions'
import DifficultyCheckbox from './difficulty-checkbox'

const GeneratorForm = () => {

  const [formState, formAction] = useActionState<State, FormData>(generateIdeas, null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (!formState) {
      return;
    }

    if (formState.status === "success") {
      toast.success("Ideas generated successfully");
    } else {
      toast.error("Failed to generate ideas");
    }
  }, [formState]);

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
            <ProjectTypeSelector form={form} formState={formState} />
            <DifficultyCheckbox form={form} formState={formState} />
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