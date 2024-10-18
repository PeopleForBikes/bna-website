type AddYourPlaceFormData = {
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
};


export type { AddYourPlaceFormData };
