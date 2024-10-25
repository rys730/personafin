"use client"
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableHeader, TableRow, TableHead, TableCell } from '@/components/ui/table'
import {   
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable, 
} from '@tanstack/react-table'
import React from 'react'

export default function Income({columns, data}) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
  return (
    <>
    <h2 className='mt-10'>Recent Income</h2>
    <Separator className="my-4" />
    <div className="rounded-md border">
      <Table className="-z-50">
        <TableHeader className="bg-white">
          {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                  return (
                      <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                          )}
                  </TableHead>
                )
            })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                  <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  >
                {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
            ) : (
                <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    </>
  )
}
