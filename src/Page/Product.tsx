import React from 'react'
import Dcdec2 from '../assets/image/dcdec2.png'
import Dcdec3 from '../assets/image/dcdec3.png'
import Dcdec4 from '../assets/image/dcdec4.png'
import Dcdec5 from '../assets/image/dcdec5.png'
import Dcdec7 from '../assets/image/dcdec7.png'
import Dcdec8 from '../assets/image/dcdec8.png'
import Dcdec9 from '../assets/image/dcdec9.png'
import Dcdec10 from '../assets/image/dcdec10.png'


function Product() {
  return (
    <div className='w-full'>
      <div className='bg-[#842A3A] p-6 rounded-bl-lg rounded-br-lg mb-[3px]'>
        <p className='text-[#FDF2DB] text-3xl'>Shop</p>
    </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <div className='relative'>
          <div>
            <img src={Dcdec2} />
          </div>
          <div className='absolute bottom-5 left-5'>
              <p className='text-[#842A3A] text-xs font-light not-italic'>MIST</p>
              <p className='text-[#842A3A] text-lg font-medium not-italic'>Hydrating Mist</p>
              <small className='text-[#842A3A] text-base font-medium not-italic'>$28</small>
          </div>
        </div>
        
        <div className='relative'>
          <div >
            <img src={Dcdec3} />
          </div>
          <div className='absolute bottom-5 left-5'>
              <p className='text-[#842A3A] text-xs font-light not-italic'>MIST</p>
              <p className='text-[#842A3A] text-lg font-medium not-italic'>Hydrating Mist</p>
              <small className='text-[#842A3A] text-base font-medium not-italic'>$28</small>
          </div>
        </div>

        <div className='relative'>
          <div >
            <img src={Dcdec4} />
          </div>
          <div className='absolute bottom-5 left-5'>
              <p className='text-[#842A3A] text-xs font-light not-italic'>MIST</p>
              <p className='text-[#842A3A] text-lg font-medium not-italic'>Hydrating Mist</p>
              <small className='text-[#842A3A] text-base font-medium not-italic'>$28</small>
          </div>
        </div>

        <div className='relative'>
          <div >
            <img src={Dcdec5} />
          </div>
          <div className='absolute bottom-5 left-5'>
              <p className='text-[#842A3A] text-xs font-light not-italic'>MIST</p>
              <p className='text-[#842A3A] text-lg font-medium not-italic'>Hydrating Mist</p>
              <small className='text-[#842A3A] text-base font-medium not-italic'>$28</small>
          </div>
        </div>

      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <div className='relative'>
          <div>
            <img src={Dcdec7} />
          </div>
          <div className='absolute bottom-5 left-5'>
              <p className='text-[#842A3A] text-xs font-light not-italic'>MIST</p>
              <p className='text-[#842A3A] text-lg font-medium not-italic'>Hydrating Mist</p>
              <small className='text-[#842A3A] text-base font-medium not-italic'>$28</small>
          </div>
        </div>
        
        <div className='relative'>
          <div>
            <img src={Dcdec8} />
          </div>
          <div className='absolute bottom-5 left-5'>
              <p className='text-[#842A3A] text-xs font-light not-italic'>MIST</p>
              <p className='text-[#842A3A] text-lg font-medium not-italic'>Hydrating Mist</p>
              <small className='text-[#842A3A] text-base font-medium not-italic'>$28</small>
          </div>
        </div>

        <div className='relative'>
          <div>
            <img src={Dcdec9} />
          </div>
          <div className='absolute bottom-5 left-5'>
              <p className='text-[#842A3A] text-xs font-light not-italic'>MIST</p>
              <p className='text-[#842A3A] text-lg font-medium not-italic'>Hydrating Mist</p>
              <small className='text-[#842A3A] text-base font-medium not-italic'>$28</small>
          </div>
        </div>

        <div className='relative'>
          <div>
            <img src={Dcdec10} />
          </div>
          <div className='absolute bottom-5 left-5'>
              <p className='text-[#842A3A] text-xs font-light not-italic'>MIST</p>
              <p className='text-[#842A3A] text-lg font-medium not-italic'>Hydrating Mist</p>
              <small className='text-[#842A3A] text-base font-medium not-italic'>$28</small>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product