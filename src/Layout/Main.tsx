import { Routes, Route } from "react-router-dom"
import Home from '../Page/Home'
import Footer from './Footer'
import Header from './Header'
import Product from "../Page/Product"
import Blog from "../Page/Blog"

function Main() {
  return (
    <div className='bg-[#FDF2DB] sm:w-full'>
            <Header/>
            
            <div className='w-full min-h-full bg-white mt-1 relative'>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/blog" element={<Blog/> } />
                    <Route path="/product" element={ <Product/> } />
                </Routes>
            

            <Footer/>
           
        </div>
        </div>
  )
}

export default Main