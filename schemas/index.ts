
import * as z from "zod";

export const LoginSchema = z.object({
  mobile: z.coerce.number().refine((value) => String(value).length === 10, {
    message: "Mobile number must be exactly 10 digits.",
  }),
  otp: z.string().min(6, {
    message: "otp is required",
  }),
});
