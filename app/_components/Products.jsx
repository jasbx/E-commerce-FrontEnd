"use client"
import React from 'react'
import { productone } from '../productData'

import {motion} from 'framer-motion'
const Products = () => {
  const DivVarints={
    start:{
      y:200
    },
    end:{
      y:0
    }
  }

  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
  
        <p className="mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
 {   productone.map((pro)=>(  <motion.li
 
 
 initial={{
  x:50,
  y:50
 }}
 whileInView={{
 x:0,
 y:0
 }}
 transition={{
   type:'spring',
   damping:10,
   stiffness:150
 }}
 
 
 
 
 
 
 
 >
        <a href="#" className="group block overflow-hidden">
          <img
            src={pro.img}
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
           {pro.name}
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> ${pro.price} USD </span>
            </p>
          </div>
        </a>
      </motion.li>))}
</ul>
     
  
    
    </div>
  </section>
  )
}

export default Products
