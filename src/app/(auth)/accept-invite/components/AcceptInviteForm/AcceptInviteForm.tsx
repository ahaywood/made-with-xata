'use client';

import { ErrorMessage } from '@/components/ErrorMessage';
import { Submit } from '@/components/Form/Submit';
import { Upload } from '@/components/Form/Upload';
import { useForm } from 'react-hook-form';

interface AcceptInviteFormProps {
  user: User;
}

const AcceptInviteForm = ({ user }: AcceptInviteFormProps) => {
  const onSubmit = (data: User & { confirmPassword?: string }) => {
    console.log(data);

    // TODO: Update data on the server
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User & { confirmPassword?: string }>();

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form-heading">
          Hey {user?.name ? user.name : 'there'}!
        </div>
        <div className="form-subheading text-2xl">
          You've been invited to help manage the projects within Made with Xata.
        </div>
      </div>
      <div className="form-subheading">
        <p>You'll need to set a password:</p>
      </div>

      {/* password */}
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register('password', {
            required: 'This field is required.',
            minLength: {
              value: 8,
              message: 'min length is 8',
            },
            validate: (value: string | undefined) => {
              if (watch('confirmPassword') !== value) {
                return 'Your password and confirm password do not match.';
              }
            },
          })}
        />
        {errors.password && (
          <ErrorMessage message={errors.password.message as string} />
        )}
      </div>

      {/* confirm password */}
      <div className="field">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', { required: true })}
        />
        {errors.confirmPassword && (
          <ErrorMessage message="This field is required." />
        )}
      </div>

      <div className="form-subheading">Do you want to upload an avatar?</div>
      {/* avatar */}
      <div className="field">
        <label htmlFor="confirmPassword">Upload Avatar</label>
        <Upload />
      </div>

      <div className="form-subheading">Does this information look correct?</div>

      {/* name */}
      <div className="field">
        <label htmlFor="name">Your Full Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
          defaultValue={user?.name && user.name}
        />
        {errors.name && <ErrorMessage message="This field is required." />}
      </div>

      {/* email */}
      <div className="field">
        <label htmlFor="email">Your Email Address</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'This field is required.',
            // validate: (value: string) => {
            //   const exp = /\S+@\S+\.\S+/;
            //   if (!exp.test(value))
            //     return 'You must use a valid email address.';
            // },
          })}
          defaultValue={user?.email && user.email}
        />
        {errors.email && (
          <ErrorMessage message={errors.email.message as string} />
        )}
      </div>

      <div className="field flex justify-end items-center">
        <Submit label="Accept Invitation" />
      </div>
    </form>
  );
};

export { AcceptInviteForm };
