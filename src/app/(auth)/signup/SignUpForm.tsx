'use client';

import { Submit } from '@/components/Form/Submit';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { action } from './action';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = handleSubmit((data) => {
    action(data);
  });

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-heading">Sign Up</div>
      <div className="field">
        <label htmlFor="name">Your Full Name</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>

      <div className="field">
        <label htmlFor="email">Your Email Address</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>

      <div className="field">
        <label htmlFor="password">Your Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>

      <div className="field">
        <label htmlFor="avatar">Upload Image</label>
        {/* <input type="upload" name="avatar" /> */}
        {errors.avatar && <span>This field is required</span>}
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
