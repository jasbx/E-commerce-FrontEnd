"use client"
import React from 'react'
import { productone } from '../productData'
import { producttwo } from '../productData'
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
    <div className='container mx-auto '>
<motion.div variants={DivVarints} initial="start" whileInView="end" transition={{
  duration:1,
  type:'spring',
  stiffness:130,
  damping:5
}} className='flex justify-center space-x-5 space-y-5 flex-col md:flex-row '>
{ 
productone.map((products)=>(


<a href="#" className="relative block rounded-tr-3xl border border-gray-100">
  <span
    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
  >
    Save {products.save}
  </span>

  <img
    src={products.img}
    alt=""
    className="h-80 w-full rounded-tr-3xl object-cover"
  />

  <div className="p-4 text-center">
    <strong className="text-xl font-medium text-gray-900"> {products.name} </strong>

    <p className="mt-2 text-pretty text-gray-700">
      {products.des}
    </p>

    <span
      className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
    >
      Learn More
    </span>
  </div>
</a>
))}

</motion.div>
<motion.div variants={DivVarints} initial="start" whileInView="end"
 transition={{
  duration:1,
  type:'spring',
  stiffness:130,
  damping:5
}}

className='flex justify-center space-x-5 space-y-5 flex-col md:flex-row'>
{ 
producttwo.map((product)=>(


<a href="#" className="relative block rounded-tr-3xl border border-gray-100">
  <span
    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
  >
     Save {product.save}
  </span>

  <img
    src={product.img}
    alt="products"
    className="h-80 w-full rounded-tr-3xl object-cover"
  />

  <div className="p-4 text-center">
    <strong className="text-xl font-medium text-gray-900"> {product.name} </strong>

    <p className="mt-2 text-pretty text-gray-700">
      {product.desc}
    </p>

    <span
      className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
    >
      Learn More
    </span>
  </div>
</a>
))}

</motion.div>


    </div>
  )
}

export default Products
