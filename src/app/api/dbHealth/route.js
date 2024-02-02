import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET () {
  const data = await prisma.link.findFirst()
  if (!data) {
    return NextResponse.json({ status: false })
  }
  return NextResponse.json({ status: true })
}
