import { redirect } from 'next/navigation';

export async function POST(request: Request) {
  const data = await request.formData();

  const projectName = data.get('projectName');
  console.log({ projectName });

  // TODO: Save project name to database

  redirect('/admin');
}
