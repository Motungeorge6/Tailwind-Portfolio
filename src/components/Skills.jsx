import React from 'react'
import Html from '../assets/html.png'
import CSS from'../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/reacts.png'
import Netlify from '../assets/netlify.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/taiwind.png'
import Vue from '../assets/vue.png'
import Node from '../assets/node.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] sm:pt-[300px] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 py-1'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="Html icon" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20  mx-auto' src={CSS} alt="Css icon" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20  mx-auto' src={JavaScript} alt="Javascript icon" />
                    <p>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p>REACT</p>
                </div>
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Netlify} alt="Netlify icon" />
                    <p>NETLIFY</p>
                </div> */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                    <p>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Vue} alt="Vue icon" />
                    <p>VUE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p>NODE</p>
                </div>
                
            </div>

        </div>
        
    </div>
  )
}

export default Skills