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
import { State } from '../actions'

interface Props {
  form: UseFormReturn<z.infer<typeof formSchema>>
  formState: State;
}

const ProjectThemeSelector: FC<Props> = ({ form, formState }) => {

  return (
    <FormField
      control={form.control}
      name='theme'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Project theme</FormLabel>
          <Select
            {...field}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a project theme" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Entertaiment">Entertaiment</SelectItem>
              <SelectItem value="Productivity">Productivity</SelectItem>
              <SelectItem value="E-commerce">E-commerce</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {formState?.status === 'error' && formState.errors?.theme && (
            <FormMessage>
              {formState.errors.theme.join(', ')}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  )
}

export default ProjectThemeSelector