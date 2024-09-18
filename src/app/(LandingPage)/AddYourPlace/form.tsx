'use client';

import { ErrorBoundary } from 'react-error-boundary';

import TextInput from '@Components/TextInput';
import SubmitButton from '@Components/SubmitButton';
import useForm from '@Hooks/useForm'

import addYourPlaceSchema from './schema';
import addYourPlaceAction from './actions';
import ThankYou from './Thankyou';
import styles from './styles.module.css';


function Form() {
  const {
    handleAction, handleSubmit,
    actionState, isPending,
    validationErrors, errors
  } = useForm({
    schema: addYourPlaceSchema,
    action: addYourPlaceAction,
    initialActionState: { success: false, errors: null, data: null }
  });

  return (
    <>
      {actionState.success
        ? <ThankYou />
        :
        <form
          id="addYourPlaceForm"
          name="addYourPlaceForm"
          className={styles['add-your-place-form']}
          onSubmit={handleSubmit} // client
          action={handleAction}   // server
        >
          <div>
            <TextInput
              value="Jane"
              id="firstName"
              name="firstName"
              label="First name"
              placeholder="First name"
              className={styles['text-input']}
              errorMessage={validationErrors.firstName?.message}
            />

            <TextInput
              value="Doe"
              id="lastName"
              name="lastName"
              label="Last name"
              placeholder="Last name"
              className={styles['text-input']}
              errorMessage={validationErrors.lastName?.message}
            />

            <TextInput
              value="Software Engineer"
              id="occupation"
              name="occupation"
              label="Occupation"
              placeholder="Occupation"
              className={styles['text-input']}
              errorMessage={validationErrors.occupation?.message}
            />

            <TextInput
              value="PeopleForBikes"
              id="organization"
              name="organization"
              label="Organization name"
              placeholder="Organization name"
              className={styles['text-input']}
              errorMessage={validationErrors.organization?.message}
            />

            <TextInput
              value="jane.doe@example.com"
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
              className={styles['text-input']}
              errorMessage={validationErrors.email?.message}
            />

            <TextInput
              value="United States"
              id="country"
              name="country"
              label="Country"
              placeholder="Country"
              className={styles['text-input']}
              errorMessage={validationErrors.country?.message}
            />

            <TextInput
              value="San Francisco"
              id="city"
              name="city"
              label="City"
              placeholder="City"
              className={styles['text-input']}
              errorMessage={validationErrors.city?.message}
            />

            <TextInput
              value="California"
              id="region"
              name="region"
              label="State/Region"
              placeholder="State/Region"
              className={styles['text-input']}
              errorMessage={validationErrors.region?.message}
            />

            <TextInput
              value="3570670"
              id="fipsCode"
              name="fipsCode"
              label="FIPS Code"
              placeholder="FIPS Code"
              className={styles['text-input']}
              errorMessage={validationErrors.fips_code?.message}
            />
          </div>

          <section className={styles['general-consent']}>
            <p>General Consent</p>
            <div>
              <input type="checkbox" name="consent" defaultChecked />
              <label htmlFor="consent">I agree to receive the PeopleForBikes newsletter and related communications from the PeopleForBikes Foundation and the PeopleForBikes Coalition regarding PeopleForBikes’ advocacy and other activities. You can unsubscribe at any time.</label>
            </div>
          </section>

          <SubmitButton
            isPending={isPending}
            isDisabled={isPending || actionState.success}
            formId="addYourPlaceForm"
            className={styles['btn-submit']}
            label={actionState.success ? 'Thank you!' : 'Submit'}
            style={{
              border: Object.keys(validationErrors).length > 0 ? '1px solid var(--text-error)' : '',
              cursor: actionState.success ? 'default' : 'pointer'
            }}
          />
        </form>
      }
    </>
  );
}


export default Form;
