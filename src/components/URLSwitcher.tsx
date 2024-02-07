'use client'

import { Suspense } from 'react'
import LinksBox from './LinksBox'

export default function URLSwitcher () {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">

      <Suspense fallback={<div>Loading...</div>}>
        <LinksBox select={select} />
      </Suspense>
    </div>
  )
}
