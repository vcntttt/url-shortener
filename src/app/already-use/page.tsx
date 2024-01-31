'use client'
import { Switch } from '@nextui-org/react'
import type { URL } from '@/types'
import LinkCard from '@/components/LinkCard'
import { useEffect, useState } from 'react'

export default function Page () {
  const [data, setData] = useState<URL[]>()
  const [select, setSelect] = useState('original')

  async function fetchData () {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const res = await fetch('/api/shortUrl')
    const data: URL[] = await res.json()
    setData(data)
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-24">
      <h1 className="text-3xl font-bold">URLs Already in Use</h1>
      <div className="flex">
        <Switch
          defaultSelected
          size="md"
          className="mb-4"
          isSelected={select === 'original'}
          onChange={() => {
            if (select === 'original') setSelect('shortUrl')
            else setSelect('original')
          }}
        >
          Original URLs
        </Switch>
      </div>
      <section className="grid grid-cols-3 gap-4">
        {data?.map((item: URL) => (
          <LinkCard
            key={item.shortUrl}
            primaryUrl={select === 'original' ? item.url : item.shortUrl}
            secondUrl={select === 'original' ? item.shortUrl : item.url}
          />
        ))}
      </section>
    </main>
  )
}
