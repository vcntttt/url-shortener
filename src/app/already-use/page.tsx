'use client'
import { Switch } from '@nextui-org/react'
import type { URL } from '@/types'
import LinkCard from '@/components/LinkCard'
import { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function Page () {
  const [data, setData] = useState<URL[]>()
  //
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  async function fetchData () {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const res = await fetch('/api/shortUrl')
    const data: URL[] = await res.json()
    setData(data)
  }

  useEffect(() => {
    void fetchData()
  }, [])

  function handleSelectChange (value: string) {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('select', value)
    } else {
      params.delete('select')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-24">
      <h1 className="text-3xl font-bold">URLs Already in Use</h1>
      <div className="flex">
        <Switch
          defaultSelected
          size="md"
          className="mb-4"
          isSelected={searchParams.get('select') === 'original'}
          onChange={() => {
            if (searchParams.get('select') === 'original') handleSelectChange('shortUrl')
            else handleSelectChange('original')
          }}
        >
          Original URLs
        </Switch>
      </div>
      <section className="grid grid-cols-3 gap-4">
        {data?.map((item: URL) => (
          <LinkCard
            key={item.shortUrl}
            primaryUrl={searchParams.get('select') === 'original' ? item.url : item.shortUrl}
            secondUrl={searchParams.get('select') === 'original' ? item.shortUrl : item.url}
          />
        ))}
      </section>
    </main>
  )
}
