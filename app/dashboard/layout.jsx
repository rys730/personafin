"use client"
import Navbar from '@/components/dashboard/navbar/Navbar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <section>
        <Navbar />
        {children}
    </section>
    
  )
}
