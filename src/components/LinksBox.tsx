import type { URL } from '@/types'
import LinkCard from './LinkCard'

interface Props {
  select: string
}

export default async function LinksBox ({ select }: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch('http://localhost:3000/api/shortUrl')
  const data: URL[] = await res.json()
  return (
      <section className="grid grid-cols-3 gap-4">
        {data?.map((item: URL) => (
          <LinkCard
            key={item.shortUrl}
            primaryUrl={select === 'original' ? item.url : item.shortUrl}
            secondUrl={select === 'original' ? item.shortUrl : item.url}
          />
        ))}
      </section>
  )
}
