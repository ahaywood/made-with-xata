import { Submit } from '@/components/Form/Submit';
import Link from 'next/link';

export default function SignUp() {
  return (
    <form className="form">
      <div className="form-heading">Sign Up</div>
      <div className="field">
        <label htmlFor="fullName">Your Full Name</label>
        <input type="text" name="fullName" />
      </div>

      <div className="field">
        <label htmlFor="yourEmail">Your Email Address</label>
        <input type="email" name="yourEmail" />
      </div>

      <div className="field">
        <label htmlFor="password">Your Password</label>
        <input type="password" name="yourPassword" />
      </div>

      <div className="field">
        <label htmlFor="uploadImage">Upload Image</label>
        <input type="upload" name="uploadImage" />
      </div>

      <div className="field flex justify-between items-center">
        <Link href="login" className="font-sm underline hover:no-underline">
          Login
        </Link>
        <Submit label="Sign Up" />
      </div>
    </form>
  );
}
