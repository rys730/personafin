import AccountDetailsComponent from '@/components/dashboard/contents/accounts/AccountDetails'
import React from 'react'

export default async function AccountDetails({params}) {
  const id = (await params).id
    return (
    <AccountDetailsComponent id={id}/>
  )
}
