import React, { useContext, useState } from 'react'
import {handleChange} from '../../Hooks/useHandleChange'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth'
import {auth} from '../../firebase/firebaseConfig'
import toast from 'react-hot-toast'
import { AuthContext } from '../../Context/AuthContext'






const SignIn = () => {


  const {user} = useContext(AuthContext)
  



  const [credentials, setCredentials] = useState({
      email:"",
      password:""
  })

  console.log(credentials);

  const navigate = useNavigate()
 

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email, password} = credentials


    try {
      const creds = await toast.promise(
        new Promise(async (resolve, reject) => {
          try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("DONEE");
            resolve(userCredential);
          } catch (error) {
            reject(error);
          }
        }),
        {
         loading:()=> "Signing you in...",
          success: (creds) => {navigate("/"); return `Success: Welcome ${creds.user.email}`},
          error: (error) => `Oops error! 🤯 ${error.message}`,
        }
      );
    } catch (error) {
      // Handle any additional errors here
      console.error(error);
    }
    

  }
  const handleReset = async()=>{

    if(credentials.email ===""){
      toast.error(`Please enter your email address before clicking FORGOT PASSWORD`)
      return
    }
  
      toast.promise(
        new Promise(async(resolve,reject)=>{
          try {
            const response = await  sendPasswordResetEmail(auth, "akejunifemi11@gmail.com",)
          resolve(response)
          } catch (error) {
            resolve(error)
          }
        }),
        {
          loading:()=> "Sending you a password reset link...",
          success: (response) => `Success: Password reset instructions have been sent to  ${response.user.email}`,
          error: (error) =>{console.log(error);return `Oops error! 🤯 ${error.message}`},
         
        }
      )
    
  }




return (
  user ? <Navigate to={"/"} replace={true} />:
  <>
    <div className='flex h-screen w-full'>
      <div className='h-screen hidden lg:flex flex-col items-center justify-center  lg:w-2/5 bg-gradient-to-r from-[#8498CB] via-[#8E89A4] to-[#9E7167]'>

        {/* <img src={svg} width={"350px"} alt="" /> */}

        <h1 className='font-extrabold text-6xl text-white'>LOGIN</h1>

      </div>
      <div className='lg:w-3/5 h-screen w-full lg:py-10'>

        <div className='lg:px-[30%]  flex items-start px-10 flex-col gap-5 py-10'>
          {/* <Link to={"/signup"}>
          <div className='absolute left-[10%] top-[10%] lg:hidden'>
            <img src={arrowmobile} width={"30px"} alt="arrow" />
          </div></Link> */}
          <h1 className='font-bold text-3xl'>
            Learnverse
          </h1>
          <p className='text-black  font-bold text-xl'>
            Admin Login
          </p>
        </div>
       {/*  <div className='lg:hidden px-10 flex items-center flex-col '>
          <img src={svg}  className='w-[150px]' alt="mobile__svg" />
        </div> */}

        <form className='lg:px-[30%] px-10 lg:py-16 flex flex-col gap-10 py-10  lg:gap-[1.6rem]' onSubmit={handleSubmit}>
          <div className=' relative'>

            <label htmlFor="username" className='bg-white text-[#343434B2] absolute text-sm top-[-10px] left-[20px]'>Email</label>

            <input placeholder='Example@gmail.com' type="email" className='w-full border-2 border-[#67949E] py-4 px-5 rounded-full ' name='email' onChange={(e)=>handleChange(e, credentials, setCredentials)} />


          </div>
          <div className=' relative'>

            <label htmlFor="username" className='text-[#343434B2] bg-white absolute text-sm top-[-10px] left-[20px]'>Password</label>

            <input placeholder='Enter password' type="password" className='w-full border-2 border-[#67949E] py-4 px-5 rounded-full' name='password' onChange={(e)=>handleChange(e, credentials, setCredentials)} />


          </div>

          <div className='flex w-full justify-center'>
          <button
            
            className="flex w-full justify-center rounded-full bg-gradient-to-r from-[#8498CB] via-[#8E89A4] to-[#9E7167]  px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign In
          </button>
          </div>

          <div className='flex justify-start absolute bottom-7  lg:static' onClick={handleReset}>
            <p className='text-[#EA4335]'>
              Forgot password?
            </p>
          </div>

         {/*  <div className='flex w-full'>
            <span className='flex w-full justify-between'>
              <p>
                Remember me
              </p>


              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

              </label>



            </span>

          </div> */}


         {/*  <p className='text-center text-xs'>
            By connecting your account confirm that you agree with our <span className='font-bold'>Term and Condition</span>
          </p> */}

        </form>



      </div>
    </div>
  </>
)
}

const Auth = ()=>{
  return <SignIn />
}

export default Auth