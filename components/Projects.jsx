import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.png';
import cryptoImg from '../public/assets/projects/crypto.png'
import netflixImg from '../public/assets/projects/netflix.png'
import twitchImg from '../public/assets/projects/twitch.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Online magazine'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='Django'
          />
          <ProjectItem
            title='Frontend assesment'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Ai Code generator'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='Django'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Sci-kit learn'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
