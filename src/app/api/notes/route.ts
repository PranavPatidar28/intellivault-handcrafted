import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await requireAuth();
  const userId = session.user.id;


  const notes = await prisma.note.findMany({
    where: { userId },
    select: {
      id: true,
      title: true,
      contentText: true,
      createdAt: true,
      updatedAt: true,
      tags: {
        select: {
          tag: {
            select: {
              id: true,
              title: true,
              color: true,
            },
          },
        },
      },
    },
  });


  return NextResponse.json(notes);
}