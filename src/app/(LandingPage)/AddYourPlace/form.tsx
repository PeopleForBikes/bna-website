'use client';

import { Fragment, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import addPlaceAction from './actions';
import formSchema, { FormSchema } from './schema';

import SubmitButton from '@Components/SubmitButton';
import ThankYou from './Thankyou';
import styles from './styles.module.css';


function Form() {
  const { formState: { errors }, register, reset, setError } = useForm<FormSchema>({
    resetOptions: {
      keepDirtyValues: true, // user-interacted input will be retained
      keepErrors: false, // input errors will be retained with value update
    },
    resolver: zodResolver(formSchema)
  });

  const initialState = { success: false, errors: {} };
  const [serverReply, formAction] = useFormState<State, FormData>(addPlaceAction, initialState);

  async function clientAction(formData: FormData) {
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

    console.log(isValid);
    if (!isValid.success) {
      reset();

      isValid.error.issues.forEach(issue => {
        console.log('issue', issue)
        console.log(issue.path[0]);
        setError(issue.path[0], {
          message: issue.message,
        });
      });

      return;
    }

    return formAction(formData);
  };

  useEffect(() => {
    console.log('serverReply', serverReply.errors)
    if (Object.keys(serverReply.errors).length > 0) {
      reset();

      Object.keys(serverReply.errors).forEach(key => {
        console.log('key', key)
        setError(key, {
          message: serverReply.errors[key].pop().message,
        });
      });
    }
  }, [serverReply.errors]);

  return (
    <Fragment>
      {serverReply.success
        ? <ThankYou />
        :
        <form className={styles['add-place-form']} action={clientAction}>
          <div>
            <div className={styles['text-input']}>
              <label htmlFor="title">Title</label>
              <input id="title"
                type="text"
                placeholder="Title"
                {...register('title')}
                className={errors.title ? styles['input-error'] : '' }
              />
              {errors.title && (
                <p className={styles['error-msg']}>{`${errors.title.message}`}</p>
              )}
            </div>

            <div className={styles['text-input']}>
              <label htmlFor="first_name">First name</label>
              <input id="first_name"
                type="text"
                placeholder="First name"
                {...register('first_name')}
                className={errors.first_name ? styles['input-error'] : '' }
              />
              {errors.first_name && (
                <p className={styles['error-msg']}>{`${errors.first_name.message}`}</p>
              )}
            </div>

            <div className={styles['text-input']}>
              <label htmlFor="last_name">Last name</label>
              <input id="last_name"
                type="text"
                placeholder="Last name"
                {...register('last_name')}
                className={errors.last_name ? styles['input-error'] : '' }
              />
              {errors.last_name && (
                <p className={styles['error-msg']}>{`${errors.last_name.message}`}</p>
              )}
            </div>

            <div className={styles['text-input']}>
              <label htmlFor="organization">Organization name</label>
              <input id="organization"
                type="text"
                placeholder="Organization name"
                {...register('organization')}
                className={errors.organization ? styles['input-error'] : '' }
              />
              {errors.organization && (
                <p className={styles['error-msg']}>{`${errors.organization.message}`}</p>
              )}
            </div>

            <div className={styles['text-input']}>
              <label htmlFor="email">Email</label>
              <input id="email"
                type="text"
                placeholder="Email"
                {...register('email')}
                className={errors.email ? styles['input-error'] : '' }
              />
              {errors.email && (
                <p className={styles['error-msg']}>{`${errors.email.message}`}</p>
              )}
            </div>

            <div className={styles['text-input']}>
              <label htmlFor="city">City</label>
              <input id="city"
                type="text"
                placeholder="City"
                {...register('city')}
                className={errors.city ? styles['input-error'] : '' }
              />
              {errors.city && (
                <p className={styles['error-msg']}>{`${errors.city.message}`}</p>
              )}
            </div>

            <div className={styles['text-input']}>
              <label htmlFor="region">State/Region</label>
              <input id="region"
                type="text"
                placeholder="State/Region"
                {...register('region')}
                className={errors.region ? styles['input-error'] : '' }
              />
              {errors.region && (
                <p className={styles['error-msg']}>{`${errors.region.message}`}</p>
              )}
            </div>

            <div className={styles['text-input']}>
              <label htmlFor="country">Country</label>
              <input id="country"
                type="text"
                placeholder="Country"
                {...register('country')}
                className={errors.country ? styles['input-error'] : '' }
              />
              {errors.country && (
                <p className={styles['error-msg']}>{`${errors.country.message}`}</p>
              )}
            </div>

            <div className={styles['text-input']}>
              <label htmlFor="fips_code">FIPS Code</label>
              <input id="fips_code"
                type="text"
                placeholder="FIPS Code" {...register('fips_code')}
                className={`${styles['form-input-last']} ${errors.fips_code ? styles['input-error'] : ''}` }
              />
              {errors.fips_code && (
                <p className={styles['error-msg']}>{`${errors.fips_code.message}`}</p>
              )}
            </div>
          </div>

            <section className={styles['general-consent']}>
              <p>General Consent</p>
              <div>
                <input type="checkbox" name="consent" defaultChecked />
                <label htmlFor="consent">I agree to receive the PeopleForBikes newsletter and related communications from the PeopleForBikes Foundation and the PeopleForBikes Coalition regarding PeopleForBikes’ advocacy and other activities. You can unsubscribe at any time.</label>
              </div>
            </section>

            <SubmitButton className={styles['btn-submit']} />
          </form>
      }
    </Fragment>
  );
}


export default Form;
