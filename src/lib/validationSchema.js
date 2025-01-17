import { z } from 'zod'

export const signupSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    number: z.string().min(1, 'Number is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Confirm Password is required')
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'Passwords do not match'
      })
    }
  })

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
})

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address')
})

export const profileSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  jobTitle: z.string().min(1, 'Job Title is required'),
  diagnosis: z.string().min(1, 'Diagnosis is required'),
  phoneNumber: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  emergencyContact: z
    .string()
    .regex(/^\d{10}$/, 'Emergency contact number must be 10 digits')
})


export const ownerSchema = z.object({
  name:  z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  company:  z.string(),
})


export const planeSchema = z.object({
  owner: z.string().min(1, 'Owner name is required'),
  tail: z.string().min(1, 'Tail number is required'),
  startingHours: z
    .string()
    .default('0') // Default to "0" as a string
    .transform((val) => Number(val))
    .refine((val) => val >= 0, { message: 'Starting hours must be 0 or greater' }),
  startingLandings: z
    .string()
    .default('0') // Default to "0" as a string
    .transform((val) => Number(val))
    .refine((val) => val >= 0, { message: 'Starting landings must be 0 or greater' }),
  taxableRate: z
    .string()
    .default('0') // Default to "0" as a string
    .transform((val) => Number(val))
    .refine((val) => val >= 0, { message: 'Taxable rate must be 0 or greater' }),
  maintenanceRate: z
    .string()
    .default('0') // Default to "0" as a string
    .transform((val) => Number(val))
    .refine((val) => val >= 0, { message: 'Maintenance rate must be 0 or greater' }),
  charterRate: z
    .string()
    .default('0') // Default to "0" as a string
    .transform((val) => Number(val))
    .refine((val) => val >= 0, { message: 'Charter rate must be 0 or greater' }),
  openingBalance: z
    .string()
    .default('0') // Default to "0" as a string
    .transform((val) => Number(val))
    .refine((val) => val >= 0, { message: 'Opening balance must be 0 or greater' }),
  retainerBalance: z
    .string()
    .default('0') // Default to "0" as a string
    .transform((val) => Number(val))
    .refine((val) => val >= 0, { message: 'Retainer balance must be 0 or greater' }),
});



export const locationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  code: z.string().min(1, "Code is required"),
  codeExt: z.string().min(1, "Extended Code is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  latitude: z
    .string()
    .transform((val) => Number(val))
    .refine((value) => !isNaN(value) && value >= -90 && value <= 90, {
      message: "Latitude must be a number between -90 and 90",
    }),
  longitude: z
    .string()
    .transform((val) => Number(val))
    .refine((value) => !isNaN(value) && value >= -180 && value <= 180, {
      message: "Longitude must be a number between -180 and 180",
    }),
});



export const planeDocTypeSchema = z.object({
  type:  z.string().min(1, 'Document type is required'),
})


export const planeFlightTypeSchema = z.object({
  type:  z.string().min(1, 'Flight type is required'),
})