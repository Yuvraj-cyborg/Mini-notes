import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
    
  return (
    <motion.div 
       drag 
       dragConstraints={reference} 
       whileDrag={{scale: 1.1}} 
       dragElastic={0.2} 
       dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
       className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
    >
        <FaRegFileLines />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoIosClose /> : <FaDownload size=".7em" color='#fff'/>}
              
            </span>
            
        </div>
        {
            data.tag.isOPen && (
                <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
            ) 
        }
        
        </div>
    </motion.div>
    
    )
}

export default Card