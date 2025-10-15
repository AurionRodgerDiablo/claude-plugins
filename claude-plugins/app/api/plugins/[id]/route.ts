import { NextResponse } from 'next/server';
import { Plugin } from '@/types/plugin';
import pluginsData from '@/data/plugins.json';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const plugin: Plugin | undefined = pluginsData.find((plugin: Plugin) => plugin.id === id);

  if (!plugin) {
    return NextResponse.json({ message: 'Plugin not found' }, { status: 404 });
  }

  return NextResponse.json(plugin);
}