'use client'
import { useFetch } from '@/hooks/'
import Link from 'next/link'
import { useRef } from 'react'
import { Toaster, toast } from 'sonner'
import { Input, Button, useDisclosure } from '@nextui-org/react'
import UrlModal from '@/components/UrlModal'

export default function Home () {
  const { isOpen, onOpenChange, onOpen } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>(null)
  useFetch()

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
        url={inputRef.current?.value}
      />
      <Toaster position="top-center" richColors />
    </main>
  )
}
