import InstaIcon from '../assets/image/insta_icon.png'
import FbIcon from '../assets/image/fb_icon.png'
import Logo from '../assets/image/logo.svg'

function Footer() {
  return (
    <div className='w-full h-48 flex justify-between md:justify-normal bg-[#842A3A] '>
                <div className='w-1/2 flex flex-col justify-center pl-6'>
                    <div>
                        <img src={Logo} className='max-w-[50%] md:max-w-[100%]'/>
                        <p className='pt-8 text-[#FDF2DB] text-[10px] md:text-sm '>© 2022 PURE BEAUTY. <span className='text-white'>POWERED BY</span></p>
                    </div>
                </div>
                <div className='w-1/2  grid grid-cols-2 items-center'>
                    <div className='flex flex-col pb-[0.8rem]'>
                        <p className='text-[#FDF2DB] text-xs md:text-sm'>ADDRESS</p>
                        <p className='text-[#FDF2DB] text-[10px] md:text-sm'>13 Brinkley Circuit Palmerston</p>
                    </div>

                    <div className='flex flex-col content-around '>
                        <p className='text-[#FDF2DB] text-xs md:text-sm'>SOCIAL MEDIA</p>
                        <div className='flex'>
                        <span>
                            <img src={InstaIcon}/>
                        </span>
                        <span>
                            <img src={FbIcon}/>
                        </span>
                        </div>
                        <div className='relative min-w-[200px]'>
                            <p className='text-[#FDF2DB] absolute top-[10px] text-[10px] md:text-sm'>ALL RIGHTS RESERVED.</p>
                        </div>
                            
                    </div>
                </div>
            </div>
  )
}

export default Footer