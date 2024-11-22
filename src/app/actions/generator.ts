'use server'
export type State = | {
  status: "success",
  message: string,
} | null

export const generateIdeas = async (prevState: State | null, data: FormData): Promise<State> => {
  
  const type = data.get('type')

  return {
    status: "success",
    message: `You have selected ${type} as your project type.`
  }
  
}