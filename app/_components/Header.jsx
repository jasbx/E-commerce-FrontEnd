"use client"
import Link from 'next/link';
import React,{useState,useEffect} from 'react'

import {ShoppingCart} from 'lucide-react'
import {motion} from 'framer-motion';
import Cart from './Cart';
const Header = () => {
   
   const [openCart,setOpen]=useState(false)
   
   
   const [openMenu,setMenu]=useState(false)
  

  return  (
   
    <header>
            <motion.nav
               
                  initial={{
                y:'-100vh'
            }}
            animate={{
                y:0
            }}
            transition={{
                type: 'spring',
                ease: 'easeInOut',
                duration: 0.6,
                damping:8
               
            }}
               className="bg-white shadow-md border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex  flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="#" className="flex items-center hidden md:flex">
                        <img src="/j.png" className="mr-3 h-6 sm:h-9" alt=" Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Jassim Dev</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                   
                    <>
                        <Link href="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
                        
                        <Link href="/registar" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</Link>
                        
                        </>
                        <div className='flex gap-5 items-center justify-content-around'>
                            <h2 className='flex gap-2'><ShoppingCart onClick={()=>setOpen(!openCart)}/></h2>
                        
                            {openCart &&<Cart/>}
                        </div>
                  
                        <button onClick={()=>setMenu(!openMenu)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex space-x-10 md:space-x-0 items-center p-2 ml-1 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                           
                        </button>
                    </div>
                   {
                    openMenu &&
                    <div  className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link href="/" className="block py-2 pr-4 pl-3  rounded lg:bg-transparent text-slate-800 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                        </li>
                        <li>

                        </li>
                    
                        <li>
                            <Link href="/project" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Project</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
                        </li>
                        <li>
                            <Link href="/connect" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 text-primary lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li>
                    </ul>
                </div>
                   }
                </div>
            </motion.nav>
            
    
        </header>
    
        
     
  )
}

export default Header
