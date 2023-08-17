import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Banner from '../Assets/images/ProfileBannerImage.png'
import person from '../Assets/images/person.png'

const Profile = () => {
    return (
        <div className='flex lg:flex-row flex-col  justify-between ml-40 h-[100%] text-white space-x-4'>
            <div className='flex flex-col lg:w-[75%] w-full h-full space-y-4'>
                <div className='bg-slate-600 rounded-lg rounded ml-8'>
                    <img src={Banner} className='rounded-t-lg' />
                    <div className='h-[100px] bg-[#0B0D12]'></div>
                </div>
                <div className='text-white bg-[#0B0D12] rounded ml-8'>
                    <div className='border-b-[0.5px] border-gray-700'>
                        <h1 className='text-2xl ml-[100px] my-3 text-green-300'>About</h1>
                    </div>
                    <div className='flex flex-row justify-between border-b-[0.5px] border-gray-700 m-6 pb-4'>
                        <div className='flex flex-row space-x-3 items-center justify-center'>
                            <h1 className='bg-black rounded-full w-fit p-3 text-gray-500'>AR</h1>
                            <div className='font-bold'>
                                <p className='text-[12px]'>Designer at <span className='text-green-300'>Lorem Ipsum</span></p>
                                <p className='text-[8px]'>Past: Lambo and BMW</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-3 items-center justify-center'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div className='font-bold'>
                                <p className='text-[12px]'>In a relationship with <span className='text-green-300'> John Doe</span></p>
                                <p className='text-[8px]'>Together since 2 years</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-3 items-center justify-center'>
                            <h1 className='bg-black rounded-full p-1 px-3 text-4xl text-gray-500'>+</h1>
                            <div className='font-bold'>
                                <p className='text-[12px]'>Add a school</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between m-6 pb-4'>
                        <div className='flex flex-row space-x-3 items-center justify-center'>
                            <h1 className='bg-black rounded-full w-fit p-3 text-gray-500'>AR</h1>
                            <div className='font-bold'>
                                <p className='text-[12px]'>+91 123 4567 890</p>
                                <p className='text-[8px]'>+91 123 4567 890</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-3 items-center justify-center'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div className='font-bold'>
                                <p className='text-[12px]'>Lives in <span className='text-green-300'>London, UK</span></p>
                                <p className='text-[8px]'>Lives since 2 years</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-3 items-center justify-center'>
                            <h1 className='bg-black rounded-full p-1 px-3 text-4xl text-gray-500'>+</h1>
                            <div className='font-bold'>
                                <p className='text-[12px]'>example@example.com</p>
                                <p className='text-[8px]'>Connect with me</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-white bg-[#0B0D12] rounded ml-8'>
                    <div className='flex flex-row justify-between border-b-[0.5px] border-gray-700'>
                        <h1 className='text-2xl ml-[100px] my-3 text-green-300'>Friends</h1>
                        <div className='flex items-center bg-[#0B0D12]'>
                            <input type='text' placeholder='Search' className='text-white bg-[#0B0D12] mr-4 w-[100%] border border-zinc-800 px-3 py-[0.25rem] md:w-[100%] z-[1]' />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-row justify-around mt-4 pb-4 space-x-6 mx-5'>
                            <div className='w-full flex flex-row justify-between border-[0.5px] border-gray-700 p-4'>
                                <div className='flex flex-row space-x-3 items-center justify-center'>
                                    <h1 className='bg-black rounded-full w-fit p-3 text-gray-500'>AR</h1>
                                    <div className='font-bold'>
                                        <p className='text-[12px]'>Henery Harvey</p>
                                        <p className='text-[8px]'>15 Mutual Friends</p>
                                    </div>
                                </div>
                                <h1 className='text-[25px] text-green-400'>...</h1>
                            </div>
                            <div className='w-full flex flex-row justify-between border-[0.5px] border-gray-700'>
                                <div className='flex flex-row space-x-3 items-center justify-center'>
                                    <img src={person} className='rounded-full w-12 h-12' />
                                    <div className='font-bold'>
                                        <p className='text-[12px]'>Rem Aperiam</p>
                                        <p className='text-[8px]'>32 Mutual Friends</p>
                                    </div>
                                </div>
                                <h1 className='text-[25px] text-green-400'>...</h1>
                            </div>
                            <div className='w-full flex flex-row justify-between border-[0.5px] border-gray-700'>
                                <div className='flex flex-row space-x-3 items-center justify-center'>
                                    <h1 className='bg-black rounded-full p-1 px-3 text-4xl text-gray-500'>+</h1>
                                    <div className='font-bold'>
                                        <p className='text-[12px]'>Add a school</p>
                                    </div>
                                </div>
                                <h1 className='text-[25px] text-green-400'>...</h1>
                            </div>
                        </div>
                    </div>
                    <div className='text-white bg-[#0B0D12] rounded'>
                        <div>
                            <div className='flex flex-row justify-around mt-4 pb-4 space-x-6 mx-5'>
                                <div className='w-full flex flex-row justify-between border-[0.5px] border-gray-700 p-4'>
                                    <div className='flex flex-row space-x-3 items-center justify-center'>
                                        <h1 className='bg-black rounded-full w-fit p-3 text-gray-500'>AR</h1>
                                        <div className='font-bold'>
                                            <p className='text-[12px]'>Henery Harvey</p>
                                            <p className='text-[8px]'>15 Mutual Friends</p>
                                        </div>
                                    </div>
                                    <h1 className='text-[25px] text-green-400'>...</h1>
                                </div>
                                <div className='w-full flex flex-row justify-between border-[0.5px] border-gray-700'>
                                    <div className='flex flex-row space-x-3 items-center justify-center'>
                                        <img src={person} className='rounded-full w-12 h-12' />
                                        <div className='font-bold'>
                                            <p className='text-[12px]'>Rem Aperiam</p>
                                            <p className='text-[8px]'>32 Mutual Friends</p>
                                        </div>
                                    </div>
                                    <h1 className='text-[25px] text-green-400'>...</h1>
                                </div>
                                <div className='w-full flex flex-row justify-between border-[0.5px] border-gray-700'>
                                    <div className='flex flex-row space-x-3 items-center justify-center'>
                                        <h1 className='bg-black rounded-full p-1 px-3 text-4xl text-gray-500'>+</h1>
                                        <div className='font-bold'>
                                            <p className='text-[12px]'>Add a school</p>
                                        </div>
                                    </div>
                                    <h1 className='text-[25px] text-green-400'>...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-[25%] w-[100%] space-y-4'>
                <div className='bg-[#0B0D12]'>
                    <div className='border-b-[0.5px] border-gray-700 pt-4 pb-4'>
                        <h1 className='text-2xl ml-[20px] text-green-300 '>Stories</h1>
                    </div>
                    <div className='w-full flex flex-col mt-7 space-y-8 mx-6 justify-center'>
                        <div className='flex flex-row space-x-5 items-center border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div>
                                <h1 className='text-'>Beatae Vitae</h1>
                                <h1 className='text-[8px]'>5 hours ago</h1>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-5 items-center border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div>
                                <h1 className='text-'>Beatae Vitae</h1>
                                <h1 className='text-[8px]'>5 hours ago</h1>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-5 items-center  border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div>
                                <h1 className='text-'>Beatae Vitae</h1>
                                <h1 className='text-[8px]'>5 hours ago</h1>
                            </div>
                        </div> 
                        <div className='flex flex-row space-x-5 items-center  border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div>
                                <h1 className='text-'>Beatae Vitae</h1>
                                <h1 className='text-[8px]'>5 hours ago</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className='bg-[#0B0D12]'>
                    <div className='border-b-[0.5px] border-gray-700 pt-4 pb-4'>
                        <h1 className='text-2xl ml-[20px] text-green-300 '>Contacts</h1>
                    </div>
                    <div className='w-full flex flex-col mt-7 space-y-8 mx-6 justify-center'>
                        <div className='flex flex-row space-x-5 items-center border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div className='flex flex-row items-center space-x-9 '>
                                <h1 className='text-'>Accusantium john</h1>
                                <h1 className='text-[8px] w-[10px] h-[10px] bg-green-500 rounded-full'></h1>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-5 items-center border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div className='flex flex-row items-center space-x-9 '>
                                <h1 className='text-'>Sequi Nesciunt</h1>
                                <h1 className='text-[8px] w-[10px] h-[10px] bg-green-500 rounded-full'></h1>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-5 items-center border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div className='flex flex-row items-center space-x-9 '>
                                <h1 className='text-'>Minima Veniam</h1>
                                <h1 className='text-[8px] w-[10px] h-[10px] bg-green-500 rounded-full'></h1>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-5 items-center border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div className='flex flex-row items-center space-x-9 '>
                                <h1 className='text-'>Reprehenderit Qui</h1>
                                <h1 className='text-[8px] w-[10px] h-[10px] bg-green-500 rounded-full'></h1>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-5 items-center border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div className='flex flex-row items-center space-x-9 '>
                                <h1 className='text-'>Architecto Beatae</h1>
                                <h1 className='text-[8px] w-[10px] h-[10px] bg-green-500 rounded-full'></h1>
                            </div>
                        </div><div className='flex flex-row space-x-5 items-center border-b-[0.5px] border-gray-700'>
                            <img src={person} className='rounded-full w-12 h-12' />
                            <div className='flex flex-row items-center space-x-9 '>
                                <h1 className='text-'>Ullam Corporis</h1>
                                <h1 className='text-[8px] w-[10px] h-[10px] bg-green-500 rounded-full'></h1>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile