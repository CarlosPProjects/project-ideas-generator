import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { formSchema } from "@/lib/zod/form-schema"
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { FC } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { State } from "@/actions/generator";

interface Props {
  form: UseFormReturn<z.infer<typeof formSchema>>
  formState: State;
}

const DifficultyCheckbox: FC<Props> = ({ form, formState }) => {
  return (
    <FormField
      control={form.control}
      name="difficulty"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className="font-semibold">Difficulty</FormLabel>
          <FormControl>
            <RadioGroup
              {...field}
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-wrap gap-4"
            >
              <FormItem className="flex items-center space-x-2 space-y-0">
                <FormControl>
                  <RadioGroupItem value="Easy" />
                </FormControl>
                <FormLabel className="font-normal">
                  Easy
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-2 space-y-0">
                <FormControl>
                  <RadioGroupItem value="Medium" />
                </FormControl>
                <FormLabel className="font-normal">
                  Medium
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-2 space-y-0">
                <FormControl>
                  <RadioGroupItem value="Hard" />
                </FormControl>
                <FormLabel className="font-normal">Hard</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          {formState?.status === 'error' && formState.errors?.difficulty && (
            <FormMessage>
              {formState.errors.difficulty.join(', ')}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  )
}

export default DifficultyCheckbox