import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

interface Props {
  params?: Promise<{
    shortID: string
  }>
}

export default async function ShortIdPage (props: Props) {
  const params = await props.params
  const shortID = params?.shortID
  const prisma = new PrismaClient()
  if (typeof shortID !== 'string') {
    redirect('/')
    return <></>
  }

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
