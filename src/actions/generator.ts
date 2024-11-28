'use server'

import { formSchema } from '@/lib/zod/form-schema';
import { Ideas } from '@/types/ideas';
import { z } from 'zod';
import { generateIdeas } from './openai';

export type State = | {
  status: "success" | "error",
  message: string,
  ideas?: Ideas,
  errors?: z.inferFlattenedErrors<typeof formSchema>['fieldErrors']
} | null

export interface ResponseData {
  type: string,
  difficulty: string,
  theme: string,
  additionalInfo?: string
}

export const processAndGenerateIdeas = async (prevState: State, data: FormData): Promise<State> => {

  const validationResult = formSchema.safeParse({
    type: data.get('type'),
    difficulty: data.get('difficulty'),
    theme: data.get('theme'),
    additionalInfo: data.get('additionalInfo')
  });

  if (!validationResult.success) {
    return {
      status: "error",
      message: "Error validating form data",
      errors: validationResult.error.flatten().fieldErrors
    };
  }

  const validatedData = validationResult.data as ResponseData;

  const ideas = await generateIdeas(validatedData);

  return {
    status: "success",
    ideas,
    message: "Ideas generated successfully!"
  }
}