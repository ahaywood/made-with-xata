'use server';

import bcrypt from 'bcryptjs';
import postmark from 'postmark';

import { randomAvatarColor } from '@/utils/Colors';
import { getXataClient } from '@/xata';

const { POSTMARK_API, POSTMARK_SENDER } = process.env;

const xata = getXataClient();
const { compare, genSalt, hash } = bcrypt;

async function registerUser(data: User) {
  try {
    // generate salt
    const salt = await genSalt(10);

    // hash with salt
    const hashedPassword = await hash(data.password as string, salt);

    // choose a random color for the avatar
    const avatarColor = randomAvatarColor();

    // create a new user
    const record = await xata.db.user.create({
      name: data.name,
      email: data.email,
      avatar: data.avatar,
      password: hashedPassword,
      avatarColor,
    });

    if (record) return true;
    return false;
    // send a verification email
  } catch (error) {
    console.error(error);
  }
}

async function createSession() { }

async function acceptInvite(user: User) {
  try {
    // update user record
    // verified email should be true
  } catch (e) {
    console.error(e);
  }
}

async function authorizeUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ isAuthorized: boolean; userId: string }> {
  try {
    // look up user and get their password
    const userRecord = await xata.db.user
      .filter('email', email)
      .select(['id', 'password'])
      .getFirst();

    // compare the password with the one in the DB
    const isPasswordCorrect = await compare(
      password,
      userRecord?.password as string
    );

    // Return a boolean of true if the password is correct
    return { isAuthorized: isPasswordCorrect, userId: userRecord?.id || '' };
  } catch (e) {
    console.error(e);
    return { isAuthorized: false, userId: '' };
  }
}

/**
 * remove password form the database
 * this is triggered from the admin panel
 */
async function resetPassword(userId: string) {
  try {
    // Remove the password from the database
    if (userId) {
      await xata.db.user.update(userId, {
        password: null,
      });

      // TODO: FINISH  SETTING UP POSTMARK
      // send an email to the user to let them know their password has been reset
      const client = new postmark.ServerClient(POSTMARK_API as string);
      client.sendEmail({
        From: POSTMARK_SENDER as string,
        To: 'receiver@example.com',
        Subject: '🦋 Made with Xata :: Your password has bene reset',
        TextBody:
          'We just reset your password. Please login to your account and set a new password.',
      });
    } else {
      throw new Error('No userId provided');
    }
  } catch (e) {
    console.error(e);
    throw new Error('Could not reset the password');
  }
}

export { acceptInvite, authorizeUser, registerUser, resetPassword };
