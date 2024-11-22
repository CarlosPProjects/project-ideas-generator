import { z } from 'zod'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { FormField, FormItem, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { formSchema } from '@/lib/zod/form-schema'

interface Props {
  form: UseFormReturn<z.infer<typeof formSchema>>
}

const ProjectTypeSelector: FC<Props> = ({ form }) => {

  return (
    <FormField
      control={form.control}
      name='type'
      render={({ field }) => (
        <FormItem>
          <Select {...field}>
            <SelectTrigger>
              <SelectValue placeholder="Project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Web">Web</SelectItem>
              <SelectItem value="Mobile">Mobile</SelectItem>
              <SelectItem value="IoT">IoT</SelectItem>
              <SelectItem value="AI">AI</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="Fullstack">Fullstack</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ProjectTypeSelector