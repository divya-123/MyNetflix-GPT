import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  let nameRef = useRef(null);
  let emailRef = useRef(null);
  let passwordRef = useRef(null);

  const handlebuttonClick = (event) =>{
    //event.preventDefault();
    console.log(emailRef, passwordRef,nameRef);
    //Validate the form data
    const message = checkValidData(emailRef.current.value, passwordRef.current.value, nameRef.current);

    console.log('result', message);    
    setErrorMessage(message);

    if (errorMessage) return;

    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("Created user...", user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });

    } else{
      //sign in logic
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate("/browse");
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
      });

    }

  }
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header />
        <div className='background_img'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/af676bd6-ca61-4cb3-ad8a-bd817d320741/US-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='background' className='absolute'/>
        </div>
        <form onSubmit= {e=>e.preventDefault()}className='absolute p-12 bg-black/75 w-3/12 my-24 mx-auto left-0 right-0 text-white rounded-lg'>
          <h1 className='font-bold text-3xl p-2 m-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-700' ref={nameRef}/>}
          <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' ref={emailRef}/>
          <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' ref={passwordRef}/>
          {errorMessage && <p className='text-red-500 font-bold text-lg py-2'>!{errorMessage}</p>}
          <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handlebuttonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already a user? Sign In Now."}</p>
        </form>
    </div>
  )
}

export default Login
