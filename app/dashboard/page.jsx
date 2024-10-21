import ContentsWrapper from '@/components/dashboard/contents/Contents'
import AccountCard from '@/components/dashboard/contents/home/AccountCard'
import AccountCardsWrapper from '@/components/dashboard/contents/home/AccountCardsWrapper'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function Home() {
  const cardDatas = [
    {
        "id": 1,
        "Name": "wallet 1",
        "Balance": "Rp. 100.000.000"
    },
    {
        "id": 2,
        "Name": "wallet 2",
        "Balance": "Rp. 100.000.000"
    },
    {
        "id": 3,
        "Name": "wallet 3",
        "Balance": "Rp. 100.000.000"
    },
    {
        "id": 4,
        "Name": "wallet 4",
        "Balance": "Rp. 100.000.000"
    },
  ]
  return (
    <ContentsWrapper>
      <h2 className='text-2xl mt-10 font-bold'>Welcome, User!</h2>
      <AccountCardsWrapper>
        {cardDatas.map(data=>{
          return <AccountCard data={data} />
        })}
      </AccountCardsWrapper>
    </ContentsWrapper>
  )
}
