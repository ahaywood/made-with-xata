import { getXataClient } from '@/xata';

export async function POST(req: Request) {
  const data = (await req.json()) as Project[];

  // loop over array and update the order for each
  const xata = getXataClient();
  data.map(async (item, index) => {
    await xata.db.project.update(item.id as string, {
      order: index,
    });
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
