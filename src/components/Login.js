import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header />
        <div className='background_img'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/af676bd6-ca61-4cb3-ad8a-bd817d320741/US-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='background' className='absolute'/>
        </div>
        <form className='absolute p-12 bg-black/75 w-3/12 my-24 mx-auto left-0 right-0 text-white rounded-lg'>
          <h1 className='font-bold text-3xl p-2 m-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-700' />}
          <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
          <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
          <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already a user? Sign In Now."}</p>
        </form>
    </div>
  )
}

export default Login
