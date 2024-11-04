"use client"
import ContentsWrapper from '@/components/dashboard/contents/Contents'
import Navbar from '@/components/dashboard/navbar/Navbar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <section className='h-screen'>
      <div className='flex flex-col'>
        <Navbar />
        <ContentsWrapper>
          {children}
        </ContentsWrapper>
      </div>
    </section>
    
  )
}
