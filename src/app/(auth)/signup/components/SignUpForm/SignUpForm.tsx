'use client';

import { Submit } from '@/components/Form/Submit';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { registerUser } from '@/actions/auth';
import { ErrorMessage } from '@/components/ErrorMessage';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User & { confirmPassword?: string }>();

  const router = useRouter();

  const onSubmit: SubmitHandler<User & { confirmPassword?: string }> = async (
    data
  ) => {
    const isRegistered = await registerUser(data);
    if (isRegistered) {
      router.push('/verify-email');
    } else {
      console.log('there was a problem');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-heading">Sign Up</div>
      <div className="field">
        <label htmlFor="name">Your Full Name</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <ErrorMessage message="This field is required." />}
      </div>

      {/* TODO: Make sure the user entered a valid email address */}
      <div className="field">
        <label htmlFor="email">Your Email Address</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <ErrorMessage message="This field is required." />}
      </div>

      {/* TODO: Add validation = min length of 8, matches confirm password */}
      <div className="field">
        <label htmlFor="password">Your Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <ErrorMessage message="This field is required." />}
      </div>

      <div className="field">
        <label htmlFor="password">Confirm Your Password</label>
        <input
          type="password"
          {...register('confirmPassword', { required: true })}
        />
        {errors.confirmPassword && (
          <ErrorMessage message="This field is required." />
        )}
      </div>

      <div className="field flex justify-between items-center">
        <Link href="login" className="font-sm underline hover:no-underline">
          Login
        </Link>
        <Submit label="Sign Up" />
      </div>
    </form>
  );
};

export { SignUpForm };
