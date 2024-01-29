import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET () {
  const data = await prisma.link.findMany()
  return NextResponse.json(data)
}

export async function POST (request) {
  const { url, shortUrl } = await request.json()

  try {
    const data = await prisma.link.create({
      data: {
        url,
        shortUrl
      }
    })
    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
  }
}
