import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInFrom=()=>{
    setIsSignInForm(!isSignInForm);

  };
  return (
    <div>
<Header></Header>
<img
className='absolute'
src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_medium.jpg"
      alt="baground"/>
      <div>
        <form className='text-center  text-white w-3/12 absolute p-2 bg-black my-36 mx-auto left-0 right-0 rounded-2xl bg-opacity-80'>
        <h1 className='text-3xl py-4 fount-bold'>{isSignInForm ? "sign In" : "sign up"}</h1>
       {!isSignInForm && <input
        type="text" placeholder='name' className='m-4 p-4 w-9/12 bg-gray-600'/>}
          <input 
          type="text" placeholder='emailadress' className='m-4 p-4 w-9/12 bg-gray-600'/>
          <input
           type="password" placeholder='passward' className='m-4 p-4 w-9/12 bg-gray-600'/>  
        <button 
        className='justify-self-center   m-4 py-4 bg-red-900 rounded-lg w-9/12'>{isSignInForm ? "sign In" : "sign up"}</button>
        <p className='m-2 py-4 underline cursor-pointer ' onClick={toggleSignInFrom}> 
          {isSignInForm ? "now you to netflix? signup now" : "Already regesterd sign in now"}
          </p>

        </form>
      </div>
    </div>
   
  );
}

export default Login
