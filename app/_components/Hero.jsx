"use client"
import React from 'react'
import {motion} from 'framer-motion';
function Hero() {
  let text="Ecommerce is the electronic buying and selling of goods and services, usually via the internet. Businesses can build their own ecommerce website, set up an ecommerce storefront on an established selling site like Amazon, or do it all for a multi-channel approach."
 let text2="from Home"
  return (
  
<section
  className="relative bg-[url(/so.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
   <div className=''>
   <motion.h1
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{staggerChildren:0.05}}
   className="text-3xl font-extrabold sm:text-5xl text-black">
        Let us Shopping
        {
   text2.split(" ").map((char,index)=>(
     <motion.strong key={index}
     className=" font-extrabold m-3 text-emerald-400"
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{

       delay: index * 0.05,
     }}
     >
       {char}
     </motion.strong>
   ))
 }
     
      </motion.h1>
   </div>

      <motion.p 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{staggerChildren:0.05}}
      
      className="mt-4 max-w-lg sm:text-xl/relaxed text-black ">
         {
   text.split("").map((char,index)=>(
     <motion.span key={index}
     
     initial={{opacity:0}}
     animate={{opacity:1,
      fontSize:20
     }}
     transition={{

       delay: index * 0.05,
     }}
     >
       {char}
     </motion.span>
   ))
 }
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-emerald-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-300 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-blue-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
