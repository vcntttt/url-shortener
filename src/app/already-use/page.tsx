'use client'
import { LinksBox, Switcher } from '@/components/already-use'
import { useUrlStore } from '@/store/urlStore'

export default function Page ({ searchParams }: { searchParams: { select: string } }) {
  const select = searchParams?.select
  const urls = useUrlStore((state) => state.urls)
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-24">
      <h1 className="text-3xl font-bold">URLs Already in Use</h1>
      <Switcher/>
      <LinksBox select={select} data={urls}/>
    </main>
  )
}
