import React from 'react'
import Productstock1 from '../assets/image/shutterstock1.png'
import Productstock2 from '../assets/image/shutterstock2.png'
import Productstock3 from '../assets/image/shutterstock3.png'
import Productstock4 from '../assets/image/shutterstock4.png'
import Productstock5 from '../assets/image/shutterstock5.png'
import Productstock6 from '../assets/image/shutterstock6.png'
import Shutterstock from '../assets/image/shutterstock.png'

function Home() {
  return (
    <>
    <div className='bg-[#842A3A] p-6 rounded-bl-lg rounded-br-lg mb-[3px]'>
        <p className='text-[#FDF2DB] text-3xl'>Blogs</p>
    </div>
        <div className='flex'>
                <div className='w-1/2 flex'>
                    <div className='bg-[#842A3A] w-1/2 flex flex-col justify-end pb-8 pl-4 md:pl-6'>
                        <small className='pb-2 text-[#FDF2DB] sm:text-xs md:text-sm'>SKIN CARE</small>
                        <p className='text-white lg:text-4xl md:text-lg text-sm'>My daily skin care routine</p>
                    </div>
                    <div className='w-1/2'>
                        <img src={Productstock1}/>
                    </div>
                </div>
                <div className='w-1/2 flex'>
                    
                    <div className='bg-[#842A3A] w-1/2 flex flex-col justify-end pb-8 pl-4 md:pl-6'>
                        <small className='pb-2 text-[#FDF2DB] sm:text-xs md:text-sm'>PRODUCT</small>
                        <p className='text-white lg:text-4xl md:text-lg text-sm'>Cleansing:Oil vs Foaming</p>
                    </div>

                    <div className='w-1/2'>
                    <img src={Productstock2}/>
                    </div>
                </div>
            </div>
            <div className='flex'>
            <div className='w-1/2 flex'>
                    <div className='w-1/2'>
                        <img src={Productstock3}/>
                    </div>
                    
                    <div className='bg-[#842A3A] w-1/2 flex flex-col justify-end pb-8 pl-4 md:pl-6'>
                        <small className='pb-2 text-[#FDF2DB] sm:text-xs md:text-sm'>SKIN CARE</small>
                        <p className='text-white lg:text-4xl md:text-lg text-sm'>Post summer skin care tips</p>
                    </div>
                </div>

                <div className='w-1/2 flex'>
                    <div className='w-1/2'>
                        <img src={Productstock4}/>
                    </div>
                    
                    <div className='bg-[#842A3A] w-1/2 flex flex-col justify-end pb-8 pl-4 md:pl-6'>
                        <small className='pb-2 text-[#FDF2DB] sm:text-xs md:text-sm'>SKIN CARE</small>
                        <p className='text-white lg:text-4xl md:text-lg text-sm'>My daily skin care routine</p>
                    </div>
                </div>
                
            </div>
            <div className='flex'>
                <div className='w-1/2 flex'>
                    
                    <div className='bg-[#842A3A] w-1/2 flex flex-col justify-end pb-8 pl-4 md:pl-6'>
                        <small className='pb-2 text-[#FDF2DB] sm:text-xs md:text-sm'>PRODUCT</small>
                        <p className='text-white lg:text-4xl md:text-lg text-sm'>Cleansing:Oil vs Foaming</p>
                    </div>
                    <div className='w-1/2'>
                        <img src={Productstock5}/>
                    </div>
                </div>
                <div className='w-1/2 flex'>

                    <div className='bg-[#842A3A] w-1/2 flex flex-col justify-end pb-8 pl-4 md:pl-6'>
                        <small className='pb-2 text-[#FDF2DB] sm:text-xs md:text-sm'>PRODUCT</small>
                        <p className='text-white lg:text-4xl md:text-lg text-sm'>Post summer skin care tips</p>
                    </div>
                    
                    <div className='w-1/2'>
                    <img src={Productstock6}/>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img src={Shutterstock} />
            </div>
    </>
  )
}

export default Home