'use server';


import sql from '@Utils/postgres';
import addYourPlaceSchema from './schema';


type Result = {
  success: boolean,
  errors?: null | Record<string, { message: string }>;
  data?: unknown;
};
interface AddYourPlaceFormData {
  firstName: string;
  lastName: string;
  occupation: string | null;
  organization: string | null;
  email: string;
  country: string;
  city: string;
  region: string | null;
  fipsCode: string;
  consent: boolean;
}

const requestToAddYourPlace = async (formData: AddYourPlaceFormData): Promise<Row | any> => {
  try {
    await sql`
      INSERT INTO "public"."submission"
        (first_name, last_name, occupation, organization, email, country, city, region, fips_code, consent, status)
      VALUES
        (${formData.firstName}, ${formData.lastName}, ${formData.occupation}, ${formData.organization}, ${formData.email}, ${formData.country}, ${formData.city}, ${formData.region}, ${formData.fipsCode}, ${formData.consent}, 'Pending');
    `;
  } catch (error) {
    console.error('ServerAction:SQLerror\n', error);
    return { errors: true };
  }
}


async function addYourPlaceAction(prevState: Result, formData: AddYourPlaceFormData): Promise<Result> {
  console.group('ServerAction -- addYourPlace');
  console.info({ formData });

  const validationErrors: Record<string, { message: string }> = {};
  const validation = addYourPlaceSchema.safeParse(formData);
  console.log({ validation });

  if(!validation.success) {
    for (const issue of validation.error.issues) {
      const { path, message } = issue;
      if (path && path[0]) {
        validationErrors[path[0]] = { message };
      }
    }

    console.warn({ validationErrors });
    return {
      success: false,
      errors: validationErrors
    };
  }

  await requestToAddYourPlace(validation.data as AddYourPlaceFormData);

  return { success: true, data: {} };
}


export default addYourPlaceAction;
