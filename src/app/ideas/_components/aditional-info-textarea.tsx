import { State } from '@/actions/generator';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/lib/zod/form-schema';
import { type FC } from 'react'
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

interface Props {
  form: UseFormReturn<z.infer<typeof formSchema>>
  formState: State;
}

const AditionalInfoTextarea: FC<Props> = ({ form, formState }) => {
  return (
    <FormField
      control={form.control}
      name="aditionalInfo"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-semibold">Aditional Information</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us more about your project (optional)"
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormDescription>
            This information will help us to generate better ideas for you.
          </FormDescription>
          {formState?.status === 'error' && formState.errors?.aditionalInfo && (
            <FormMessage>
              {formState.errors.aditionalInfo.join(', ')}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  )
}

export default AditionalInfoTextarea;