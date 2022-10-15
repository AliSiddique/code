import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tilt from 'react-parallax-tilt';

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <Tilt>

    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 transition-colors duration-400 rounded-xl group hover:bg-gradient-to-r from-[#0f49e8] to-[#709dff] duration-200'>
      <Image className='rounded-xl h-8 object-cover group-hover:opacity-10' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
 </Tilt>

  )
}

export default ProjectItem