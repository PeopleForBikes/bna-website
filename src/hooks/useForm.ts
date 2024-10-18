'use client';

import type { SyntheticEvent } from 'react';
import type { ZodObject } from 'zod';

import { useActionState, useEffect, useState } from 'react';


interface UseFormHook<FormState, Payload> {
  handleAction: (payload: Payload) => void;
  handleSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
  isPending: boolean;
  actionState: FormState;
  errors: Record<string, { message: string }>;
  setErrors: (errors: Record<string, { message: string }>) => void;
  validationErrors: Record<string, { message: string }>;
  setValidationErrors: (errors: Record<string, { message: string }>) => void;
}

function useForm<State, Payload>({ schema, action, initialActionState }: {
  schema: ZodObject<any>,
  action: (
    formState: Awaited<State>,
    payload: Payload
  ) => Promise<any>,
  initialActionState: Awaited<State>
}): UseFormHook<State, Payload> {
  const [actionState, handleAction, isPending] = useActionState(action, initialActionState);
  const [errors, setErrors] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrors({});            // reset errors
    setValidationErrors({});  // reset validation errors
    const formData = new FormData(event.currentTarget);

    const _zodFormData: Record<string, string|null> = {};
    for (const [name, value] of formData) {
      if (name.startsWith('$ACTION')) continue;
      if (value === '') continue;

      _zodFormData[name] = value as string;
    }

    const _validationErrors: Record<string, { message: string }> = {};
    const validation = schema.safeParse(_zodFormData);

    if (validation.success) {
      handleAction(_zodFormData as Payload);
    } else {
      for (const issue of validation.error.issues) {
        const { path, message } = issue;
        if (path && path[0]) {
          _validationErrors[path[0]] = { message };
        }
      }

      setValidationErrors(_validationErrors);
    }
  }

  useEffect(() => {
    if (actionState && actionState.errors && actionState.errors.validation) {
      setValidationErrors(actionState.errors.validation);
    }
  }, [actionState, setValidationErrors]);

  return {
    handleAction, handleSubmit,
    isPending, actionState,
    errors, setErrors,
    validationErrors, setValidationErrors
  };
}


export default useForm;
