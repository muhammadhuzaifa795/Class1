import React from 'react'

import { Button } from "@/components/ui/button"

const Cards = () => {
  return (
    <div className='mt-16 bg-blue-50 pb-16 pt-4' id='Services' >
        {/* <hr /> */}
        <h1  className='my-14 text-center text-blue-900 font-bold ' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" >Services Cards</h1>
      <div className="grid grid-cols-3 gap-x-6 mx-40">
      <div className='border border-primary p-6 col-span-1 rounded-lg space-y-3'>
        <h1 className='text-4xl'>Swift</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ea aliquid recusandae. Ducimus possimus illum itaque, optio doloribus sapiente. Facere delectus ut nam dignissimos excepturi inventore debitis unde iure vero.</p>
        <Button className="hover:bg-blue-500 hover:text-black bg-blue-900">See More...</Button>
        </div>
        <div className='border border-primary p-6 col-span-1 rounded-lg space-y-3'>
        <h1 className='text-4xl'>Corolla</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ea aliquid recusandae. Ducimus possimus illum itaque, optio doloribus sapiente. Facere delectus ut nam dignissimos excepturi inventore debitis unde iure vero.</p>
        <Button className="hover:bg-blue-500 hover:text-black bg-blue-900">See More...</Button>
        </div>
        <div className='border border-primary p-6 col-span-1 rounded-lg space-y-3'>
        <h1 className='text-4xl'>M5 F90</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ea aliquid recusandae. Ducimus possimus illum itaque, optio doloribus sapiente. Facere delectus ut nam dignissimos excepturi inventore debitis unde iure vero.</p>
        <Button className="hover:bg-blue-500 hover:text-black bg-blue-900">See More...</Button>
        </div>
        

      </div>
    </div>
  )
}

export default Cards
