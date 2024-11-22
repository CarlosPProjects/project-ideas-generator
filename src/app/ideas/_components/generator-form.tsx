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
import { Sparkles } from 'lucide-react'

const GeneratorForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Card className='rounded-2xl'>
      <Form {...form}>
        <form className="h-full flex flex-col">
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
            <Button className='w-full flex items-center gap-2' size='lg' type='submit'>
              <Sparkles className='size-4' />
              <span>Generate</span>
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

export default GeneratorForm