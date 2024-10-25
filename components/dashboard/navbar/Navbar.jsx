import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import Menus from './menu'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("Home")
    const navRef = useRef(null);

    const handleMenuClick = (param) => {
        setOpen(!open)
        setActive(param)
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && open) {
                setOpen(false); // Close nav if clicking outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);
    return (
        <>
            <nav className='flex absolute top-0  w-full h-20 bg-[#18181B]'>
                <img src="/menus/burger.svg" className='w-10 h-10 m-5 sm:hidden' onClick={()=>setOpen(!open)}/>
                <img src="/menus/profile.svg" alt="" className='w-10 h-10 ml-auto m-5'/>
            </nav>
            <nav ref={navRef} className={`absolute z-50 top-0 left-0 bottom-0 h-full sm:w-16 pt-20 bg-gray-800 shadow-2xl text-clip overflow-hidden transition-all duration-200 ease-out ${open ? 'w-1/2' : 'hidden'} sm:block sm:hover:w-1/2 md:hover:w-1/4 lg:hover:w-1/4 xl:hover:w-1/5`}>
                <ul>
                {
                    Menus.map(menu=>{
                        return (
                            <li key={menu.name} className={`flex items-center p-5 ${active === menu.name ? "bg-indigo-500" : "bg-gray-800"}`}>
                                <img src={menu.image} alt="" className='w-5 h-5 mr-5'/>
                                <Link 
                                href={menu.path}
                                onClick={()=>handleMenuClick(menu.name)}
                                className='relative text-s ml-1'>
                                    <span>
                                        {menu.name}
                                    </span>
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </nav>
        </>
  )
}
