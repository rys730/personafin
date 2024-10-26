"use client"
import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts"
 
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function AccountGraph() {
    // state for selected wallet filter
    // TODO chart data for each wallet? possibly memoize
    const chartData = [
        { month: "January", balance: 1000000000},
        { month: "February", balance: 500000000},
        { month: "March", balance: 700000000},
        { month: "April", balance: 2000000000},
        { month: "June", balance: 3000000000},
        { month: "July", balance: 2500000000},
    ]

    const walletList = [
        {
            "id": 1,
            "name": "Wallet-1"
        },
        {
            "id": 2,
            "name": "Wallet-2"
        },
        {
            "id": 3,
            "name": "Wallet-3"
        },
    ]

    const chartConfig = {
        balance: {
            label: "balance",
            color: "#2563eb",
        },
    }
  return (
    <>
        <h2 className='mt-10'>End Of Month Account Balance</h2>
        <Separator className="my-4" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Account" />
          </SelectTrigger>
          <SelectContent>
            {
                walletList.map((wallet)=>{
                    return (
                        <SelectItem key={wallet.id} value={wallet.id}>{wallet.name}</SelectItem>
                    )
                })
            }
          </SelectContent>
        </Select>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full mt-5 md:max-h-[10rem]">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={5}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                <ChartTooltip className="bg-black" content={<ChartTooltipContent />} />
              <Bar dataKey="balance" fill="var(--color-balance)" radius={4} />
            </BarChart>
        </ChartContainer>
    </>
  )
}
