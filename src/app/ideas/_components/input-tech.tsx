import { formSchema } from '@/lib/zod/form-schema';
import { type FC } from 'react'
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { State } from '../actions';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface Props {
  form: UseFormReturn<z.infer<typeof formSchema>>
  formState: State
}

const InputTech: FC<Props> = ({ form, formState }) => {
  return (
    <FormField
      control={form.control}
      name="tech"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Technologies</FormLabel>
          <FormControl>
            <Input
              placeholder="Insert tech"
              {...field}
            />
          </FormControl>
          {formState?.status === 'error' && formState.errors?.tech && (
            <FormMessage>
              {formState.errors.tech.join(', ')}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  )
}

export default InputTech;