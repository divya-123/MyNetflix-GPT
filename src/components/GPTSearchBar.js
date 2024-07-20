import React, { useContext } from 'react'
import lang from '../utils/languageConstants'
import {useSelector} from 'react-redux';

const GPTSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang);
  console.log(lang[langKey].gptSearchPlaceholder);
  return (
    <div className='pt-[8%] flex justify-center '>
      <form className='bg-black grid grid-cols-12'>
        <input className='p-4 m-4 col-span-9' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
