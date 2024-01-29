'use client'

import { Input, Button } from '@nextui-org/react'
import { useRef, useState } from 'react'

interface Data {
  shortUrl: string
  url: string
}

export default function Home () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [shortUrl, setShortUrl] = useState('')

  const handleSubmit: React.FormEventHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (inputRef.current !== null) {
      const url = inputRef.current.value

      try {
        const res = await fetch('/api/shortUrl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url })
        })
        const data: Data = await res.json()
        setShortUrl(data.shortUrl)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
      <main className="flex min-h-screen flex-col items-center gap-y-6 p-24">
        <h1 className="text-3xl font-bold">URL Shortener</h1>
        {shortUrl.length > 0 && <p>Short Url: {shortUrl}</p>}
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <Input type="url" placeholder="Enter url" id="url" ref={inputRef} label="URL" />
          <Button type="submit">Generar Link</Button>
        </form>
      </main>
  )
}
