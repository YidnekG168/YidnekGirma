import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { Link } from 'react-scroll'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 text-white'>
        {/* <img src= {HeroImage} alt='mypic' /> */}
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className=' text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Developer
                </h2>
                <p className=' py-4 max-w-md text-gray-500'>
                    I've 4 years of exprience as a Network Technicain and desgining sofware.
                </p>
                <div>
                    <Link to='portfolio'  smooth duration={500}
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className=' group-hover:rotate-90 duration-200'>
                            <MdOutlineKeyboardArrowRight size={30} className=' ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src= {HeroImage} alt='my profile' className=' rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home