import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export function GET () {
  return NextResponse.json('OK')
}

export async function POST (request) {
  const { url, shortUrl } = await request.json()

  try {
    console.log(url, shortUrl)
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
