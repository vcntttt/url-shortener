'use client'
import { Card, CardBody, Skeleton } from '@nextui-org/react'

interface Props {
  primaryUrl: string
  secondUrl: string
  loading?: boolean
}

export default function LinkCard ({ primaryUrl, secondUrl, loading }: Props) {
  return (
    <Card>
      <CardBody>
      {loading ? <Skeleton/> : primaryUrl}
      </CardBody>
    </Card>
  )
}
