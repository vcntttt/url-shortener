'use client'
import { Card, CardBody } from '@nextui-org/react'

interface Props {
  primaryUrl: string
  secondUrl: string
}

export default function LinkCard ({ primaryUrl, secondUrl }: Props) {
  return (
    <Card className='w-full link-card'>
      <CardBody>
        <a href={primaryUrl} className='link primary' target='_blank' rel='noopener noreferrer'>
          <span>{primaryUrl}</span>
        </a>
        <a href={secondUrl} className='link secondary' target='_blank' rel='noopener noreferrer'>
          <span>{secondUrl}</span>
        </a>
      </CardBody>
    </Card>
  )
}
