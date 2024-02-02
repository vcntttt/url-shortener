'use client'
import { Card, CardBody } from '@nextui-org/react'
import { useState, useEffect } from 'react'

const DBIndicator = () => {
  const [dbStatus, setDbStatus] = useState('')

  useEffect(() => {
    const checkDbStatus = async () => {
      try {
        const response = await fetch('/api/dbHealth')
        const status = await response.json()
        if (status) {
          setDbStatus('green')
        } else {
          setDbStatus('red')
        }
      } catch (error) {
        setDbStatus('red')
      }
    }

    checkDbStatus().catch(console.error)
  }, [])

  return (
      <Card>
        <CardBody className='flex flex-row items-center gap-x-2'>
          db: {dbStatus === 'green' ? 'on' : 'off'}
          <span className='rounded-full h-3 w-3' style={{ backgroundColor: dbStatus }}>
          </span>
        </CardBody>
      </Card>
  )
}

export default DBIndicator
