import { create } from 'zustand'
import { type UrlState } from '@/types'
import { devtools } from 'zustand/middleware'

export const useUrlStore = create<UrlState>()(devtools((set) => ({
  urls: [],
  dbStatus: false,
  setUrls: (urls) => { set({ urls }) },
  setDBStatus: (dbStatus) => { set({ dbStatus }) }
})))
