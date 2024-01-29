'use client'
import LinkCard from '@/components/LinkCard'
import { Spinner, Switch } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import type { URL } from '../../types'

export default function Page () {
  const [data, setData] = useState<URL[]>([])
  const [loading, setloading] = useState(false)

  async function fetchData () {
    setloading(true)
    const res = await fetch('/api/shortUrl')
    const data: URL[] = await res.json()
    setData(data)
    setloading(false)
  }
  useEffect(() => {
    try {
      void fetchData()
    } catch (error) {
      console.error(error)
    } finally {
      setloading(false)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-24" >
      <h1 className="text-3xl font-bold">URLs Already in Use</h1>
      <div className="flex">
        <Switch
          defaultSelected
          size='md'
          className='mb-4'
        >
          Original URLs
        </Switch>
      </div>
      <section className="grid grid-cols-3 gap-4">
      {loading
        ? (
          <Spinner/>
          )
        : (
            data.map((d: URL) => (
            <LinkCard key={d.shortUrl} primaryUrl={d.url} secondUrl={d.shortUrl} />
            ))
          )}
      </section>
    </main>
  )
}
