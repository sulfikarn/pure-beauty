import ShopIcon from '../assets/image/shop.png'
import LoginIcon from '../assets/image/login_icon.png'
import MainLogo from '../assets/image/logo.png'

function Header() {
  const handleLogin = () => {
    
  }
  return (
    <>
        <div className='bg-[#FDF2DB] p-4 grid grid-cols-3  justify-between items-center'>
                <div className='flex'>
                    <div className='pt-1'><img src={ShopIcon}/></div>
                    <div className='pl-2'>shop</div>
                </div>
                <div className='my-0 mx-[auto]'><img src={MainLogo}/></div>
                <div className='flex justify-end' onClick={handleLogin}>
                    <div className='pr-2'>Login</div> 
                    <div className='pt-1'><img src={LoginIcon}/></div>
                </div>
             
            </div>
          
    </>
  )
}

export default Header