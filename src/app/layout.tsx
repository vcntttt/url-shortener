import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { Header } from '@/components/nav-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'URL Shortener',
  description: 'Open source URL shortener'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
      </head>
      <body className={`${inter.className} dark:bg-[#121212] dark:text-white`}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
