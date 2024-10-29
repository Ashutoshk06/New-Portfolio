import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { SiGeeksforgeeks,SiLeetcode } from "react-icons/si";
import {AiOutlineLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Ashutosh Kumar</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="#"><FaGithubSquare /></a>
                <a href="#"><SiLeetcode /></a>
                <a href="#"><SiGeeksforgeeks /></a>
                <a href="#"><AiOutlineLinkedin /></a>
               
            </div>

        </div>

        
        
    </div>
  )
}

export default Footer