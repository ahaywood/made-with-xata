'use client';

import { Submit } from '@/components/Form/Submit';
import Link from 'next/link';

const ForgotPasswordForm = () => (
  <form className="form">
    <div className="form-heading">Forgot Password?</div>
    <div className="field">
      <label htmlFor="email">Your Email Address</label>
      <input type="email" name="email" id="email" />
    </div>
    <div className="field flex justify-between items-center">
      <Link href="/login" className="font-sm underline hover:no-underline">
        Login
      </Link>
      <Submit label="Reset my Password" />
    </div>
  </form>
);

export { ForgotPasswordForm };
