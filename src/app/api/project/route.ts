// import { redirect } from 'next/navigation';

export async function POST(request: Request) {
  // TODO: Save project name to database

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
  // redirect('/admin');
}
