import { create } from 'zustand'
import { type UrlState } from '@/types'
import { devtools } from 'zustand/middleware'

export const useUrlStore = create<UrlState>()(devtools((set) => ({
  urls: [],
  dbStatus: 'off',
  setUrls: (urls) => { set({ urls }) },
  setDBStatus: (dbStatus) => { set({ dbStatus }) },
  addUrl: (url) => { set((state) => ({ urls: [...state.urls, url] })) }
})))
