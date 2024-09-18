'use client';

import { useEffect, useState } from 'react';

import TextInput from '@Components/TextInput';
import SubmitButton from '@Components/SubmitButton';
import useForm from '@Hooks/useForm'

import addYourPlaceSchema from './schema';
import addYourPlaceAction, { getCountries } from './actions';
import ThankYou from './Thankyou';
import styles from './styles.module.css';


function Form() {
  const [countries, setCountries] = useState<string[]>([]);
  const {
    handleAction, handleSubmit,
    actionState, isPending,
    validationErrors, errors
  } = useForm({
    schema: addYourPlaceSchema,
    action: addYourPlaceAction,
    initialActionState: { success: false, errors: null, data: null }
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    fetchData()
  }, []);

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
              id="firstName"
              name="firstName"
              label="First name *"
              className={styles['text-input']}
              errorMessage={validationErrors.firstName?.message}
            />

            <TextInput
              id="lastName"
              name="lastName"
              label="Last name *"
              className={styles['text-input']}
              errorMessage={validationErrors.lastName?.message}
            />

            <TextInput
              id="occupation"
              name="occupation"
              label="Occupation"
              className={styles['text-input']}
              errorMessage={validationErrors.occupation?.message}
            />

            <TextInput
              id="organization"
              name="organization"
              label="Organization name"
              className={styles['text-input']}
              errorMessage={validationErrors.organization?.message}
            />

            <TextInput
              id="email"
              name="email"
              label="Email *"
              className={styles['text-input']}
              errorMessage={validationErrors.email?.message}
            />

            <div className={styles['dropdown-selection']}>
              <header className={styles['header']}>
                <label htmlFor="country">Select Country: *</label>
                <p className={styles['error-message']}>
                  {validationErrors.country?.message}
                </p>
              </header>
              <select
                id="country"
                name="country"
                className={validationErrors.country ? styles['dropdown-error'] : ''}
              >
                <option value="">Choose a country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <TextInput
              id="city"
              name="city"
              label="City *"
              className={styles['text-input']}
              errorMessage={validationErrors.city?.message}
            />

            <TextInput
              id="region"
              name="region"
              label="State/Region"
              className={styles['text-input']}
              errorMessage={validationErrors.region?.message}
            />

            <TextInput
              id="fipsCode"
              name="fipsCode"
              label="FIPS Code *"
              className={styles['text-input']}
              errorMessage={validationErrors.fipsCode?.message}
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
