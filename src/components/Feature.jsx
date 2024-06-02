import React from 'react'
import scales from '../assets/scales.png'
import trial from '../assets/trial.png'
 import courtx from '../assets/courtx.png'
import judge from '../assets/supreme-court.png'
 import book from '../assets/lawbook.png'
import court from '../assets/court.png'

const Feature = () => {
  return (
    <section className=" text-white mt-16 mb-16 m-2" style={{backgroundColor:'#141414'}}>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-3xl">Law at Practice</h2>
  
        <p className="mt-4 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
          nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
        </p>
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="#"
        >
           <img className='w-14 '   src={scales}    alt="scale" />
  
          <h2 className="mt-4 text-xl font-bold text-white">Legal counseling
</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="#"
        >
         <img  className='w-14'   src={trial}  alt="pizza" />
  
    
          <h2 className="mt-4 text-xl font-bold text-white"> Business law</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="#"
        >
            <img className='w-14'     src={court} alt="courthouse" />
  
          <h2 className="mt-4 text-xl font-bold text-white">Civil ligitation</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="#"
        >
         <img className='w-14'     src={judge} alt="judge" />
  
          <h2 className="mt-4 text-xl font-bold text-white">Real Estate and Land</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="#"
        >
         <img className='w-14'     src= {courtx} alt="colorhandle" />
  
          <h2 className="mt-4 text-xl font-bold text-white">Insurance defence</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="#"
        >
          <img  className='w-14'   src= {book} alt="bok" />
  
          <h2 className="mt-4 text-xl font-bold text-white">Personal Injuries</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
      </div>
  
      
    </div>
  </section>
  )
}

export default Feature