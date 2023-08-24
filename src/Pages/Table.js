import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { PiClipboardTextLight } from "react-icons/pi";
import { BsFillPencilFill } from "react-icons/bs"
import TableValue from "./TableValue";

const Table = () => {
  const [selectedRows, setSelectedRows] = useState(10);
  const [openDropdownId, setOpenDropdownId] = useState(null); // State to track open dropdown
  const handleRowChange = (event) => {
    setSelectedRows(parseInt(event.target.value));
  };
  const toggleDropdown = (itemId) => {
    if (openDropdownId === itemId) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(itemId);
    }
  };

  return (
    <div className="ml-40 mr-20 space-x-4 mt-8">
      <div className="flex items-center justify-center text-[40px]  text-[#45a582]">
        Et Harum Quidem Rerum Facilisest Expedita Distinctio
      </div>
      <div>
        <div className="flex flex-row mt-12 justify-between">
          <div className="flex flex-row space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="text-white bg-black ml-16  w-[10px] border border-[#45a582] px-3 py-[0.25rem] md:w-[350px] z-[1]"
            />
            <div className="flex items-center justify-between md:w-[350px] border border-[#45a582]">
              <label className="text-md w-full text-gray-400 ml-5">
                Row per page:
              </label>
              <select
                className="p-3 w-fit text-white bg-[#45a582]"
                value={selectedRows}
                onChange={handleRowChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div>
            <button className="w-[200px] h-[45px] text-white bg-[#45a582] items-center justify-center">
              Add Note{" "}
              <span className="text-2xl items-center justify-center">+</span>
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center bg-slate-950 ml-16 mt-8 py-6 justify-between pl-8 pr-12">
            <div className="flex items-center">
              <label className="justify-evely text-grey-800 border-green-500 flex w-[100px] items-center gap-x-2 p-3">
                <input type="checkbox" id="choose-me" />
              </label>
              <div className="flex items-center ">
                <div className="text-white w-[180px]">Name</div>
                <div className="text-white w-[400px]">Description</div>
                <div className="text-white w-[200px]">Rate</div>
                <div className="text-white w-[180px]">Balance</div>
                <div className="text-white w-[180px]">Deposite</div>
                <div className="text-white w-[180px]">Status</div>
              </div>
            </div>
            <div className="text-white text-3xl ">
              <IoMdSettings />
            </div>
          </div>
        </div>
        {TableValue.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-slate-900 ml-16 py-6 justify-between pl-8 pr-12"
            style={{ backgroundColor: item.color }}
          >
            <div className="flex items-center">
              <label className="justify-evely text-grey-800 border-green-500 flex w-[100px] items-center gap-x-2 p-3">
                <input type="checkbox" id="choose-me" />
              </label>
              <div className="flex items-center ">
                <div className="flex flex-col text-white w-[180px]">
                  {item.name} <span>098765</span>
                </div>
                <div className="text-white w-[400px] pr-12">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                </div>
                <div className="flex flex-col text-white w-[200px]">
                  120.00 <span>USD</span>
                </div>
                <div
                  className="flex flex-col w-[180px]"
                  style={{ color: item.BalanceColor }}
                >
                  300.00<span className="text-white">USD</span>
                </div>
                <div className="flex flex-col text-white w-[180px]">
                  500.00<span>USD</span>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="text-white text-xl w-[fit] px-8 py-2 rounded-3xl bg-emerald-500">
                    Active
                  </div>
                  <div className="bg-blue-600 rounded-full p-3 text-xl text-white">
                    <BsPencilFill />
                  </div>
                  <div className="bg-red-600 rounded-full p-3 text-xl text-white">
                    <FaTrashAlt />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-green-600 text-3xl cursor-pointer relative"
              onClick={() => toggleDropdown(item.id)}
            >
              <BsThreeDots />
              {openDropdownId === item.id && (
                <div className="mt-2 ml-[-250px] w-[300px] justify-between py-2 top-[100%] left-0 z-50 bg-black border border-slate-800 rounded shadow absolute divide-y-[0.5px] divide-slate-800">
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-xl items-center text-slate-400 font-bold my-3 mx-4">
                      Extended Info
                    </div>
                    <div className="text-slate-400 text-[12px] px-5 py-2 ">
                      <IoMdClose />
                    </div>
                  </div>
                  <div className="divide-y-[0.5px] divide-slate-800">
                  <div className="flex flex-row justify-between  hover:bg-gray-900 items-center">
                      <div className="px-4 py-2 text-lg text-white/40 cursor-pointer">
                        Details
                      </div>
                      <div className="text-red-800 text-[20px] px-5 py-2"><PiClipboardTextLight/></div>
                    </div>
                    <div className="flex flex-row justify-between  hover:bg-gray-900 items-center">
                    <div className="px-4 py-2 text-lg text-white/40 cursor-pointer">
                      Edit
                    </div>
                    <div className="text-blue-800 text-[20px] px-5 py-2"><BsFillPencilFill/></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Table;
