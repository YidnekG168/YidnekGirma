import React from 'react'

const About = () => {
  return (
    <div name = 'about' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-500 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About</p>
            </div>
            
            <p className='text-xl mt-20'>
                After my graudtuation in Computer science, i've worked in one of Telecommunicaton company. I had exprience for more than 3 years as Network technician and Customer Service in Telecommunication.
            </p>
            <br/>
            <p className='text-yt md-20'> For more detial you can check my resume.</p>
        </div>
    </div>
  )
}

export default About