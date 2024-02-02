import URLSwitcher from '@/components/URLSwitcher'

import { Suspense } from 'react'

export default function Page () {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-24">
      <h1 className="text-3xl font-bold">URLs Already in Use</h1>
      <div className="flex">
        <Suspense fallback={<div>Loading...</div>}>
          <URLSwitcher />
        </Suspense>
      </div>
    </main>
  )
}
