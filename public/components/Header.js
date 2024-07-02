import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../../src/utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../src/utils/userSlice';


const Header = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        );
      } else{
        dispatch(removeUser());
      }
    })
  },[]);

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-40' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
    </div>
  )
}

export default Header
