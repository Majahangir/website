import React from 'react'
import Laptop from '../assests/laptop.jpeg'

const Analytics =()=>{
    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[400px] mx-auto my-4' src={Laptop} alt="/"/>
                <div className='flex flex-col justify-center'>


          
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Data analytics is the process of storing,
             organizing, and analyzing raw data to answer questions
             or gain important insights. Data analytics is integral to
             business because it allows leadership to create evidence-based
             strategy, understand customers to better target marketing 
             initiatives, and increase overall productivity.</p>
             <button className='bg-black text-[#00df52]  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started </button>

             
              </div>
              </div>
        </div>

    )
}

export default Analytics