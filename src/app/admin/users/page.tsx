import { UserGrid } from '@/components/UserGrid';
import { getXataClient } from '@/xata';

const xata = getXataClient();

export const metadata = {
  title: 'Manage Users | Made with Xata',
};

export default async function Users() {
  const users = await xata.db.user
    .select([
      'id',
      'name',
      'email',
      'avatar',
      'avatarColor',
      'isApproved',
      'verifiedEmail',
    ])
    .getAll();

  const approvedUsers = users.filter((user) => user.isApproved);
  const unapprovedUsers = users.filter((user) => !user.isApproved);

  return (
    <>
      <div className="max-w-pageWidth mx-auto mb-4">
        <h1>Users</h1>
      </div>

      {approvedUsers.length > 0 && (
        <div className="mb-36">
          <UserGrid xataData={JSON.stringify(approvedUsers)} />
        </div>
      )}

      {unapprovedUsers.length > 0 && (
        <div>
          <UserGrid
            isApproved={false}
            xataData={JSON.stringify(unapprovedUsers)}
          />
        </div>
      )}
    </>
  );
}
