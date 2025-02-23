import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Course() {
  return (  
   <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you{" "}
                <span className='text-pink-500'>Here! :)</span>
            </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis ratione consequuntur doloribus assumenda reprehenderit, perspiciatis neque sint facilis fugit labore rem molestias aliquam cum dicta minima tempora? Maiores assumenda commodi, asperiores distinctio minima ut odit, sequi magni, adipisci quis laborum perspiciatis quo exercitationem fuga a voluptates iusto quidem eveniet?
            </p>
            <Link to='/'>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-6'>back</button>
            </Link>
            
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-2'>
            {
                list.map((item) =>{
                  return  <Cards key={item.id} item={item}/>
                })
            }
        </div>
      </div>
    </>
  )
}

export default Course
