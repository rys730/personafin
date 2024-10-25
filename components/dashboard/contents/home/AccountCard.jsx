import { Card, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function AccountCard({data}) {
  return (
    <Card key={data.id} className="flex flex-col min-w-[45%] h-24 justify-center bg-gray-500 md:min-w-[33%] lg:min-w-[25%]">
        <span className='block text-sm'>{data.Name}</span>
        <span className='block text-sm font-bold'>Balance: <br></br> {data.Balance}</span>
    </Card>
  )
}
