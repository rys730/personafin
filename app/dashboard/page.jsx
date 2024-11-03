import ContentsWrapper from '@/components/dashboard/contents/Contents'
import AccountCard from '@/components/dashboard/contents/home/AccountCard'
import AccountCardsWrapper from '@/components/dashboard/contents/home/AccountCardsWrapper'
import Expenses from '@/components/dashboard/contents/home/Expenses'
import { expensesColumns, expenseMockData } from '@/components/dashboard/contents/home/ExpensesColumns'
import Income from '@/components/dashboard/contents/home/Income'
import { incomeColumns, incomeMockData } from '@/components/dashboard/contents/home/IncomeColumns'
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
    <>
      <h2 className='text-2xl mt-10 font-bold'>Welcome, User!</h2>
      <AccountCardsWrapper>
        {cardDatas.map(data=>{
          return <AccountCard key={data.id} data={data} />
        })}
      </AccountCardsWrapper>
      <Expenses columns={expensesColumns} data={expenseMockData}/>
      <Income columns={incomeColumns} data={incomeMockData}/>
    </>  
  )
}
