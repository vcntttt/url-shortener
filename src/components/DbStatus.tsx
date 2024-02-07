'use client'
import { useUrlStore } from '@/store/urlStore'
import { Chip } from '@nextui-org/react'

const DBIndicator = () => {
  const dbStatus = useUrlStore((state) => state.dbStatus)
  const statusColors = {
    on: 'success',
    loading: 'warning',
    error: 'danger',
    off: 'warning'
  }
  return (
      <Chip color={statusColors[dbStatus] || 'default' as any}>
          DB Status
      </Chip>
  )
}

export default DBIndicator
