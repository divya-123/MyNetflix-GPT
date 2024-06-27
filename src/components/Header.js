import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      <div className='flex p-2'>
        <img alt="username"
             src="https://i.pinimg.com/564x/fb/8a/2c/fb8a2c153f6dc4cc0e18c4365046cab1.jpg"
             className='w-12 h-12'/>
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Header
