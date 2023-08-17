import React from 'react'
import { BsBuildings } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsArrowUp } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FaArrowDownWideShort } from 'react-icons/fa6'
import Value from './Value'


const ConstructionFlow = () => {
    return (
        <div>
            <div className="bg-zinc-950">
                <div className="ml-40">
                    <div className="flex items-center justify-center ">
                        <div className='h-[100%] w-[100%]'>
                            <div className='flex items-center ml-[4%] w-[100%]'>
                                <h1 className="text-white text-xl mt-6 mb-3">My Company Construction Flow</h1>
                            </div>
                            <div className='h-full flex 2xl:flex-row flex-col w-[100%]'>
                                <div className='flex md:flex-row flex-col w-[100%]'>
                                    <div className='w-[100%] ml-[4%] mb-[2%] bg-gray-950 flex flex-col space-y-16 items-center border-r-[0.5px] border-gray-700 '>
                                        <div className='flex flex-row justify-between h-12 w-[100%] bg-black border-lime-600 border-l-8'>
                                            <div className="ml-2 text-white flex flex-row space-x-2 items-center">
                                                <BsBuildings />
                                                <h1>Group Heading 1</h1>
                                            </div>
                                            <div className='text-white flex flex-row justify-between items-center space-x-3'>
                                                <BiDotsHorizontalRounded />
                                                <BsArrowUp />
                                            </div>
                                        </div>
                                        {Value.map((item) => (
                                            <div key={item.id} className='flex flex-col items-center w-[50%] '>
                                                <div className='w-full text-white flex flex-row space-x-2 items-center bg-lime-600 rounded-t-lg'>
                                                    <div className='pl-3' >
                                                        <AiOutlineHome />
                                                    </div>
                                                    <h1>Duisburg</h1>
                                                </div>
                                                <div className='flex flex-col space-y-2 w-full border border-lime-600 rounded-b-lg'>
                                                    <div className='text-white text-sm flex flex-row justify-between items-center mx-2 mt-4'>
                                                        <div className="flex flex-row space-x-1 items-center justift-between">
                                                            <HiOutlineDocumentText />
                                                            <h1>Cogs 1:</h1>
                                                        </div>
                                                        <h1>{item.Cogs1} EUR</h1>
                                                    </div>
                                                    <div className='text-white text-sm flex flex-row justify-between mx-2 pb-4'>
                                                        <div className="flex flex-row space-x-1 items-center">
                                                            <HiOutlineDocumentText />
                                                            <h1>Cogs 2:</h1>
                                                        </div>
                                                        <h1>{item.Cogs2} EUR</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>

                                    {/* First end Second Start */}

                                    <div className='w-[100%] mb-[2%] bg-gray-950 flex flex-col space-y-16 items-center border-r-[0.5px] border-gray-700 '>
                                        <div className='flex flex-row justify-between h-12 w-[100%] bg-black border-blue-600 border-l-8'>
                                            <div className="ml-2 text-white flex flex-row space-x-2 items-center">
                                                <BsBuildings />
                                                <h1>Group Heading 1</h1>
                                            </div>
                                            <div className='text-white flex flex-row justify-between items-center space-x-3'>
                                                <BiDotsHorizontalRounded />
                                                <BsArrowUp />
                                            </div>
                                        </div>
                                        {Value.map((item) => (
                                            <div key={item.id} className='flex flex-col items-center w-[50%] '>
                                                <div className='w-full text-white flex flex-row space-x-2 items-center bg-lime-600 rounded-t-lg'>
                                                    <div className='pl-3' >
                                                        <AiOutlineHome />
                                                    </div>
                                                    <h1>Duisburg</h1>
                                                </div>
                                                <div className='flex flex-col space-y-2 w-full border border-lime-600 rounded-b-lg'>
                                                    <div className='text-white text-sm flex flex-row justify-between items-center mx-2 mt-4'>
                                                        <div className="flex flex-row space-x-1 items-center justift-between">
                                                            <HiOutlineDocumentText />
                                                            <h1>Cogs 1:</h1>
                                                        </div>
                                                        <h1>{item.Cogs1} EUR</h1>
                                                    </div>
                                                    <div className='text-white text-sm flex flex-row justify-between mx-2 pb-4'>
                                                        <div className="flex flex-row space-x-1 items-center">
                                                            <HiOutlineDocumentText />
                                                            <h1>Cogs 2:</h1>
                                                        </div>
                                                        <h1>{item.Cogs2} EUR</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                {/* Second end*/}

                                {/* Middle Partition Start*/}

                                <div className='flex 2xl:w-[10%] w-[100%] 2xl:items-start 2xl:mt-3 '>
                                    <div className='flex w-[100%] mb-[2%] justify-center flex-row 2xl:flex-col items-center text-white text-lg 2xl:space-y-3 2xl:space-x-0 space-x-5'>
                                        <FaArrowDownWideShort />
                                        <div className="flex 2xl:flex-col flex-row items-center justify-center 2xl:space-x-0 space-x-5 2xl:space-y-9 ">
                                            <BiDotsHorizontalRounded />
                                            <BsBuildings />
                                        </div>
                                        <div className='flex flex-row w-[100%] xl:w-[20%] 2xl:flex-col 2xl:space-y-4 2xl:space-x-0 space-x-2'>
                                            <h1 className='2xl:rotate-[-90deg]'>3</h1>
                                            <h1 className='2xl:rotate-[-90deg] 2xl:py-8'>Heading</h1>
                                            <h1 className='2xl:rotate-[-90deg]'>Group</h1>
                                        </div>
                                    </div>
                                </div>

                                {/* Middle Part End */}
                                {/* Third Part Start */}
                                <div className='w-[100%] flex md:flex-row flex-col'>
                                    <div className='w-[100%] mb-[2%] bg-gray-950 flex flex-col space-y-16 items-center border-x-[0.5px] border-gray-700 '>
                                        <div className='flex flex-row justify-between h-12 w-[100%] bg-black border-red-600 border-l-8'>
                                            <div className="ml-2 text-white flex flex-row space-x-2 items-center">
                                                <BsBuildings />
                                                <h1>Group Heading 1</h1>
                                            </div>
                                            <div className='text-white flex flex-row justify-between items-center space-x-3'>
                                                <BiDotsHorizontalRounded />
                                                <BsArrowUp />
                                            </div>
                                        </div>
                                        {Value.map((item) => (
                                            <div key={item.id} className='flex flex-col items-center w-[50%] '>
                                                <div className='w-full text-white flex flex-row space-x-2 items-center bg-lime-600 rounded-t-lg'>
                                                    <div className='pl-3' >
                                                        <AiOutlineHome />
                                                    </div>
                                                    <h1>Duisburg</h1>
                                                </div>
                                                <div className='flex flex-col space-y-2 w-full border border-lime-600 rounded-b-lg'>
                                                    <div className='text-white text-sm flex flex-row justify-between items-center mx-2 mt-4'>
                                                        <div className="flex flex-row space-x-1 items-center justift-between">
                                                            <HiOutlineDocumentText />
                                                            <h1>Cogs 1:</h1>
                                                        </div>
                                                        <h1>{item.Cogs1} EUR</h1>
                                                    </div>
                                                    <div className='text-white text-sm flex flex-row justify-between mx-2 pb-4'>
                                                        <div className="flex flex-row space-x-1 items-center">
                                                            <HiOutlineDocumentText />
                                                            <h1>Cogs 2:</h1>
                                                        </div>
                                                        <h1>{item.Cogs2} EUR</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                    {/* Third end Fourth Start */}

                                    <div className='w-[100%] mb-[2%] bg-gray-950 flex flex-col space-y-16 items-center '>
                                        <div className='flex flex-row justify-between h-12 w-[100%] bg-black border-green-600 border-l-8'>
                                            <div className="ml-2 text-white flex flex-row space-x-2 items-center">
                                                <BsBuildings />
                                                <h1>Group Heading 1</h1>
                                            </div>
                                            <div className='text-white flex flex-row justify-between items-center space-x-3'>
                                                <BiDotsHorizontalRounded />
                                                <BsArrowUp />
                                            </div>
                                        </div>
                                        {Value.map((item) => (
                                            <div key={item.id} className='flex flex-col items-center w-[50%] '>
                                                <div className='w-full text-white flex flex-row space-x-2 items-center bg-lime-600 rounded-t-lg'>
                                                    <div className='pl-3' >
                                                        <AiOutlineHome />
                                                    </div>
                                                    <h1>Duisburg</h1>
                                                </div>
                                                <div className='flex flex-col space-y-2 w-full border border-lime-600 rounded-b-lg'>
                                                    <div className='text-white text-sm flex flex-row justify-between items-center mx-2 mt-4'>
                                                        <div className="flex flex-row space-x-1 items-center justift-between">
                                                            <HiOutlineDocumentText />
                                                            <h1>Cogs 1:</h1>
                                                        </div>
                                                        <h1>{item.Cogs1} EUR</h1>
                                                    </div>
                                                    <div className='text-white text-sm flex flex-row justify-between mx-2 pb-4'>
                                                        <div className="flex flex-row space-x-1 items-center">
                                                            <HiOutlineDocumentText />
                                                            <h1>Cogs 2:</h1>
                                                        </div>
                                                        <h1>{item.Cogs2} EUR</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>

                                </div>
                                {/*Fourth Ends here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConstructionFlow