import { Submit } from '@/components/Form/Submit';
import Link from 'next/link';

export const metadata = {
  title: 'Reset Password | Made with Xata',
};

export default function ResetPassword() {
  return (
    <form className="form">
      <div className="form-heading">Reset Password</div>
      <div className="field">
        <label htmlFor="newPassword">New Password</label>
        <input type="password" name="newPassword" />
      </div>
      <div className="field">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" />
      </div>
      <div className="field flex items-center justify-between">
        <Link href="/login" className="font-sm underline hover:no-underline">
          Login
        </Link>
        <Submit label="Reset" />
      </div>
    </form>
  );
}
