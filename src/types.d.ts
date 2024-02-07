export interface URL {
  shortUrl: string
  url: string
}

export interface UrlState {
  urls: URL[]
  dbStatus: boolean
  setUrls: (urls: URL[]) => void
  setDBStatus: (dbStatus: boolean) => void
}
