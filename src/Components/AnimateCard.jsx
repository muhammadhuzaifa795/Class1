import { Button } from "@headlessui/react";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const AnimateCard = () => {
    const [flipped, setFlipped] = useState('');

    const handleFlip = (card) => {
        setFlipped(card)
    }
  return (
    <div id="card" className="mt-16 bg-blue-50 pb-16 pt-4">
      {/* <hr /> */}
      <h1
        className="my-14 text-center text-blue-900 font-bold "
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        Product Cards
      </h1>

      <div className="grid grid-cols-3 gap-x-6 mx-40 h-[20rem]">
        <ReactCardFlip isFlipped={flipped == 'one'} flipDirection="horizontal">
          <div
            className="border border-primary p-6 col-span-1 rounded-lg space-y-3 flex h-[20rem] items-center relative front"
            style={{
              backgroundImage: 'url("./image/bg1.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={()=> handleFlip('one')}
          >
            <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
            <h1 className="text-4xl text-white font-bold z-10">
              Soul Whispers{" "}
            </h1>
          </div>
          <div
            className="border border-primary p-6 col-span-1 rounded-lg space-y-3 flex h-[20rem] text-center items-center justify-center relative back"
            style={{
              backgroundImage: 'url("./image/bg1.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseLeave={()=> handleFlip('')}
          >
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
            
            <p className="text- text-white font-bold z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut ullam temporibus, maiores et illum nisi, assumenda veritatis quam laboriosam in odio iusto aut blanditiis tempore vero eaque repellendus. Ducimus!</p>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flipped == 'two'} flipDirection="horizontal">
          <div
            className="border border-primary p-6 col-span-1 rounded-lg space-y-3 flex h-[20rem] items-center relative front"
            style={{
              backgroundImage: 'url("./image/bg3.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={()=> handleFlip('two')}
          >
            <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
            <h1 className="text-4xl text-white font-bold z-10 text-center">
              i School for me{" "}
            </h1>
          </div>
          <div
            className="border border-primary p-6 col-span-1 rounded-lg space-y-3 flex h-[20rem] text-center items-center justify-center relative back"
            style={{
              backgroundImage: 'url("./image/bg3.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseLeave={()=> handleFlip('')}
          >
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
            
            <p className="text- text-white font-bold z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut ullam temporibus, maiores et illum nisi, assumenda veritatis quam laboriosam in odio iusto aut blanditiis tempore vero eaque repellendus. Ducimus!</p>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flipped == 'three'} flipDirection="horizontal">
          <div
            className="border border-primary p-6 col-span-1 rounded-lg space-y-3 flex h-[20rem] items-center justify-center relative front"
            style={{
              backgroundImage: 'url("./image/bg6.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={()=> handleFlip('three')}
          >
            <div className="absolute inset-0 bg-black opacity-30 z-0 "></div>
            <h1 className="text-4xl text-white font-bold z-10 text-center">
              Easy fee
            </h1>
          </div>
          <div
            className="border border-primary p-6 col-span-1 rounded-lg space-y-3 flex h-[20rem] text-center items-center justify-center relative back"
            style={{
              backgroundImage: 'url("./image/bg6.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseLeave={()=> handleFlip('')}
          >
            <div className="absolute inset-0 bg-black opacity-80 z-0 justify-center"></div>
            
            <p className="text- text-white font-bold z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut ullam temporibus, maiores et illum nisi, assumenda veritatis quam laboriosam in odio iusto aut blanditiis tempore vero eaque repellendus. Ducimus!</p>
          </div>
        </ReactCardFlip>
       
        

        
  



      </div>
    </div>
  );
};

export default AnimateCard;
