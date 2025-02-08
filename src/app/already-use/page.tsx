'use client'
export const dynamic = 'force-dynamic'

import { LinksBox } from '@/components/already-use/LinksBox'
import { Switcher } from '@/components/already-use/Switcher'
import { use } from 'react';

export default function Page(props: { searchParams: Promise<{ select: string }> }) {
  const searchParams = use(props.searchParams);
  const select = searchParams?.select

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-10 md:p-24">
      <h1 className="md:text-3xl font-bold">URLs Already in Use</h1>
      <Switcher/>
        <LinksBox select={select} />
    </main>
  )
}
