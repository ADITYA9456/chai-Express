"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)


  return (
    <nav className=" bg-slate-950 text-white flex justify-between px-5 items-center h-16">
      <div className="logo font-bold flex items-center  bg-gradient-to-r from-amber-700 via-purple-500 to-indigo-400  ... text-transparent  ... bg-clip-text text-2xl gap-2 "> Chai Express <span> <img className="top-6" src="/gif/tea1.gif" alt="tea" width={40} height={60} /> </span></div>

      <div className=' flex gap-4'>
        <Link href={"/"}>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Home</button></Link>

        <div className='relative flex justify-center items-center  md:block gap-4'>
          {session && <>
            <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
              setTimeout(() => {
                setShowdropdown(false)
              }, 100);
            }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={"/contact"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact us</Link>
                </li>
                <li>
                  <Link href={"/about"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About us</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div></>
          }

          {session && <button className='text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ' onClick={() => { signOut() }}>Logout</button>}
          {!session && <Link href={"/login"}>
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Login</button></Link>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar