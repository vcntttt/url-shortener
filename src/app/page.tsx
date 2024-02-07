'use client'
import { useFetch, useValidate } from '@/hooks/'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { Toaster, toast } from 'sonner'
import { Input, Button, useDisclosure } from '@nextui-org/react'
import UrlModal from '@/components/UrlModal'
import { useUrlStore } from '@/store'

export default function Home () {
  const [shortUrl, setShortUrl] = useState('')
  const { isOpen, onOpenChange, onOpen } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>(null)
  const addUrl = useUrlStore((state) => state.addUrl)
  useFetch()
  const { validateUrl } = useValidate()

  const handleSubmit: React.FormEventHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (inputRef.current !== null) {
      const url = inputRef.current.value
      if (validateUrl(url)) {
        toast.error('URL already exists')
        return
      }
      const shortUrl = Math.random().toString(36).substring(2, 5)
      try {
        const res = await fetch('/api/shortUrl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url, shortUrl })
        })
        console.log(res)
        if (res.ok) {
          setShortUrl('')
          inputRef.current.value = ''
          addUrl({ shortUrl, url })
          toast.success('URL shortened successfully')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-24">
      <h1 className="text-3xl font-bold">URL Shortener</h1>
      <form className="flex flex-col gap-y-4 w-2/6 justify-center items-center">
        <Input
          type="url"
          placeholder="Enter url"
          id="url"
          ref={inputRef}
          label="URL"
        />
        <Button
          className="w-full"
          onPress={() => {
            if (
              inputRef.current !== null &&
              inputRef.current.value.length > 0
            ) {
              onOpen()
            } else {
              toast.error('Please enter a url')
            }
          }}
        >
          Shorten
        </Button>
        <Link href="/already-use" className="underline text-blue-400">
          see urls already in use
        </Link>
      </form>
      <UrlModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        shortUrl={shortUrl}
        setShortUrl={setShortUrl}
        url={inputRef.current?.value}
        handleSubmit={handleSubmit}
      />
      <Toaster position="top-center" richColors />
    </main>
  )
}
