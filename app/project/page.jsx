import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className=' container grid grid-cols-4 gap-2 lg:ml-20 lg:mt-10 md:ml-0' >
     
      <div className="row">
        <div className="col-6">
        
            <Image
            className='hover:rounded-xl hover:translate-y-3'
            width={400}
            height={400}
            src={'/p8.jpg'}
            ></Image>
           
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        <Image
        className='hover:rounded-xl hover:translate-y-3'
            src={'/p1.jpg'}
            width={400}
            height={400}
            ></Image>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        <Image
        className='hover:rounded-xl hover:translate-y-3'
        width={400}
        height={400}
        src={'/p2.jpg'}
            ></Image>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        <Image
        className='hover:rounded-xl hover:translate-y-3'
        width={400}
        height={400}
        src={'/p3.jpg'}
            ></Image>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        <Image
        width={400}
        className='hover:rounded-xl hover:translate-y-3'
        height={400}
        src={'/p4.jpg'}
            ></Image>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        <Image
        className='hover:rounded-xl hover:translate-y-3'
        width={400}
        height={400}
        src={'/p5.jpg'}
            ></Image>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        <Image
        className='hover:rounded-xl hover:translate-y-3'
        width={400}
        height={400}
        src={'/p6.jpg'}
            ></Image>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        <Image
        width={400}
        className='hover:rounded-xl hover:translate-y-3'
        height={400}
        src={'/p7.jpg'}
            ></Image>
        </div>
      </div>
    
    </div>
  )
}

export default page
