import { z } from "zod";

export const formSchema = z.object({
  type: z.enum(["Web", "Mobile", "IoT", "AI", "Backend", "Fullstack"]).or(z.literal("")),
})