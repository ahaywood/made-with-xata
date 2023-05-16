import { Submit } from '@/components/Form/Submit';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="form">
      <div className="form-heading">Login</div>
      <div className="field">
        <label className="label" htmlFor="email">
          Your Email
        </label>
        <input type="email" name="email" id="email" />
      </div>

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
        <input type="password" name="password" id="password" />
      </div>

      <div className="field flex justify-between items-center">
        <Link href="/signup" className="text-sm underline hover:no-underline">
          Need an Account?
        </Link>
        <Submit label="Sign In" />
      </div>
    </div>
  );
}
