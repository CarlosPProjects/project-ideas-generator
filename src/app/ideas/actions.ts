'use server'

import { setTimeout } from 'timers/promises';

export type State = | {
  status: "success" | "error",
  message: string,
} | null

export const generateIdeas = async (prevState: State, data: FormData): Promise<State> => {
  const type = data.get('type') as string

  if (!type) {
    return {
      status: "error",
      message: "Please select a project type."
    }
  }

  await setTimeout(1000);

  return {
    status: "success",
    message: "Ideas generated successfully!"
  }
}