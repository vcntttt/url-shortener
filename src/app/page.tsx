'use client'

import { RandomIcon } from '@/icons/RandomIcon'
import {
  Input,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link
} from '@nextui-org/react'
import { useRef, useState } from 'react'
import { Toaster, toast } from 'sonner'

interface Data {
  shortUrl: string
  url: string
}

export default function Home () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [shortUrl, setShortUrl] = useState('')
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
          body: JSON.stringify({ url, shortUrl })
        })
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const randomize = () => {
    const shortUrl = Math.random().toString(36).substring(2, 5)
    setShortUrl(shortUrl)
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
        <Link href="/already-use" className="underline">
          see urls already in use
        </Link>
      </form>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Choose a short URL
              </ModalHeader>
              <ModalBody>
                <form className="flex justify-center flex-col gap-y-4">
                  <>
                    <h1>
                      Your Link:
                      <span className="ml-2 font-bold">
                        {inputRef.current?.value}
                      </span>
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <Input
                        type="text"
                        placeholder="Insert custom short url"
                        label="Short Url"
                        value={shortUrl}
                        onChange={(e) => { setShortUrl(e.target.value) }}
                      />
                      <Button
                        isIconOnly
                        color="default"
                        onPress={randomize}
                        className="flex h-[56px]"
                      >
                        <RandomIcon />
                      </Button>
                    </div>
                  </>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={onClose}
                  onClick={handleSubmit}
                >
                  Create link
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Toaster position="top-center" richColors />
    </main>
  )
}
