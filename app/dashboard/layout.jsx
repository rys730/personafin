"use client"
import ContentsWrapper from '@/components/dashboard/contents/Contents'
import Navbar from '@/components/dashboard/navbar/Navbar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <section className='h-screen'>
        <Navbar />
        <ContentsWrapper>
          {children}
        </ContentsWrapper>
    </section>
    
  )
}
