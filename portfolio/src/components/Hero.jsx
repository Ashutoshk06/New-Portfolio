import React from 'react'
import {TypeAnimation} from "react-type-animation"
import ShinyEffect from './ShinyEffect'
import { AiOutlineGithub,AiOutlineLinkedin} from "react-icons/ai";
import { SiGeeksforgeeks,SiLeetcode } from "react-icons/si";
import { DiHtml5 ,DiCss3,DiJavascript,DiMongodb} from "react-icons/di";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { motion } from "framer-motion"



export const Hero = () => {
  return (
    <div 
    className= "mt-24 max-w-[1200px] mx-auto relative"
    >
        <div className = " grid md:grid-cols-2 place-items-center gap-8">

            <motion.div 
            initial = {{opacity : 0 , y : -50}}
            whileInView = {{opacity :1 , y : 0}}
            viewport={{once:true}}
            transition={{duration:1}}
            >
                <TypeAnimation 
                    sequence={["Frontend Developer",1000,"Backend Developer",1000,"Full Stack Developer"]}
                    speed ={50}
                    repeat = {Infinity}
                    className ="font-bold text-gray-400 text-xl md:text-5xl italic-mb-4"

                
                />
                 <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-blue-500">ASHUTOSH KUMAR</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a passionate fullstack developer from India.
                </motion.p>


                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-blue-400 rounded-xl"     
                    >
                        Download CV
                    </motion.button>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl  z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Ashutoshk06" className="text-white">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ashutoshkr042/" className="text-blue-600">


                            <AiOutlineLinkedin/>
                        </motion.a>
                       

                        
                    </div>
                </motion.div>

               
                
            </motion.div>

        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center w-full py-24"
        >
            {/* Section Heading */}
            <p className="text-gray-200 text-4xl mb-4">My Tech Stack</p>

            {/* Horizontal Blue Line with Scroll Animation and Glow Effect */}
            <motion.div
                className="h-1 w-60 bg-blue-500 mb-8"
                style={{ transformOrigin: "center" }} // Expands from the center
                initial={{ scaleX: 0 }} // Start hidden (collapsed horizontally)
                whileInView={{
                    scaleX: [0, 1, 1.05, 1], // Scale to full, then slightly pulse
                    boxShadow: [
                        "0 0 0 rgba(59, 130, 246, 0)", // Start with no glow
                        "0 0 10px 5px rgba(59, 130, 246, 0.6)", // Add glow
                        "0 0 0 rgba(59, 130, 246, 0)", // Remove glow
                    ],
                }}
                transition={{
                    duration: 4, // Increased duration for a slower effect
                    ease: "easeInOut",
                    repeat: 0, // Play only once
                    times: [0, 0.4, 0.6, 1], // Control timing of scale and glow effects
                }}
            />

            {/* Tech Icons */}
            <div className="flex flex-row text-7xl justify-center items-center px-12 md:px-0">
                <DiHtml5 className="text-orange-600 mx-2" />
                <DiCss3 className="text-blue-600 mx-2" />
                <DiJavascript className="text-yellow-500 mx-2" />
                <DiReact className="text-blue-500 mx-2" />
                <TbBrandNodejs className="text-green-500 mx-2" />
                <SiExpress className="text-white mx-2" />
                <DiMongodb className="text-green-500 mx-2" />

            </div>
        </motion.div>
        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
    </div>
  )
}
