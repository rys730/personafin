import React from 'react'

export default function ContentsWrapper({children}) {
  return (
    <div className='flex flex-col pl-5 pr-5 pt-20 h-full sm:pl-20 wrap'>{children}</div>
  )
}
