'use client'
import { useValidate } from '@/hooks'
import { RandomIcon } from '@/icons/RandomIcon'
import { useUrlStore } from '@/store'
import {
  Input,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react'
import { useState } from 'react'
import { toast } from 'sonner'

interface Props {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  url?: string
}

export default function UrlModal ({
  isOpen,
  onOpenChange,
  url
}: Props) {
  const [shortUrl, setShortUrl] = useState('')
  const addUrl = useUrlStore((state) => state.addUrl)
  const { validateUrl } = useValidate()

  const randomize = () => {
    const shortUrl = Math.random().toString(36).substring(2, 5)
    setShortUrl(shortUrl)
  }

  const handleSubmit: React.FormEventHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (url) {
      if (validateUrl(url)) {
        toast.error('URL already exists')
        return
      }
      try {
        const res = await fetch('/api/shortUrl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url, shortUrl })
        })
        if (res.ok) {
          setShortUrl('')
          addUrl({ shortUrl, url })
          toast.success('URL shortened successfully')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
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
                      <span className="ml-2 font-bold">{url}</span>
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <Input
                        type="text"
                        placeholder="Insert custom short url"
                        label="Short Url"
                        value={shortUrl}
                        onChange={(e) => {
                          setShortUrl(e.target.value)
                        }}
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
  )
}
