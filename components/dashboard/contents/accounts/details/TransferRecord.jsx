import { TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

export default function TransferRecord() {
    const transferData = [
        {
            "date": "2024-01-01",
            "name": "Transfer to GoPay",
            "amount": 200000,
            "from": "Bank Account",
            "to": "GoPay Wallet"
        },
        {
            "date": "2024-01-01",
            "name": "Transfer to OVO",
            "amount": 50000,
            "from": "Bank Account",
            "to": "OVO Wallet"
        },
        {
            "date": "2024-01-01",
            "name": "Transfer to GoPay",
            "amount": 200000,
            "from": "Bank Account",
            "to": "GoPay Wallet"
        },
    ]
    return (
        transferData.map((data, idx)=>{
            return (
                <TableRow key={idx}>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>Rp.{data.amount.toLocaleString()}</TableCell>
                    <TableCell>{data.from}</TableCell>
                    <TableCell>{data.to}</TableCell>
                </TableRow>
            )
        })
    )
}
