import { useForm } from "react-hook-form";
import LoginBg from '../assets/image/loginBg.png'
import Logo from '../assets/image/logo.svg'

export interface LoginProps  {
    handleLoginSubmit: (event: React.MouseEvent<HTMLElement>) => void
  };

  interface IFormInput {
    username: string;
    password: string;
}

export default function Login({handleLoginSubmit}:LoginProps) {

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormInput>();

  
    // const onSubmit = (data) => console.log(data);
    
    const onSubmit = (data:any) => {
        handleLoginSubmit(data)
    }
  return (
    <>
    <div className='bg-[#842A3A] flex sm:flex-col items-center lg:items-start lg:flex-row flex-col h-screen'>
        <div className='lg:w-1/5 md:w-full sm:w-1/5 md:pl-10 md:pt-10 pt-8'>
            <div className='pb-8'>
                <img src={Logo}/>
            </div>
            <p className='text-xl text-[#FDF2DB] sm:pt-6 sm-pb6  lg:pb-8 lg:pt-8' >Login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-5'>
                    <input 
                        
                        {...register("username", {
                        required: true,
                        })}
                        type="text"
                        placeholder='user name'
                        className='lg:w-[100%] text-[#FDF2DB] md:w-[50%] bg-transparent border-t-0 border-b-[1px] border-r-0 border-l-0 focus:outline-none'
                    />
                    {errors?.username?.type === "required" && <p className="text-[red]">This field is required</p>}
                   
                </div>
                <div>
                    <input 
                        {...register("password", {
                        required: true
                        })}

                        type="password"
                        placeholder='password'
                        className='lg:w-[100%] text-[#FDF2DB] md:w-[50%] border-[#FDF2DB] bg-transparent border-t-0 border-b-[1px] border-r-0 border-l-0 focus:outline-none'
                    />
                    {errors?.password?.type === "required" && <p className="text-[red]">This field is required</p>}
                </div>
                <button className="rounded-full border-[#FDF2DB] border-[2px] border-solid px-10 py-2 mt-10 lg:w-full md:w-[50%] text-[#FDF2DB] text-lg" >Login</button>
                    

            </form>
        </div>
        <div className='lg:w-4/5 sm:w-full lg:pl-0 pl-5'>
            <div >
                <img src={LoginBg} width="932" height="800" className="w-[100%] sm:h-[50vh] lg:h-screen pt-8 pb-8 sm:pl-0 lg:pl-8"/>
            </div>
            
        </div>
    </div>
    
    </>
    

  )
}
