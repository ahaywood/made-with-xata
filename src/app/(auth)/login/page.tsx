import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { LoginForm } from './components/LoginForm';

export const metadata = {
  title: 'Login | Made with Xata',
};

export default function Login() {
  // check to see if a access token exists, if so, redirect to the admin
  const accessToken = cookies().get('accessToken');

  if (accessToken) {
    redirect('/admin');
  }

  return <LoginForm />;
}
