import { v4 as uuidv4 } from 'uuid';
import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ serverId: string }> }
) {
  try {
    const { serverId } = await context.params;

    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!serverId) {
      return new NextResponse('Server ID is missing', { status: 400 });
    }

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data: {
        inviteCode: uuidv4(),
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.error('[SERVER_ID]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
      }
