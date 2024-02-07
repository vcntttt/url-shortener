import { useValidate } from '@/hooks'
import { RandomIcon } from '@/icons/RandomIcon'
import {
  Input,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react'
import { toast } from 'sonner'
interface Props {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  shortUrl: string
  setShortUrl: (shortUrl: string) => void
  handleSubmit: React.FormEventHandler
  url?: string
}

export default function UrlModal ({ isOpen, onOpenChange, shortUrl, setShortUrl, handleSubmit, url }: Props) {
  const randomize = () => {
    const shortUrl = Math.random().toString(36).substring(2, 5)
    setShortUrl(shortUrl)
  }
  const { validateShortUrl } = useValidate()
  const handleFinalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateShortUrl(shortUrl)) {
      toast.error('shortUrl already exists')
      return
    }
    handleSubmit(e)
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
                  <span className="ml-2 font-bold">
                    {url}
                  </span>
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
              onClick={handleFinalSubmit}
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
