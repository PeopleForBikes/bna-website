import type { Format, JSONSchemaType } from 'ajv';


interface FormSchema {
  title?: string,
  first_name: string,
  last_name: string,
  organization: string,
  email: Format,
  city: string,
  region?: string,
  country: string,
  fips_code: string,
  consent: boolean
};

const formSchema: JSONSchemaType<FormSchema> = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 2,
      maxLength: 254,
      nullable: true,
      errorMessage: {
        type: 'Must be a string',
        maxLength: 'Must be less than 255 characters',
        minLength: 'Must be more than 1 character'
      }
    },
    first_name: {
      type: 'string',
      minLength: 2,
      maxLength: 32,
    },
    last_name: {
      type: 'string',
      minLength: 2,
      maxLength: 32,
    },
    organization: {
      type: 'string',
      minLength: 2,
      maxLength: 254,
    },
    email: {
      type: 'string',
      format: 'email',
      minLength: 6,
      maxLength: 254,
      errorMessage: {
        format: 'Must be a valid email',
        maxLength: 'Must be a valid email',
        minLength: 'Must be a valid email',
        required: 'Must be a valid email'
      }
    },
    city: {
      type: 'string',
      minLength: 2,
      maxLength: 254,
    },
    region: {
      type: 'string',
      minLength: 2,
      maxLength: 254,
      nullable: true,
    },
    country: {
      type: 'string',
      minLength: 2,
      maxLength: 254,
    },
    fips_code: {
      type: 'string',
      minLength: 7,
      maxLength: 7,
      errorMessage: {
        minLength: 'FIPS code must be 7 digits',
        maxLength: 'FIPS code must be 7 digits'
      }
    },
    consent: {
      type: 'boolean'
    }
  },
  required: ['email', 'fips_code'],
  additionalProperties: false
};


export type { FormSchema };
export default formSchema;


// asdfasdf.asdasdff@asdg.com
// aas@ag.com
