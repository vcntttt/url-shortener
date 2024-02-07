import { useUrlStore } from '@/store/'

export function useValidate () {
  const urls = useUrlStore((state) => state.urls)
  const validateUrl = (url: string) => {
    return urls.some((existingUrl) => existingUrl.url === url)
  }

  const validateShortUrl = (shortUrl: string) => {
    return urls.some((existingUrl) => existingUrl.shortUrl === shortUrl)
  }

  return { validateUrl, validateShortUrl }
}
