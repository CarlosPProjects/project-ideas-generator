import { z } from 'zod'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { formSchema } from '@/lib/zod/form-schema'
import { State } from '@/actions/generator'


interface Props {
  form: UseFormReturn<z.infer<typeof formSchema>>
  formState: State;
}

const ProjectTypeSelector: FC<Props> = ({ form, formState }) => {

  return (
    <FormField
      control={form.control}
      name='type'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Project type</FormLabel>
          <Select
            {...field}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a project type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Web">Web</SelectItem>
              <SelectItem value="Mobile">Mobile</SelectItem>
              <SelectItem value="IoT">IoT</SelectItem>
              <SelectItem value="AI">AI</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="Fullstack">Fullstack</SelectItem>
            </SelectContent>
          </Select>
          {formState?.status === 'error' && formState.errors?.type && (
            <FormMessage>
              {formState.errors.type.join(', ')}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  )
}

export default ProjectTypeSelector