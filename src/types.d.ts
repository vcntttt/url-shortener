export interface URL {
  shortUrl: string
  url: string
}

type status = 'on' | 'off' | 'loading' | 'error'

export interface UrlState {
  urls: URL[]
  dbStatus: status
  setUrls: (urls: URL[]) => void
  setDBStatus: (dbStatus: status) => void
}
