'use client';

import { Submit } from '@/components/Form/Submit';
import { Upload } from '@/components/Form/Upload';

const AccountForm = () => (
  <div>
    <div className="form-heading mb-8">Update your Account</div>

    <form className="form">
      <div className="field">
        <label htmlFor="name">Your Full Name</label>
        <input type="text" id="name" />
      </div>

      <div className="field">
        <label htmlFor="email">Your Email Address</label>
        <input type="email" id="email" />
      </div>

      <div className="field">
        <label htmlFor="avatar">Upload Avatar</label>
        <Upload />
      </div>

      <div className="field">
        <label htmlFor="password">Your Password</label>
        <input type="password" id="password" />
      </div>

      <div className="field">
        <label htmlFor="password">Confirm Your Password</label>
        <input type="password" id="confirmPassword" />
      </div>

      <div className="field text-right">
        <Submit label="Update Account" />
      </div>
    </form>
  </div>
);

export { AccountForm };
