'use server';

import { getXataClient } from '../../xata';

const xata = getXataClient();

export async function removeProject(projectId: string) {
  await xata.db.project.delete(projectId);
}
