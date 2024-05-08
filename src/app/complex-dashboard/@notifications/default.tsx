import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

export default function DefaultNotifications() {
  return (
    <>
        <Card>
            <h1>Notifications Page</h1>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>
        
    </>
  )
}
