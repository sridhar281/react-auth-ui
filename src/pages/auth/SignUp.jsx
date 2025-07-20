import React,{useState} from 'react';
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link,useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import {validateEmail} from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";

   const SignUp = () => {
    const [profilePic,setProfilePic] =useState(null);
    const[fullName,setFullName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const[error,setError]=useState();
    //handle sign Up form submit 
    const handleSignup = async(e)=>{

    }
     return (
       <div>
          <AuthLayout>
            <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col  justify-center'>
              <h3 className='text-xl font-semibold text-black'>Create an Account!</h3>
              <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                Join us today by entering your details below.
              </p>
              <form onSubmit={handleSignup}>

                <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <Input 
                  value={fullName}
                  onChange={({target})=> setFullName(target.value)}
                  label="FullName"
                  placeholder="Virat Kohli"
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline:none focus:ring-2 focus:ring-primary "/>

                  <Input 
                  value={email}
                  onChange={({target}) =>setEmail(target.value)}
                  label='Email Address'
                  placeholder='ex: virat@gmail.com'
                  type='text'
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline:none focus:ring-2 focus:ring-primary "/>

                  <div className='col-span'>
                  <Input value={password}
                  onChange={({target}) =>setPassword(target.value)}
                  label='Password'
                  placeholder=''
                  type='password'
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline:none focus:ring-2 focus:ring-primary "/>
                </div>
                </div>

                 {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                
                        <button
                       type="submit"
                       className="btn-primary"
                      >
                      SignUp
                      </button>
                
                     <p className='text-[13px] text-slate-800 mt-3'>
                      Already have an accout?{" "}
                      <Link className='font-medium text-primary underline ' to="/login" >
                      Login
                      </Link>
                     </p>
              </form>
            </div>
          </AuthLayout>
       </div>
     )
   }
   
   export default SignUp
   