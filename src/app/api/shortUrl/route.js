import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export function GET () {
  return NextResponse.json('OK')
}

export async function POST (request) {
  const { url } = await request.json()
  const shortUrl = Math.random().toString(36).substring(2, 5)
  try {
    console.log(url, shortUrl)
    const data = await prisma.link.create({
      data: {
        url,
        shortUrl
      }
    })
    // const data = { url, shortUrl }
    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
  }
}
