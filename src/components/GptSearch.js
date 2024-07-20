import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='background_img -z-10'>
        <img src={BG_URL} alt='background' className='absolute'/>
        
      </div>
      <div className='absolute pt-[8%] flex justify-center'>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
      
    </div>
  )
}

export default GptSearch
