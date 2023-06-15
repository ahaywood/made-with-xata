'use server';

import { getXataClient } from '../../../xata';

const xata = getXataClient();

export async function action(data: User) {
  console.log(data);

  const record = await xata.db.user.create({
    name: data.name,
    email: data.email,
    avatar: data.avatar,
    // avatarColor: 'rec_xyz',
    password: data.password,
  });
}
