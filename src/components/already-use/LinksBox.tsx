import type { URL } from '@/types';
import { LinkCard } from '@/components/already-use/LinkCard';
import { useLinks } from '@/hooks/useLinks';

interface Props {
  select: string;
}

export function LinksBox({ select }: Props) {
  const data = useLinks();

  if (data.length === 0) {
    return <div>loading links...</div>;
  }

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
  );
}
