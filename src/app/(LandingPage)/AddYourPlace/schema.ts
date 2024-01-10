import { z } from 'zod';


const formSchema = z.object({
  title: z.string()
    .min(2, {
      message: 'Must be more than 1 character' })
    .max(254, {
      message: 'Must be less than 255 characters'
    })
    .optional(),
  first_name: z.string()
    .min(2, {
      message: 'Must be more than 1 character' })
    .max(254, {
      message: 'Must be less than 255 characters'
    }),
  last_name: z.string()
    .min(2, {
      message: 'Must be more than 1 character' })
    .max(254, {
      message: 'Must be less than 255 characters'
    }),
  organization: z.string()
    .min(2, {
      message: 'Must be more than 1 character' })
    .max(254, {
      message: 'Must be less than 255 characters'
    })
    .optional(),
  email: z.string()
    .email({
      message: 'Invalid email'
    })
    .min(6, {
      message: 'Email must be at least 6 characters long'
    })
    .max(254, {
      message: 'Email must be less than 255 characters long'
    }),
  city: z.string()
    .min(2, {
      message: 'Must be more than 1 character' })
    .max(254, {
      message: 'Must be less than 255 characters'
    }),
  region: z.string()
    .min(2, {
      message: 'Must be more than 1 character' })
    .max(254, {
      message: 'Must be less than 255 characters'
    })
    .optional(),
  country: z.string()
    .min(2, {
      message: 'Must be more than 1 character' })
    .max(254, {
      message: 'Must be less than 255 characters'
    }),
  fips_code: z.string()
    .length(7, {
      message: '7 digit FIPS Code is required'
    }),
  consent: z.coerce.boolean()
});

type FormSchema = z.infer<typeof formSchema>;


export type { FormSchema };
export default formSchema;
