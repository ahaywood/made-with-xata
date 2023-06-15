import { getXataClient } from '@/xata';

const xata = getXataClient();

interface DataInterface {
  action: string;
}

interface ResponseInterface {
  id: string;
}

// update an existing project
export async function POST(req: Request, res: Response) {
  const data = (await req.json()) as DataInterface;

  const { id } = res.params as ResponseInterface;
  const { action } = data;

  // delete a project
  if (action === 'delete') {
    const record = await xata.db.project.delete(id);
    return new Response(JSON.stringify({ success: true, record }), {
      status: 200,
    });
  }

  return new Response(JSON.stringify({ success: true, data, req, res }), {
    status: 200,
  });
  /*

  if (action === 'edit') {
    console.log('edit a project');
    return NextResponse.json({ success: true, id, action });
  }

  // console.log({ id, action });
  // redirect('/admin');
  return NextResponse.json({ success: true, id, action });
  */
}
