import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom'
import { RiDashboardFill } from 'react-icons/ri';
import { FaDatabase } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { MdHelp } from 'react-icons/md';
import { AiTwotoneSetting } from 'react-icons/ai';
import { IoPersonCircle } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <>
      <div className='absolute flex h-full flex-col my-0 bg-black top-0 md:w-40 justify-between items-center opacity-100 sm:opacity-100 border-r-[0.4px] border-slate-700'>
        <ul className='mt-10 text-white flex flex-col gap-y-7 ml-3 md:gap-y-16 text-2xl md:text-3xl items-center'>
          <li>logo</li>
          <li>
            <Link to='/dashboard' >
              <RiDashboardFill />
            </Link>
          </li>
          <li>
            <Link to='/constructionflow' >
              <FaDatabase />
            </Link>
          </li>
          <li><FaNetworkWired /></li>
          <li><IoCheckmarkDoneCircleSharp /></li>
        </ul>
        <ul className='mb-10 text-white flex flex-col gap-y-16 text-3xl items-center'>
          <li><MdHelp /></li>
          <li><AiTwotoneSetting /></li>
          <li><Link to='/Profile'><IoPersonCircle /></Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;