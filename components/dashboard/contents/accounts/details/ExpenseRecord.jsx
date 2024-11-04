import { TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

export default function ExpenseRecord() {
    const incomeData = [
        {
            "date": "2024-01-01",
            "expense": "slot gacor",
            "amount": 10000000,
            "category": "entertainment",
            "notes": "example notes"
        },
        {
            "date": "2024-01-01",
            "expense": "slot gacor",
            "amount": 10000000,
            "category": "entertainment",
            "notes": "example notes"
        },{
            "date": "2024-01-01",
            "expense": "slot gacor",
            "amount": 10000000,
            "category": "entertainment",
            "notes": "example notes"
        },
    ]
    return (
        incomeData.map((data, idx)=>{
            return (
                <TableRow key={idx}>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>{data.expense}</TableCell>
                    <TableCell>Rp.{data.amount.toLocaleString()}</TableCell>
                    <TableCell>{data.category}</TableCell>
                    <TableCell>{data.notes}</TableCell>
                </TableRow>
            )
        })
    )
}
