import type { URL } from '@/types'
import { LinkCard } from '@/components/already-use'

interface Props {
  select: string
  data: URL[]
}

export function LinksBox ({ select, data }: Props) {
  return (
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
