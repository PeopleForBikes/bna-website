'use server';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';

import normaliseAjvErrors, { NormalizedAjvErrors } from '@Utils/normalizeAjvErrors';
import formSchema from './schema';


const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv, {
  singleError: true,
  keepErrors: false,
});
ajvFormats(ajv, ['email']);



type Result = {
  success: boolean,
  errors: NormalizedAjvErrors
};

const validate = ajv.compile(formSchema);
async function addPlaceAction(prevState: Result, formData: FormData): Promise<Result> {
  const isValid = validate({
    title: formData.get('title'),
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    organization: formData.get('organization'),
    email: formData.get('email'),
    city: formData.get('city'),
    region: formData.get('region'),
    country: formData.get('country'),
    fips_code: formData.get('fips_code'),
    consent: Boolean(formData.get('consent'))
  });

  if(!isValid) {
    return {
      success: false,
      errors: normaliseAjvErrors(validate.errors)
    };
  }

  try {
    const resp = await fetch('https://api.peopleforbikes.xyz/cities/submission', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: formData
    });

    if (!resp.ok) {
      const msg = await resp.text();
      console.error('not ok:', msg);
      return { success: false, errors: [] };
    }

    const sucessMessage = await resp.json();
    console.log({ sucessMessage });

    return { success: true, errors: [] };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      errors: {
        email: "Email taken"
      }
    };
  }
}


export default addPlaceAction;
