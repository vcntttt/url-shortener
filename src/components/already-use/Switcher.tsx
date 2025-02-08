'use client'
import { Switch } from "@heroui/react"
import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export function Switcher () {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const select = searchParams.get('select') ?? 'shortUrl'

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
  )
}
