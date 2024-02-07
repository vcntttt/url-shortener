'use client'
import { useUrlStore } from '@/store/urlStore'
import { useEffect } from 'react'
import { type URL } from '@/types'

export default function useFetch () {
  const { setUrls, setDBStatus } = useUrlStore((state) => ({
    urls: state.urls,
    setUrls: state.setUrls,
    setDBStatus: state.setDBStatus
  }))

  useEffect(() => {
    fetch('/api/shortUrl').then(async (res) => await res.json()).then((data: URL[]) => {
      setUrls(data)
      setDBStatus(true)
    }).catch(console.error)
  }, [])

  return {}
}
