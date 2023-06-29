import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import python from '../assets/python.png'

const Portfolio = () => {

    const Portfolios = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orang-500',
        },
        {
            id: 2,
            src: react,
            title:'React',
            style: 'shadow-blue-400',
        },
        {
            id: 3,
            src: css,
            title:'CSS',
            style:'shadow-blue-600',
        },
        {
            id: 4,
            src: github,
            title:'Github',
            style:'shadow-blue-500',
        },
        {
            id: 6,
            src: python,
            title:'python',
            style:'shadow-green-500',
        },
        {
        id: 7,
        src: javascript,
        title:'Javascript',
        style:'shadow-green-500', 
        }
         
    ]

  return (
    <div name = "portfolio" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-500 text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Portfolio</p>
                <p className=' py-6'> These are technologies that i've developed by selef learning.</p>

            </div>

            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px:0'>
            {
                
                Portfolios.map(({id, src, title,style}) => (

                    <div 
                    key={id}
                    className={'shadow-md hover:scale-105 durattion-500 py-2 rounded-lg, $(style)'}>
                    <img src={src} alt='' className='w-20 mx-auto rounded-md hover:scale-105'/>
                        <p className='mt-4'>{title}</p>
                        
                    
                </div>

                ))
            }
           </div>
        </div>
    </div>
  );
};

export default Portfolio