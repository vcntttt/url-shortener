import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

export default async function ShortIdPage ({ params }) {
  const shortID = params?.shortID
  const prisma = new PrismaClient()

  const data = await prisma.link.findUnique({
    where: {
      shortUrl: shortID
    }
  })
  if (!data) {
    redirect('/')
  } else {
    redirect(data.url)
  }

  return <></>
}
