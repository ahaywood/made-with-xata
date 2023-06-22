'use client';

import { Submit } from '@/components/Form/Submit';
import { Upload } from '@/components/Form/Upload';
import { resetPassword } from '@/actions/auth';
import { Controller, useForm } from 'react-hook-form';
import { Toggle } from '@/components/Toggle';

interface UserFormProps {
  state: 'invite' | 'edit';
  user?: User;
  toggleVisibility: () => void;
}

const UserForm = ({
  state = 'invite',
  toggleVisibility,
  user,
}: UserFormProps) => {
  const handlePasswordReset = () => {
    resetPassword(user?.id as string);
    // TODO: Show a success message
    toggleVisibility();
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div>
      <div className="form-heading mb-8">
        {state === 'invite' ? 'Invite a User' : 'Edit User'}
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* user id */}
        {user?.id && (
          <input type="hidden" value={user.id} {...register('id')} />
        )}

        {/* is approved toggle */}
        <div className="field">
          <Controller
            control={control}
            defaultValue={user?.isApproved}
            name="isApproved"
            render={({ field: { onChange, value } }) => (
              <Toggle
                id="isApproved"
                label="Approved"
                onChange={onChange}
                value={value as boolean}
              />
            )}
          />
          <br />

          {/* is verified toggle */}
          <div>
            <Toggle
              id="verifiedEmail"
              label="Verified"
              disabled
              value={user?.verifiedEmail as boolean}
              onChange={() => {}}
            />
            <p className="opacity-50 italic pl-[48px]">
              The user will need to verify their own email.
            </p>
          </div>
        </div>

        <div className="field">
          <label htmlFor="name">User's Full Name</label>
          <input type="text" id="name" {...register('name')} />
        </div>

        <div className="field">
          <label htmlFor="name">User's Email Address</label>
          <input type="text" id="name" />
        </div>

        <div className="field">
          <label htmlFor="name">User's Avatar</label>
          <Upload />
        </div>

        <div className="field flex justify-between">
          {state === 'edit' ? (
            <button
              type="button"
              className="underline hover:no-underline hover:text-uclaGold"
              onClick={handlePasswordReset}
            >
              Reset Users's Password
            </button>
          ) : (
            <div />
          )}
          <Submit label={state === 'edit' ? 'Update User' : 'Invite User'} />
        </div>
      </form>
    </div>
  );
};

export { UserForm };
