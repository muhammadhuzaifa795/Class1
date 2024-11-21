import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    
    <div className="mx-20 mt-24 " id='portfolio'>
      {/* <div><hr /></div> */}
        <h1  className='my-14 text-center text-blue-900  font-bold mt-40' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Portfolio </h1>

      <Carousel className="w-full ">
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              
              <img src="/image/abcdefghijk.jpg" className="h-[600px]" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              
              <img src="/image/abcde.jpg"  className="h-[600px]" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              
              <img src="/image/abcdefghi.jpg"  className="h-[600px]" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              
              <img src="/image/abcdefg.jpg"  className="h-[600px]" alt="" />
            </div>
          </CarouselItem>
          
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
