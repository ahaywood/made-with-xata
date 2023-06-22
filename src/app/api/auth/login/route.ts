// import { redirect } from 'next/navigation';
import { randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

import { authorizeUser } from '@/actions/auth';
import { NextRequest, userAgent } from 'next/server';
import type { FormValues } from '@/app/(auth)/login/components/LoginForm/LoginForm';
import { getXataClient } from '@/xata';

const xata = getXataClient();

interface ConnectionInformation {
  ip: string | undefined;
  city: string | undefined;
  country: string | undefined;
  region: string | undefined;
  latitude: string | undefined;
  longitude: string | undefined;
  device: 'mobile' | 'desktop';
  browser: string | undefined;
}

export async function POST(req: NextRequest) {
  const data = (await req.json()) as FormValues;
  // authorize the user
  // -- checks the database to see if the username and password match, returns the user id
  const { isAuthorized, userId } = await authorizeUser(data);

  if (isAuthorized) {
    // create a session
    // -- creates the session in the database and returns the session token
    const sessionToken = await createSession(
      userId,
      getConnectionInformation(req)
    );

    const { name, avatar, avatarColor } = await getUserDetails(userId);

    // create JWT and set cookies
    refreshTokens(
      sessionToken,
      userId,
      name as string,
      avatar as string,
      avatarColor as string
    );

    // return success
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  }

  // return fail
  return new Response(JSON.stringify({ success: false }), {
    status: 500,
  });
}

const getUserDetails = async (userId: string): Promise<User> => {
  try {
    return (await xata.db.user.read(userId)) as User;
  } catch (e) {
    console.error(e);
    throw new Error('Failed to get user details');
  }
};

/**
 * Get all the connection information from the request
 */
const getConnectionInformation = (req: NextRequest): ConnectionInformation => {
  // get the user agent
  const { browser, device } = userAgent(req);

  // get connection information
  return {
    ip: req.ip,
    city: req?.geo?.city,
    country: req?.geo?.country,
    region: req?.geo?.region,
    latitude: req?.geo?.latitude,
    longitude: req?.geo?.longitude,
    device: device.type === 'mobile' ? 'mobile' : 'desktop',
    browser: browser.name,
  };
};

/**
 * Create the session inside the database
 */
const createSession = async (
  userId: string,
  connectionInformation: ConnectionInformation
): Promise<string> => {
  try {
    const sessionToken = randomBytes(64).toString('hex');

    await xata.db.session.create({
      user: userId,
      sessionToken,
      ...connectionInformation,
    });

    return sessionToken;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create session');
  }
};

/**
 * Set up the tokens and cookies
 */
const refreshTokens = (
  sessionToken: string,
  userId: string,
  userName: string,
  avatar: string,
  avatarColor: string
) => {
  try {
    // Create JWT
    const { accessToken, refreshToken } = createTokens(
      sessionToken,
      userId,
      userName,
      avatar,
      avatarColor
    );

    const now = new Date();
    const refreshTokenExpires = now.setDate(now.getDate() + 30);

    // Set cookies
    cookies().set('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/',
      domain: 'localhost',
      expires: refreshTokenExpires,
    });
    cookies().set('accessToken', accessToken, {
      httpOnly: true,
      path: '/',
      domain: 'localhost',
    });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create tokens and set cookies');
  }
};

/**
 * Create the JWT
 */
const createTokens = (
  sessionToken: string,
  userId: string,
  userName: string,
  avatar: string,
  avatarColor: string
) => {
  const JWTSignature = process.env.JWT_SIGNATURE as string;

  try {
    // create access token - includes session id and user id
    const accessToken = jwt.sign(
      { sessionToken, userId, userName, avatar, avatarColor },
      JWTSignature
    );

    // create refresh tokens - includes session id
    const refreshToken = jwt.sign({ sessionToken }, JWTSignature);

    return { accessToken, refreshToken };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create tokens');
  }
};
