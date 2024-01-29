import { CircularProgress } from '@nextui-org/react'

export default function loading () {
  return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-y-6 p-24">
        <CircularProgress label="Redirecting..." size="lg" />
      </div>
  )
}
