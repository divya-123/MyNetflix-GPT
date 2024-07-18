import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12'>
        <input className='p-4 m-4 col-span-9' type='text' placeholder='What would you like to watch?'/>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>Search</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
