'use client'
import { useUrlStore } from '@/store/urlStore'
import { Card, CardBody } from '@nextui-org/react'

const DBIndicator = () => {
  const dbStatus = useUrlStore((state) => state.dbStatus)
  return (
      <Card>
        <CardBody className='flex flex-row items-center gap-x-2'>
          db: {dbStatus}
          <span className='rounded-full h-3 w-3' style={{ backgroundColor: dbStatus === 'on' ? 'green' : 'red' }}>
          </span>
        </CardBody>
      </Card>
  )
}

export default DBIndicator
