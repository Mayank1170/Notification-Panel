import React, { ReactElement } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BiExport } from 'react-icons/bi'

import { BiFilterAlt } from 'react-icons/bi'

import { AiOutlineCalendar } from 'react-icons/ai'



const Navbar = () => {
    return (
        <>
            <nav className='w-[100%] md:mr-8  p-5 bg-black md:flex md:items-center md:justify-between h-[300px] md:h-[100px]'>
                <div>
                    
                    <span className='text-3xl font-bold text-white bg-black ml-40 w-full z-[1]'>Dashboard</span>
                </div>
                <ul className='md:flex md:items-center z-[1] bg-black w-full left-28 md:z-auto md:static relative md:left-12 md:w-auto justify-between gap-3 text-white'>
                    <li className='mx-2 my-6 text-lg flex items-center gap-2'>Export Report<BiExport /></li>
                    <div className="md:h-[30px] md:min-h-[1em] md:w-0.5  md:bg-neutral-100 md:opacity-10"></div>
                    <li className='mx-2 my-6 text-lg flex items-center gap-2'>Saved Filters<BiFilterAlt /></li>
                    <div className="md:h-[30px] md:min-h-[1em] md:w-0.5 md:bg-neutral-100 md:opacity-10"></div>
                    <li className='mx-2 my-6 text-lg flex items-center gap-2'>Now<AiOutlineCalendar /></li>
                </ul>
                <div className='flex items-center bg-black'>
                    <input type='text' placeholder='Search' className='text-white bg-black ml-28 w-[100%] border border-zinc-800 px-3 py-[0.25rem] md:w-[100%] z-[1]'/>
                    <BiSearch id='search-icon' className='bg-white text-[32px] text-black decoration-black' />
                </div>
            </nav>
        </>
    )
}

export default Navbar