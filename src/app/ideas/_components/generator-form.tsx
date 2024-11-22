'use client'

import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"

import { formSchema } from '@/lib/zod/form-schema'
import ProjectTypeSelector from './project-type-selector'

const GeneratorForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: '',
    },
  })

  return (
    <Card className='rounded-xl'>
      <Form {...form}>
        <form className="h-full flex flex-col">
          <CardHeader>
            <CardTitle className='text-lg'>
              Generator Form
            </CardTitle>
            <CardDescription>
              Customize your ideas by filling out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex-1 pt-0'>
            <Separator className='mb-5' />
            {/* Project Type Select */}
            <div>
              <h2 className='font-medium'>Type of project</h2>
            </div>
            <ProjectTypeSelector form={form} />
          </CardContent>
          <CardFooter>
            <Button type='submit'>Generate Idea</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

export default GeneratorForm