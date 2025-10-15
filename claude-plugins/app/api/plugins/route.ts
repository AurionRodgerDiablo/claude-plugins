import { NextResponse } from 'next/server';
import pluginsData from '@/data/plugins.json';

export async function GET() {
  return NextResponse.json(pluginsData);
}