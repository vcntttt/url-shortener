'use client'
import { Switch } from '@nextui-org/react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import LinksBox from './LinksBox'

export default function URLSwitcher () {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const select = searchParams.get('select') ?? 'original'

  function handleSelectChange (value: string) {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('select', value)
    } else {
      params.delete('select')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Switch
        size="md"
        className="mb-4"
        isSelected={select === 'original'}
        onChange={() => {
          if (select === 'original') handleSelectChange('shortUrl')
          else handleSelectChange('original')
        }}
        defaultValue={select?.toString()}
      >
        Original URLs
      </Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <LinksBox select={select} />
      </Suspense>
    </div>
  )
}
