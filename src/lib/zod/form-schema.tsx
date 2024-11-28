import { z } from "zod";

export const formSchema = z.object({
  type: z.enum(["Web", "Mobile", "IoT", "AI", "Backend", "Fullstack"], {
    errorMap: () => ({ message: "Select a type of project." })
  }),
  difficulty: z.enum(["Easy", "Medium", "Hard"], {
    errorMap: () => ({ message: "Select a project difficulty." })
  }),
  theme: z.enum(["Education", "Entertaiment", "Productivity", "E-commerce", "Health", "Other"], {
    errorMap: () => ({ message: "Select a project theme." })
  }),
  additionalInfo: z.string({
    errorMap: () => ({ message: "Insert at least 10 caracters." })
  }).max(200, {
    message: "The maximum number of caracters is 200."
  }).optional()
})