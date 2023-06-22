import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import { getXataClient } from './xata';

// const xata = getXataClient();
// const JWTSignature = process.env.JWT_SIGNATURE;

export async function middleware(request: NextRequest) {
  /*
  const { NEXTAUTH_URL } = process.env;

  const accessToken = request.cookies.get('accessToken');

  // in the admin section, check for the access token
  // if they don't exist, redirect the user to the login page
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!accessToken) {
      return NextResponse.redirect(`${NEXTAUTH_URL as string}/login`);
    }
  }

  // on the login page, check for the access token and make sure its valid
  // if they exist, redirect the user to the admin page
  if (request.nextUrl.pathname === '/login') {
    if (accessToken && (await validateAccessToken(accessToken.value))) {
      return NextResponse.redirect(`${NEXTAUTH_URL as string}/admin`);
    }
  }
}

const validateAccessToken = async (accessToken: string) => {
  try {
    // is it a valid token?
    const decodedAccessToken = jwt.verify(accessToken, JWTSignature as string);

    // does the session exist in the database?
    const curUser = await xata.db.session
      .filter('sessionToken', decodedAccessToken as string)
      .select(['user.id'])
      .getFirst();

    return curUser;
  } catch (e) {
    console.error(e);
    // throw an error
    throw new Error('Failed to validate access token');
  }
  */
}
