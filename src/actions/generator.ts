'use server'

import { formSchema } from '@/lib/zod/form-schema';
import { setTimeout } from 'timers/promises';
import { z } from 'zod';

export type State = | {
  status: "success" | "error",
  message: string,
  errors?: z.inferFlattenedErrors<typeof formSchema>['fieldErrors']
} | null

export const generateIdeas = async (prevState: State, data: FormData): Promise<State> => {;

  const validationResult = formSchema.safeParse({
    type: data.get('type'),
    difficulty: data.get('difficulty'),
    theme: data.get('theme')
  });

  console.log(validationResult);

  if (!validationResult.success) {
    return {
      status: "error",
      message: "Error validating form data",
      errors: validationResult.error.flatten().fieldErrors
    };
  }

  await setTimeout(1000);

  return {
    status: "success",
    message: "Ideas generated successfully!"
  }
}