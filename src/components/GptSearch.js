import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/af676bd6-ca61-4cb3-ad8a-bd817d320741/US-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='background' className='absolute'/>
      </div>
      
      <GPTSearchBar />
      <GPTMovieSuggestions />
      
    </div>
  )
}

export default GptSearch
