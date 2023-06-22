export const metadata = {
  title: 'Logout | Made with Xata',
};

export default function Logout() {
  try {
    // fetch the logout endpoint
    fetch(`${process.env.NEXTAUTH_URL as string}/api/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // redirect the user
    // redirect('/login');
  } catch (e) {
    console.error(e);
    throw new Error('Failed to logout');
  }

  return <p>Successfully Logged Out</p>;
}
