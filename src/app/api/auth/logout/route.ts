import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

import { getXataClient } from '@/xata';
import { NextRequest, NextResponse } from 'next/server';

const xata = getXataClient();
const JWTSignature = process.env.JWT_SIGNATURE as string;

export async function POST(req: NextRequest, res: NextResponse) {
  console.log('logout');
  try {
    // get the current session
    if (cookies().get('refreshToken')) {
      // Decode refresh token
      const refreshToken = cookies().get('refreshToken');
      console.log({ refreshToken });
      const { sessionToken } = jwt.verify(refreshToken.value, JWTSignature);
      console.log({ sessionToken });

      // Find the session in the database
      const sessionRecord = await xata.db.session
        .filter('sessionToken', sessionToken)
        .select(['id'])
        .getFirst();
      console.log({ sessionRecord });

      // delete database record of session
      // await xata.db.session.delete(sessionRecord?.id as string);
    }

    // remove cookies
    cookies().delete('accessToken').delete('refreshToken');

    // return a successful response
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    throw new Error('Failed to logout');
  }
}
