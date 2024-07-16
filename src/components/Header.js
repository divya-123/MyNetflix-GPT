import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const user = useSelector(store=>store.user);
  console.log("user", user);

 
  
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate("/Browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return ()=> unsubscribe();
  },[]);

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView());
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40' src={LOGO} alt='logo' />
      {user && <div className='flex p-2'>
        <button className='py-2 px-4 my-2 mx-4 bg-purple-500 text-white rounded-lg' onClick={handleGptSearchClick}>GPT Search</button>
        <img alt="username"
             className='w-12 h-12'
             src={user?.photoURL}
             />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header
