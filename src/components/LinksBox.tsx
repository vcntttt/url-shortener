import type { URL } from '@/types'
import LinkCard from './LinkCard'

interface Props {
  select: string
  data: URL[]
}

export default function LinksBox ({ select, data }: Props) {
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
