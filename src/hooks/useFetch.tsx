'use client'
import { useUrlStore } from '@/store/'
import { type URL } from '@/types'

export function useFetch () {
  const { setUrls, setDBStatus } = useUrlStore((state) => ({
    urls: state.urls,
    setUrls: state.setUrls,
    setDBStatus: state.setDBStatus
  }))

  const fetchUrls = () => {
    setDBStatus('loading')
    fetch('/api/shortUrl/')
      .then(async (res) => await res.json())
      .then((data: URL[]) => {
        setUrls(data)
        setDBStatus('on')
      })
      .catch((error) => {
        console.error(error)
        setDBStatus('error')
      })
  }

  return { fetchUrls }
}
