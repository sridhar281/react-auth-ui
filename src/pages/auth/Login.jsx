import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link,useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import {validateEmail} from "../../utils/helper"
const Login = () => {
  const [email,setEmail] =useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(null);

  const navigate =useNavigate();
  //handle login 
  const handleLogin =async(e)=>{
  e.preventDefault();
  if(!validateEmail(email)){
    setError("Please enter a valid email address.");
    return;
  }
  if(!password){
    setError("please enter the password");
    return;
  }
  setError("");
  alert("login attempeted with email:"+email);
  //Login API call
}
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
      <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
      <p className='text-xs test-slate-700 mt-[5px] mb-6'>
        Please enter your details to log in
      </p>
      <form onSubmit={handleLogin}>
        <Input value={email}
        onChange={({target}) =>setEmail(target.value)}
        label='Email Address'
        placeholder='ex: virat@gmail.com'
        type='text'
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline:none focus:ring-2 focus:ring-primary "/>
         <Input value={password}
        onChange={({target}) =>setPassword(target.value)}
        label='Password'
        placeholder=''
        type='password'
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline:none focus:ring-2 focus:ring-primary "/>
        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

        <button
       type="submit"
       className="mt-6 bg-primary text-white px-4 py-2 rounded-md hover:bg-violet-700"
      >
      Login
      </button>

     <p className='text-[13px] text-slate-800 mt-3'>
      Dont have an accout?{" "}
      <Link className='font-medium text-violet underline ' to="/signup" >
      SignUp
      </Link>
     </p>
      </form>
      </div>
    </AuthLayout>
  )
}

export default Login
