import { z } from "zod";

export const formSchema = z.object({
  type: z.enum(["Web", "Mobile", "IoT", "AI", "Backend", "Fullstack"], {
    errorMap: () => ({ message: "Por favor selecciona un tipo de proyecto válido." })
  }),
  difficulty: z.enum(["Easy", "Medium", "Hard"], {
    errorMap: () => ({ message: "Por favor selecciona una dificultad válida." })
  }),
  tech: z.string({
    errorMap: () => ({ message: "Por favor ingresa una tecnología válida." })
  }).min(1).max(12)
})