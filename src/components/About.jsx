import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full pt-60 bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full flex sm:flex-col md:flex-row sm:space-y-6 space-x-6 px-4'>
                    <div className='sm:text-center text-4xl font-bold'>
                        <p className='text-left'>Hi. I'm Motunrayo nice to meet you</p>
                    </div>
                    <div className='w-4/5 text-center'>
                        <p>
                           I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating software 
                            for clients ranging from individuals and small businesses all the
                            way to large enterprise corporation. What would you do if you had
                            a software expert available at your fingertips?
                        </p>
                    </div>

                

            </div>

        </div>

    </div>
    
  )
}

export default About