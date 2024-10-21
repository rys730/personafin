import { Card, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function AccountCardsWrapper({children}) {
  return (
    <Card className='flex flex-col w-full h-fit mt-2'>
        <CardTitle className='mb-2 text-md'>Accounts Overview</CardTitle>
        <div className='flex flex-nowrap overflow-x-auto gap-4'>
          {children}
        </div>
    </Card>
  )
}
