import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Ali | CV</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Ali Siddique</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/alihsiddique/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/AliSiddique'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Application Development <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Development
            <span className='px-2'>|</span> Back-End Development
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Django
            <span className='px-2'>|</span>Pandas
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Matplotlib
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>City Univeristy of London</span>
            <span className='px-2'>|</span> BSc Computer Science
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Personal Projects
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Online Magazine
            </span>
            <span className='px-2'>|</span>Django
          </p>
          <p className='py-1 italic'>Developed full application</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Implemented multiple subscription payments using Stripe API
            </li>
            <li>
              Built an authentication System using Django.
            </li>
            <li>
              Utilised Amazon S3 and RDS
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
             AI code generator Saas
            </span>
            <span className='px-2'>|</span>Django
          </p>
          <p className='py-1 italic'>Developed full application</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Using the openAI API I have built an AI code generator. This application 
              uses a prompt from the user e.g "Generate a function that returns the first 5 fibonacci number"
              the application will then call the API and display the output.
            </li>
            <li>
              Utilised stripe subscription for payments 
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>The Heathland School</span>
            <span className='px-2'>|</span>London
          </p>
          <p className='py-1 italic'>A-Levels</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
             A Level Psychology - A
            </li>
            <li>
            A Level Chemistry - B
            </li>
            <li>
            A Level Biology - B
            </li>
            <li>
             EPQ  - B
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
