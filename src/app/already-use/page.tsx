'use client'
import { LinksBox, Switcher } from '@/components/already-use'
import { useFetch } from '@/hooks'
import { useUrlStore } from '@/store/urlStore'
import { useEffect } from 'react'

export default function Page ({ searchParams }: { searchParams: { select: string } }) {
  const select = searchParams?.select
  const urls = useUrlStore((state) => state.urls)
  const { fetchUrls } = useFetch()
  useEffect(() => {
    if (urls.length > 1) return
    fetchUrls()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-10 md:p-24">
      <h1 className="md:text-3xl font-bold">URLs Already in Use</h1>
      <Switcher/>
      <LinksBox select={select} data={urls}/>
    </main>
  )
}
