import React from 'react'

import { BiError } from 'react-icons/bi'
import { HiOutlineServer } from 'react-icons/hi'
import { IoNewspaperOutline } from 'react-icons/io5'
import { RiPictureInPictureFill } from 'react-icons/ri'
import { ImBlocked } from 'react-icons/im'
import { FiMinimize } from 'react-icons/fi'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowsAlt, AiOutlineBug, AiOutlineMail } from 'react-icons/ai'


const Dashboard = () => {
  return (
    <div>
      <div className="overflow-x-hidden ml-12">
        <div className='grid lg:grid-cols-3 md:grid-cols-2 mr-4 mt-0 md:flex-row justify-center items-center md:space-x-16 ml-[310px]'>
          <div className='bg-zinc-950 md:h-[250px] w-[50%] sm:w-[90%] text-white mb-5'>
            <div>
              <div className='mx-6 mt-2 flex justify-between opacity-50'>
                <h1>Assets</h1>
                <h1>1842</h1>
              </div>
              <div className="mt-3 mx-6 h-0.5 bg-neutral-50 opacity-10"></div>
              <div className='flex justify-center items-center mx-6'>
                <div className='mt-5 w-[110px] box-content h-[20px] bg-[#adff2f] '></div>
                <div className='mt-5 ml-0.5 w-[84px] box-content h-[20px] bg-sky-700 '></div>
                <div className='mt-5 ml-0.5 w-[60px] box-content h-[20px] bg-sky-400 '></div>
                <div className='mt-5 ml-0.5 w-[50px] box-content h-[20px] bg-emerald-500 '></div>
                <div className='mt-5 ml-0.5 w-[144px] box-content h-[20px] bg-slate-500 '></div>
              </div>
              <div className='flex flex-col sm:flex-row justify-center items-center space-x-4'>
                <div className='flex '>
                  <div className='mt-5 justify-around items-center w-[10px] rounded-full h-[10px] bg-[#adff2f] '></div>
                  <h1 className='text-[12px] mt-4 ml-2 flex gap-1'>368 <p className='text-slate-500'> VPC</p></h1>
                </div>
                <div className='flex '>
                  <div className='mt-5 justify-around items-center w-[10px] rounded-full h-[10px] bg-sky-700 '></div>
                  <h1 className='text-[12px] mt-4 ml-2 flex gap-1'>276 <p className='text-slate-500'> S3 Bucket</p> </h1>
                </div>
                <div className='flex '>
                  <div className='mt-5 justify-around items-center w-[10px] rounded-full h-[10px] bg-sky-400 '></div>
                  <h1 className='text-[12px] mt-4 ml-2 flex gap-1'>184 <p className='text-slate-500'> Security group</p> </h1>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row justify-center items-center space-x-4'>
                <div className='flex sm:flex-row'>
                  <div className='mt-5 justify-around items-center w-[10px] rounded-full h-[10px] bg-emerald-500 '></div>
                  <h1 className='text-[12px] mt-4 ml-2 flex gap-1'>147 <p className='text-slate-500'> Workedload</p> </h1>
                </div>
                <div className='flex '>
                  <div className='mt-5 justify-around items-center w-[10px] rounded-full h-[10px] bg-slate-500 '></div>
                  <h1 className='text-[12px] mt-4 ml-2 flex gap-1'>867 <p className='text-slate-500'>Other</p> </h1>
                </div>
              </div>
            </div>
            <div className='flex flex-col-3 justify-center items-end justify-between h-[100px]'>
              <div className='font-[Poppins] flex text-xl m-3'>
                <h1>1801</h1>
                <p className='text-xs bottom-0 mt-[9px] pl-1'>safe</p>
              </div>
              <div className="h-[30px] mb-2 w-0.5 bg-neutral-100 opacity-10 "></div>
              <div className='font-[Poppins] flex text-xl m-3'>
                <h1>41</h1>
                <p className='text-xs bottom-0 mt-[9px] pl-1'>at risk</p>
              </div>
            </div>
          </div>
          <div className='bg-zinc-950 mb-5  w-[50%] sm:w-[90%] md:h-[250px] text-white'>
            <div>
              <div className='mx-6 mt-2 flex justify-between opacity-50'>
                <h1>Assets</h1>
                <h1>40</h1>
              </div>
              <div className="mt-3 mx-6 h-0.5 bg-neutral-50 opacity-10"></div>
              <div className='flex justify-center items-center mx-6'>
                <div className='mt-5 w-[80px] box-content h-[20px] bg-[#adff2f] '></div>
                <div className='mt-5 ml-0.5 w-[84px] box-content h-[20px] bg-sky-700 '></div>
                <div className='mt-5 ml-0.5 w-[100px] box-content h-[20px] bg-sky-400 '></div>
                <div className='mt-5 ml-0.5 w-[184px] box-content h-[20px] bg-slate-500 '></div>
              </div>
              <div className='flex flex-col sm:flex-row justify-center items-center space-x-4 text-[12px]'>
                <div className='flex '>
                  <div className='mt-5 justify-around items-center w-[10px] rounded-full h-[10px] bg-[#adff2f] '></div>
                  <h1 className=' mt-4 ml-2 flex gap-1'>2 <p className='text-slate-500'> Malware</p></h1>
                </div>
                <div className='flex '>
                  <div className='mt-5 justify-around items-center w-[10px] rounded-full h-[10px] bg-sky-700 '></div>
                  <h1 className='mt-4 ml-2 flex gap-1'>6 <p className='text-slate-500'> Lateral movement</p> </h1>
                </div>
                <div className='flex '>
                  <div className='mt-5 justify-around items-center w-[10px] rounded-full h-[10px] bg-sky-400 '></div>
                  <h1 className=' mt-4 ml-2 flex gap-1'>10 <p className='text-slate-500'> Data at risk</p> </h1>
                </div>
              </div>
              <div className='flex justify-center items-center space-x-4'>
                <div className='flex '>
                  <div className='mt-5 justify-around items-center w-[10px] rounded-full h-[10px] bg-slate-500 '></div>
                  <h1 className='mt-4 ml-2 flex gap-1'>22 <p className='text-slate-500'>Unpatched asset</p> </h1>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-center sm:items-end justify-between md:h-[100px]'>
              <div className='font-[Poppins] flex  m-3'>
                <h1 className='text-[8px] sm:text-xl'>6</h1>
                <p className='sm:text-xs text-[8px] bottom-0 mt-[9px] pl-1'>Compromise</p>
              </div>
              <div className="h-[30px] mb-2 w-0.5 bg-neutral-100 opacity-10 "></div>
              <div className='font-[Poppins] flex text-xl m-3'>
                <h1 className='text-[8px] sm:text-xl'>22</h1>
                <p className='text-[8px] sm:text-xs bottom-0 mt-[9px] pl-1'>imminent compromize</p>
              </div>
              <div className="h-[30px] mb-2 w-0.5 bg-neutral-100 opacity-10 "></div>
              <div className='font-[Poppins] flex text-xl m-3'>
                <h1 className='text-[8px] sm:text-xl'>12</h1>
                <p className='text-[8px] sm:text-xs bottom-0 mt-[9px] pl-1'>hazardous</p>
              </div>
            </div>
          </div>
          <div className='bg-zinc-950  w-[50%] sm:w-[90%] text-white my-8'>
            <div>
              <div className='mx-6 mt-2 flex justify-between opacity-50'>
                <h1>Safe zone</h1>
                <h1>8</h1>
              </div>
              <div className="mt-3 mx-6 h-0.5 bg-neutral-50 opacity-10"></div>
              <div className='flex flex-row'>
                <div>
                  <div className="h-[180px] w-[3px] mt-2 ml-9 bg-neutral-100 opacity-50 relative "></div>
                  <div className=" ml-9 h-[3px] w-[190px] sm:w-[400px] bg-neutral-100 opacity-50 relative"></div>
                </div>
                <div className='absolute flex-col space-y-9 mt-3 ml-2 text-sm opacity-50'>
                  <p>1.5k</p>
                  <p>1k</p>
                  <p>500</p>
                  <p>0</p>

                </div>
                <div className="h-[60px] w-[24px] mt-32 ml-12 sm:ml-24 bg-neutral-100 opacity-50 absolute"></div>
                <div className="h-[80px] w-[24px] mt-[108px] ml-40 sm:ml-64 bg-neutral-100 opacity-50 absolute "></div>
              </div>

            </div>
            <div className='flex flex-col-3 justify-center items-end justify-between h-[60px]'>
              <div className='font-[Poppins] flex text-xl m-3'>
                <h1>0</h1>
                <p className='text-xs bottom-0 mt-[9px] pl-1'>Configuratiion issues found</p>
              </div>
              <div className="h-[30px] mb-2 w-0.5 bg-neutral-100 opacity-10 "></div>
              <div className='font-[Poppins] flex text-xl m-3'>
                <h1>0</h1>
                <p className='text-xs bottom-0 mt-[9px] pl-1'>Authentication risks found</p>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-3 ml-0 md:ml-40 h-0.5 bg-neutral-50 opacity-10"></div>
        <div className="md:flex">
          <div className='sm:flex ml-3 md:ml-60 mt-8 text-white'>
            <div>
              <h2 className='text-[40px] font-bold'>Major Risks</h2>
              <ul className='text-[25px] space-y-7 mx-[27px]'>
                <li className='flex flex-row space-x-4 mt-[40px] '>
                  <IoNewspaperOutline className='rounded-full border-2 border-white bg- text-[37px]' />
                  <div className='text-[20px]'>Data At Risk</div>
                </li>
                <li className='flex flex-row space-x-4 mt-[40px] '>
                  <AiOutlineBug className='rounded-full border-2 border-white bg-black  text-[37px]' />
                  <div className='text-[20px]'>Malware</div>
                </li>
                <li className='flex flex-row space-x-4 mt-[40px] '>
                  <AiOutlineArrowsAlt className='rounded-full border-2 border-white bg-black  text-[37px]' />
                  <div className='text-[20px]'>Lateral movement</div>
                </li>
                <li className='flex flex-row space-x-4 mt-[40px] '>
                  <RiPictureInPictureFill className='rounded-full border-2 border-white bg-black  text-[37px]' />
                  <div className='text-[20px]'>Unpatched resources</div>
                </li>
                <li className='flex flex-row space-x-4 mt-[40px] '>
                  <ImBlocked className='rounded-full border-2 border-white bg-black text-[37px]' />
                  <div className='text-[20px]'>Outdated service</div>
                </li>
                <li className='flex flex-row space-x-4 mt-[40px] '>
                  <FiMinimize className='rounded-full border-2 border-white bg-black  text-[37px]' />
                  <div className='text-[20px]'>Authentication risk</div>
                </li>

              </ul>
            </div>
            <div className="ml-20 h-0 sm:h-[513px] mt-[-50px] w-0 md:w-0.5 self-stretch bg-neutral-50 opacity-10"></div>

          </div>
          <div className='text-white space-y-4 text-[40px] mt-20 sm:mt-0 ml-0 sm:ml-14 justify-between w-full'>
            <div className='font-bold '>
              <h1>Top 5 Data at risk</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-stretch sm:space-x-6 space-y-4 mr-3'>
              <div className='bg-zinc-950 flex flex-col md:h-[100%] lg:h-[70%] text-white relative'>
                <div className='flex flex-col opacity-50 text-lg'>
                  <div className='h-[330px]'>
                    <div>
                      <div className='flex space-x-3 bg-slate-950'>
                        <div className='my-2 ml-2 rounded-full border bg-gray-900 border-gray-900'>
                          <BiError className='m-1' />
                        </div>

                        <h1 className='mt-1'>Customer files bucket</h1>
                      </div>
                      <div className='flex flex-row justify-between mt-3 mx-2'>
                        <p className='text-xs '>Email(28)</p>
                        <p ><AiOutlineMail /></p>
                      </div>
                      <div className="mt-3 mx-0 h-0.5 bg-neutral-50 opacity-10"></div>
                      <div className='flex flex-row justify-between mt-3 mx-2'>
                        <p className='text-xs'>Credit Card Details(21)</p>
                        <p ><HiOutlineServer /></p>
                      </div>
                      <div className="mt-3 mx-0 h-0.5 w-full bg-neutral-50 opacity-10"></div>


                    </div>
                    <div className='absolute md:w-full mt-3'>
                      <div className='flex space-x-2 itemms-center justify-center'>
                        <p className='border-2 px-3 text-8px sm:text-[10px]' id="btn">Internet facing</p>
                        <p className="border-2 px-3" id='btn'>Pill</p>
                      </div>
                      <div className="mt-3 mx-0 h-0.5 w-full bg-neutral-50 opacity-10"></div>
                      <p className='text-xs my-3 mx-2 '>1 Day ago</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className='bg-zinc-950 h-[70%] text-white relative'>
                <div className='flex flex-col opacity-50 text-lg'>
                  <div className='h-[330px]'>
                    <div>
                      <div className='flex space-x-3 bg-slate-950'>
                        <div className='my-2 ml-2 rounded-full border bg-gray-900 border-gray-900'>
                          <BiError className='m-1' />
                        </div>

                        <h1 className='mt-1'>Customer files bucket</h1>
                      </div>
                      <div className='flex flex-row justify-between mt-3 mx-2'>
                        <p className='text-xs '>Email(28)</p>
                        <p ><AiOutlineMail /></p>
                      </div>
                      <div className="mt-3 mx-0 h-0.5 bg-neutral-50 opacity-10"></div>
                      <div className='flex flex-row justify-between mt-3 mx-2'>
                        <p className='text-xs'>Credit Card Details(21)</p>
                        <p ><HiOutlineServer /></p>
                      </div>
                      <div className="mt-3 mx-0 h-0.5 bg-neutral-50 opacity-10"></div>


                    </div>
                    <div className='absolute md:w-full'>
                      <div className='flex space-x-2 itemms-center justify-center'>
                        <p className='border-2 px-3 text-8px sm:text-[10px]' id="btn">Internet facing</p>
                        <p className="border-2 px-3" id='btn'>Pill</p>
                      </div>
                      <div className="mt-3 mx-0 h-0.5 w-full bg-neutral-50 opacity-10"></div>
                      <p className='text-xs my-3 mx-2 '>1 Day ago</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className='bg-zinc-950 w-[100%] h-[70%] text-white relative w-full'>
                <div className='flex flex-col opacity-50 text-lg'>
                  <div className='h-[330px]'>
                    <div>
                      <div className='flex space-x-3 bg-slate-950'>
                        <div className='my-2 ml-2 rounded-full border bg-gray-900 border-gray-900'>
                          <BiError className='m-1' />
                        </div>

                        <h1 className='mt-1'>eks-dev-aws-node</h1>
                      </div>
                      <div className='flex flex-row justify-between mt-3 mx-2'>
                        <p className='text-xs '>Email(28)</p>
                        <p ><AiOutlineMail /></p>
                      </div>
                      <div className="mt-3 mx-0 h-0.5 bg-neutral-50 opacity-10"></div>
                      <div className='flex flex-row justify-between mt-3 mx-2'>
                        <p className='text-xs'>Credit Card Details(21)</p>
                        <p ><HiOutlineServer /></p>
                      </div>
                      <div className="mt-3 w-[100%] mx-0 h-0.5 bg-neutral-50 opacity-10"></div>
                    </div>
                    <div className='absolute md:w-full'>
                      <div className='flex space-x-2 itemms-center justify-center'>
                        <p className='border-2 px-3 text-8px sm:text-[10px]' id="btn">Internet facing</p>
                        <p className="border-2 px-3" id='btn'>Pill</p>
                      </div>
                      <div className="mt-3 mx-0 h-0.5 w-full bg-neutral-50 opacity-10"></div>
                      <p className='text-xs my-3 mx-2 '>1 Day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-3'>
              <div className='border-2'>
                <AiOutlineArrowLeft className='mx-4 text-xm' />
              </div>
              <div className='border-2'>
                <AiOutlineArrowRight className='mx-4' />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard