'use client';

import { useState } from 'react';
import { deleteUser } from '@/actions/users';
import { UserRow } from './UserRow';
import { UserRowHeader } from './UserRowHeader';

interface UserGridProps {
  isApproved?: boolean;
  xataData: string;
}

const UserGrid = ({ isApproved = true, xataData }: UserGridProps) => {
  const [users, setUsers] = useState<User[]>(JSON.parse(xataData) as User[]);

  const handleDelete = async (userId: string) => {
    const errorMessage = await deleteUser(userId);

    // Display an error message
    if (errorMessage) {
      console.error(errorMessage);
    }

    // remove user from the list
    const updatedUsers = users.filter((user) => user?.id !== userId);

    // update the state
    setUsers(updatedUsers);
  };

  return (
    <div className="max-w-pageWidth mx-auto">
      {/* table header */}
      {!isApproved && (
        <div className="admin-gallery-table bg-bunker py-2">
          <div className="font-bold text-sm uppercase pl-4">Unapproved</div>
        </div>
      )}
      <UserRowHeader />

      {/* table rows */}
      <div className="relative z-stickyTableContents">
        {users.map(
          (user) =>
            user && (
              <UserRow
                key={user.id as string}
                user={user}
                deleteUser={handleDelete}
              />
            )
        )}
      </div>
    </div>
  );
};

export { UserGrid };
