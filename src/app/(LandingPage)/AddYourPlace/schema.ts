import z from 'zod';


const addYourPlaceSchema = z.object({
  firstName: z.string({ required_error: 'Name is required' })
    .min(2, { message: 'required' })
    .max(64, { message: 'max 64 characters' }),
  lastName: z.string({ required_error: 'Name is required'  })
    .min(2, { message: 'required' })
    .max(64, { message: 'max 64 characters' }),
  occupation: z.string()
    .min(2, { message: 'min 2 characters' })
    .max(128, { message: 'max 128 characters' })
    .optional(),
  organization: z.string()
    .min(2, { message: 'min 2 characters' })
    .max(128, { message: 'max 128 characters' })
    .optional(),
  email: z.string()
    .email({ message: 'Must be a valid email' })
    .min(6, { message: 'min 6 characters' })
    .max(254, { message: 'max 254 characters' }),
  country: z.string({ required_error: 'Country is required' }),
  city: z.string()
    .min(2, { message: 'min 2 characters' })
    .max(128, { message: 'max 128 characters' }),
  region: z.string()
    .min(2, { message: 'min 2 characters' })
    .max(128, { message: 'max 128 characters' })
    .optional(),

  // FIPS code is 0 for non-US places
  fipsCode: z.string({ required_error: 'FIPS code is required' })
    .min(5, { message: 'min 5 characters' })
    .max(10, { message: 'max 10 characters' }),
  consent: z.preprocess(
    (value) => {
      const isTrue = (value === 'on' || value === true) ? true : false;
      return isTrue;
    },
    z.boolean({ required_error: 'Consent is required' })
  )
}).required({
  firstName: true,
  lastName: true,
  email: true,
  city: true,
  country: true,
  fipsCode: true,
  consent: true
});

type AddYourPlaceSchema = z.infer<typeof addYourPlaceSchema>;


export type { AddYourPlaceSchema };
export default addYourPlaceSchema;
