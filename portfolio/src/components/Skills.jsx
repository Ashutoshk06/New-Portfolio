import React from 'react'

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import Reveal from './Reveal';

const skills = [
    {
        category: "Frontend",
        technology: [
            { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
            { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
            { name: 'TAILWIND', icon: <RiTailwindCssFill className="text-blue-400" /> },
            { name: 'JAVASCRIPT', icon: <FaJs className=" text-yellow-500" /> },
            { name: ' REACT', icon: <FaReact className="text-blue-500" /> },
        ],
    },
    {
        category: 'Fullstack',
        technology: [
            { name: 'NODE JS', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Mongo DB', icon: <DiMongodb className="text-green-600" /> },
            { name: 'React', icon: <FaReact className="text-blue-500" /> },
            { name: 'Github', icon: <FaGithub className="text-white" /> },
        ],
    }
]

const Skills = () => {
    return (
        <div className="flex  flex-col justify-center items-center px-4 text-gray-200 pb-8 md:py-12" id="skills">

            <Reveal>

            <h2 className="text-3xl font-bold mb-4 text-center">
                Skills
            </h2>
            <p className=" text-center mb-8">I worked on various frontend and fullstack projects.check them<a href="#" className="underline ml-1">there</a></p>

            <div className ="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 max -w-[1000px] mx-auto">

               {skills.map((skill,index) =>(

                <div key ={index} className = "border border-blue-900 p-6 rounded-lg bg-blue-900/20 shadow-lg w-full md:w-1/2">
                    <h3 className = "text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className = "grid grid-cols-2 gap-4">
                        {skill.technology.map((tech,index) =>(
                            <div key ={index} className = "flex items-center space-x-2">
                               <span className ="text-2xl">{tech.icon}</span>
                               <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>

                </div>
               ))}

            </div>
            </Reveal>
                



        </div>
    )
}

export default Skills