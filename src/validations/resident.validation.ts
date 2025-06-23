import { z } from "zod";

export const residentSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.date().refine((dob) => dob < new Date(), {
    message: "Date of birth must be in the past",
  }),
  careLevel: z.enum([
    "INDEPENDENT",
    "ASSISTED",
    "MEMORY_CARE",
    "SKILLED_NURSING",
  ]),
  roomNumber: z.string().regex(/^[A-Z]\d{3}$/, "Room number format: A101"),
});

export const partialResidentSchema = residentSchema.partial();
