import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

interface Props {
  params: {
    shortID: string
  }
}

export default async function ShortIdPage ({ params }: Props) {
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
