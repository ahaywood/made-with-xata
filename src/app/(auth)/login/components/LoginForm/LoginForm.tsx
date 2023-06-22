'use client';

import { authorizeUser } from '@/actions/auth';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Submit } from '@/components/Form/Submit';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // disable the form while it processes
    setIsPending(true);

    /*
    const { isAuthorized, userId } = await authorizeUser(data);

    if (isAuthorized) {
      // TODO: update the state and force a refresh
      console.log('success');
    } else {
      console.log('failed');
    }
    */

    try {
      const res = fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }

    // done processing the form, enable it
    setIsPending(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {/* email */}
      <div className="form-heading">Login</div>
      <fieldset disabled={isPending}>
        <div className="field">
          <label className="label" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
          />
          {errors.email && <ErrorMessage message="This field is required." />}
        </div>

        {/* password */}
        <div className="field">
          <div className="flex justify-between">
            <label htmlFor="password">Your Password</label>
            <Link
              href="/forgot-password"
              className="underline text-sm hover:no-underline"
            >
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            id="password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <ErrorMessage message="This field is required." />
          )}
        </div>
        <div className="field flex justify-between items-center">
          <Link href="/signup" className="text-sm underline hover:no-underline">
            Need an Account?
          </Link>
          <Submit label="Sign In" />
        </div>
      </fieldset>
    </form>
  );
};

export { LoginForm };
