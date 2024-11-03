import { Separator } from '@/components/ui/separator'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AccountRows = () => {
    const accountDatas = [
        {
            "id": 1,
            "name": "wallet-1",
            "current_balance": 30000000,
            "initial_amount": 10000000,
            "total_income": 40000000,
            "total_expense": 10000000,
            "total_transfer_in": 5000000,
            "total_transfer_out": 5000000,
        },
        {
            "id": 2,
            "name": "wallet-2",
            "current_balance": 30000000,
            "initial_amount": 10000000,
            "total_income": 40000000,
            "total_expense": 10000000,
            "total_transfer_in": 5000000,
            "total_transfer_out": 5000000,
        },
        {
            "id": 3,
            "name": "wallet-3",
            "current_balance": 30000000,
            "initial_amount": 10000000,
            "total_income": 40000000,
            "total_expense": 10000000,
            "total_transfer_in": 5000000,
            "total_transfer_out": 5000000,
        },
    ]
    return (
        <>
        {
            accountDatas.map((data, idx) => {
                return(
                    <TableRow key={idx}>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>Rp.{data.current_balance.toLocaleString()}</TableCell>
                        <TableCell>Rp.{data.initial_amount.toLocaleString()}</TableCell>
                        <TableCell>Rp.{data.total_income.toLocaleString()}</TableCell>
                        <TableCell>Rp.{data.total_expense.toLocaleString()}</TableCell>
                        <TableCell>Rp.{data.total_transfer_in.toLocaleString()}</TableCell>
                        <TableCell>Rp.{data.total_transfer_out.toLocaleString()}</TableCell>
                        <TableCell>
                            <Button asChild variant="secondary">
                                <Link href={`/dashboard/accounts/${data.id}`}>Details</Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                )
            })
        }        
        </>
    )
}

export default function AccountTable() {
  return (
    <>
        <h2>Account Table</h2>
        <Separator className="my-4" />
        <div className="rounded-md border">
            <Table>
                <TableHeader className="bg-white">
                  <TableRow>
                    <TableHead className="w-[100px]">Account Name</TableHead>
                    <TableHead>Current Balance</TableHead>
                    <TableHead>Initial Amount</TableHead>
                    <TableHead>Total Income</TableHead>
                    <TableHead>Total Expense</TableHead>
                    <TableHead>Total Transfer In</TableHead>
                    <TableHead>Total Transfer Out</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    <AccountRows />
                </TableBody>
            </Table>
        </div>
    </>
  )
}
