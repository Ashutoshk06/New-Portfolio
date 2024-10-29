import React from 'react'
import {motion} from "framer-motion"
import Reveal from './Reveal'

const achievements = [

    {
        Title:"Hack -a-City",
        description:"Secured 3rd Rank in inter-college hackathon organised by City Engineering college,Bengaluru",
    },

    {
        Title:"Geeks for Geeks",
        description:"19th rank on GeeksForGeeks in the college for solving DSA Problems among 1800 registered candidates",
    },

    {
        Title:"Leetcode",
        description:"secured global rank 963 in Leetcode biweekly  contest 141",
    },

    {
        Title:"Leetcode",
        description:"Rated top 11 percent  globally in Leetcode contest ranking",
    }
]

const Achievements = () => {
  return (
    <div className ="p-8 max-w-[600px] mx-auto">
    
    <h1 className ="text-4xl text-gray-200 font-bold text-center mb-12">Achievements</h1>


    <motion.div
    className ="space-y-8"
    initial  = "hidden"
    animate = "visible"
    
    >
        {achievements.map((achievements,index) =>(

            <Reveal key = {index}>
            <motion.div 
                
                initial = "hidden"
                whileInView ="visible"
                viewport = {{once:false , amount : 0.3}}
                className ="max-w-[600px] mx-auto border border-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-blue-700/10"
            >
                <h2 className ="text-gray-100 text-xl">{achievements.Title}</h2>
                <p className ="text-gray-400">{achievements.description}</p>


             </motion.div>
             </Reveal>
        ))}

    </motion.div>
    </div>
  )
}

export default Achievements