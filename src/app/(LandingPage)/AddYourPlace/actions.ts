'use server';

import type { ZodIssue } from 'zod';
import formSchema, { FormSchema } from './schema';


type Errors = {
  [key: string]: unknown
}
type Result = {
  success: boolean,
  errors: Errors
};

async function addPlaceAction(prevState: FormSchema, formData: FormData): Promise<Result> {
  const errors: Errors = {};
  const isValid = formSchema.safeParse({
    title: formData.get('title'),
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    organization: formData.get('organization'),
    email: formData.get('email'),
    city: formData.get('city'),
    region: formData.get('region'),
    country: formData.get('country'),
    fips_code: formData.get('fips_code'),
    consent: formData.get('consent')
  });
  console.log('isValid', isValid)

  if (!isValid.success) {
    return {
      success: false,
      errors: isValid.error.flatten((issue: ZodIssue) => ({
        message: issue.message
      })).fieldErrors
    };
  }

  try {
    const response = await fetch('https://api.peopleforbikes.xyz/cities/submissions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(isValid.data)
    });

    console.log(response.headers)
    console.log(response)
    // console.log('one', await response);
    // console.log('two', await response.text());
    const result = await response.json();
    console.log("Success:", result);

    return { success: true, errors: {} };
  } catch (error ) {
    console.log('server error', error);
    return {
      success: false,
      errors: { fetch: error }
    };
  }

//   revalidatePath('/');
//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
}


export default addPlaceAction;
