import React from 'react'

export default function Login() {
  return (
    <div className='flex bg-white w-4/5 h-1/2 m-8 p-5 rounded-2xl md:p-8 md:m-10 md:w-3/4'>
      <form action="" className='flex-col min-w-full min-h-full'>
        <div className='min-w-full mb-8'>
          <label htmlFor="username">Username</label>
          <input type="text" name='username' placeholder='username' className='block mt-2 border-1 rounded-xl bg-transparent py-1.5 pl-2 w-full text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'/>
        </div>
        <div className='min-w-full'>
          <label htmlFor="username">Password</label>
          <input type="password" name='password' placeholder='password' className='block mt-2 border-1 rounded-xl bg-transparent py-1.5 pl-2 w-full text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'/>
        </div>
        <div className='flex justify-center mt-10'>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
        </div>
      </form>
    </div>
  )
}
