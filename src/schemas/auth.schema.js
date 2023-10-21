import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      message: "Username must be a string",
    })
    .min(3)
    .max(20),
  password: z.string({
    message: "Password must be a string",
  }),
});
