'use server'

import { formSchema } from '@/lib/zod/form-schema';
import { setTimeout } from 'timers/promises';

export type State = {
  status: "success" | "error",
  data: {
    type: string,
  }
  message: string,
}

export const generateIdeas = async (prevState: State, data: FormData): Promise<State> => {
  const type = data.get('type') as string

  const validatedFields = formSchema.safeParse({ type })

  if (!validatedFields.success) {
    return {
      ...prevState,
      status: "error",
      data: {
        ...prevState.data, ...formSchema
      },
      message: "Please select a project type."
    }
  }



  await setTimeout(1000);

  return {
    status: "success",
    data: {
      type,
    },
    message: "Ideas generated successfully!"
  }
}