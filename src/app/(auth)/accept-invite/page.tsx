import { AcceptInviteForm } from './components/AcceptInviteForm';

export const metadata = {
  title: 'Accept Invite | Made with Xata',
};

export default function Invite() {
  return (
    <AcceptInviteForm
      user={{
        name: 'John Doe',
        email: 'amy@test.com',
      }}
    />
  );
}
