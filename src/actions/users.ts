'use server';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { getXataClient } from '@/xata';

const xata = getXataClient();

const JWTSignature = process.env.JWT_SIGNATURE as string;

async function deleteUser(id: string): Promise<string> {
  try {
    // make sure that the user isn't you
    // -- decode access token
    const accessToken = cookies().get('accessToken');
    const tokenValue = accessToken?.value as string;
    const decodedValue = jwt.verify(tokenValue, JWTSignature);
    const { userId } = decodedValue as { userId: string };

    if (userId === id) {
      return 'You cannot delete yourself';
    }

    // Delete the user
    await xata.db.user.delete(id);

    return '';
  } catch (e) {
    console.error(e);
    throw new Error('Failed to delete user');
  }
}

export { deleteUser };
