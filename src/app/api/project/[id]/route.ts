import { redirect, useSearchParams } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import { getXataClient } from '@/xata';

const xata = getXataClient();

export function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/')[3];
  console.log({ id });
  return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
}

// update an existing project
export async function POST(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/')[3];
  const data = await request.formData();
  const action = data.get('action');

  // delete a project
  if (action === 'delete') {
    const record = await xata.db.project.delete(id);
    console.log({ record });
  }

  if (action === 'edit') {
    console.log('edit a project');
  }

  console.log({ id, action });
  redirect('/admin');
}
