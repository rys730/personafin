"use client"
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AccountDetailsComponent({id}) {
    const router = useRouter()
    // TODO get account details
    const accountDetails = {
        "id": 1,
        "name": "wallet-3",
        "current_balance": 30000000,
        "initial_amount": 10000000,
        "total_income": 40000000,
        "total_expense": 10000000,
        "total_transfer_in": 5000000,
        "total_transfer_out": 5000000,
    }
    return (
    <>
        <div className='flex items-center'>
            <img src='/menus/account/details/back.svg' className='w-5 h-5 m-5 cursor-pointer' onClick={()=>router.back()}></img>
            <h2 className='text-xl font-bold sm:text-3xl'>{accountDetails.name} Details</h2>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap justify-around md:justify-evenly'>
            <Card className='w-full sm:w-[40%] md:w-[30%] m-3 p-3 sm:p-4 md:p-5'>
                <p className='text-lg sm:text-xl'>Initial Ammount: </p>
                <p className='text-lg font-bold sm:text-xl md:text-2xl'>Rp.{accountDetails.initial_amount.toLocaleString()}</p>
            </Card>
            <Card className='w-full sm:w-[40%] md:w-[30%] m-3 p-3 sm:p-4 md:p-5'>
                <p className='text-lg sm:text-xl'>Current Balance: </p>
                <p className='text-lg font-bold sm:text-xl md:text-2xl'> Rp.{accountDetails.current_balance.toLocaleString()}</p>
            </Card>
            <Card className='w-full sm:w-[40%] md:w-[30%] m-3 p-3 sm:p-4 md:p-5'>
                <p className='text-lg sm:text-xl'>Total Income: </p>
                <p className='text-lg font-bold sm:text-xl md:text-2xl'> Rp.{accountDetails.total_income.toLocaleString()}</p>
            </Card>
            <Card className='w-full sm:w-[40%] md:w-[30%] m-3 p-3 sm:p-4 md:p-5'>
                <p className='text-lg sm:text-xl'>Total Expense: </p>
                <p className='text-lg font-bold sm:text-xl md:text-2xl'> Rp.{accountDetails.total_expense.toLocaleString()}</p>
            </Card>
            <Card className='w-full sm:w-[40%] md:w-[30%] m-3 p-3 sm:p-4 md:p-5'>
                <p className='text-lg sm:text-xl'>Total Transfer In: </p>
                <p className='text-lg font-bold sm:text-xl md:text-2xl'> Rp.{accountDetails.total_transfer_in.toLocaleString()}</p>
            </Card>
            <Card className='w-full sm:w-[40%] md:w-[30%] m-3 p-3 sm:p-4 md:p-5'>
                <p className='text-lg sm:text-xl'>Total Transfer Out: </p>
                <p className='text-lg font-bold sm:text-xl md:text-2xl'> Rp.{accountDetails.total_transfer_out.toLocaleString()}</p>
            </Card>
        </div>
        <Separator className='mt-2'/>
    </>
  )
}
