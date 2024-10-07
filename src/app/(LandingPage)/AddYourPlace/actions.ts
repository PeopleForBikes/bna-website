'use server';


import sql from '@Utils/postgres';
import addYourPlaceSchema from './schema';


type Result = {
  success: boolean,
  errors?: {
    server?: [{ message: string }];
    validation?: Record<string, { message: string }>;
  } | null;
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

const requestToAddYourPlace = async (formData: AddYourPlaceFormData): Promise<void | { errors: boolean }> => {
  try {
    await sql`
      INSERT INTO "public"."submission"
        (first_name, last_name, occupation, organization, email, country, city, region, fips_code, consent, status)
      VALUES
        (${formData.firstName}, ${formData.lastName}, ${formData.occupation || null}, ${formData.organization || null}, ${formData.email}, ${formData.country}, ${formData.city}, ${formData.region || null }, ${formData.fipsCode}, ${formData.consent}, 'Pending');
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
      errors: { validation: validationErrors }
    };
  }

  await requestToAddYourPlace(validation.data as AddYourPlaceFormData);

  return { success: true };
}

async function getCountries(): Promise<string[] | []> {
  try {
    const data = await sql`
      SELECT array_agg(name) AS country_names FROM "public"."country";
  `;

    return data[0].country_names;
  } catch (error) {
    console.error('ServerAction:SQLerror\n', error);
    return [];
  }
}


export { getCountries };
export default addYourPlaceAction;
