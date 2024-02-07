'use client'
import LinksBox from '@/components/LinksBox'
// import useFetch from '@/hooks/useFetch'
import { useUrlStore } from '@/store/urlStore'
import { Switch } from '@nextui-org/react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function Page () {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const select = searchParams.get('select') ?? 'original'
  const urls = useUrlStore((state) => state.urls)
  // useFetch()

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
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-24">
      <h1 className="text-3xl font-bold">URLs Already in Use</h1>
      <div className="flex">
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
      </div>
      <LinksBox select={select} data={urls}/>
    </main>
  )
}
