import { useState } from 'react';
// import { Routes, Route } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Layout/Login';
import Main from './Layout/Main';

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const handleLogin = () =>{

  }

  const handleSubmit = (data:any) => {
    if(data.username=='wpcustomer'  && data.password=='l!rDymqRgR1aG)MxC^XF%v9$')
    {
      setIsLogin(false)
      toast.success('Login Successful')
    } else {
      toast.error('Username or Password is invalid')
    }
  }
  return (
    <>
    <ToastContainer closeButton={false} position="top-right" />

      {
        isLogin? <Login handleLoginSubmit={handleSubmit} /> : <Main/>
        
      }
      
    
    </>
    
     
  );
}

export default App;
