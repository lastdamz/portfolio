import React from 'react';
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

const Technologies = () => {
  return (
    <div>
      <h2 className='my-20 text-center text-4xl'>Technologies & <span className='text-neutral-500'>Tools</span></h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiAdobephotoshop className='text-6xl text-cyan-600'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiAdobeillustrator className='text-6xl text-orange-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiAdobexd className='text-6xl text-purple-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiFramer  className='text-6xl text-purple-100'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaReact className='text-6xl text-cyan-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaFigma className='text-6xl text-purple-100'/>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
