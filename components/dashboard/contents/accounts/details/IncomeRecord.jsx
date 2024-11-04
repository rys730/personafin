import { TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

export default function IncomeRecord() {
    const incomeData = [
        {
            "date": "2024-01-01",
            "income_stream": "paycheck",
            "amount": 10000000,
            "notes": "example notes"
        },
        {
            "date": "2024-02-01",
            "income_stream": "paycheck",
            "amount": 10000000,
            "notes": "example notes"
        },
        {
            "date": "2024-03-01",
            "income_stream": "paycheck",
            "amount": 10000000,
            "notes": "example notes"
        },
    ]
    return (
        incomeData.map((data, idx)=>{
            return (
                <TableRow key={idx}>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>{data.income_stream}</TableCell>
                    <TableCell>Rp.{data.amount.toLocaleString()}</TableCell>
                    <TableCell>{data.notes}</TableCell>
                </TableRow>
            )
        })
    )
}
