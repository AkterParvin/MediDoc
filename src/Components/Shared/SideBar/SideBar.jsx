/* eslint-disable no-unused-vars */
import { useState } from "react";
import setting from '../../../assets/Icon_Settings.png';
// import home from '../../../assets/Icon_Home.png';
// import profile from '../../../assets/Icon_Patient Profile.png';
import appoinment from '../../../assets/Icon_Appointment.png';
import history from '../../../assets/Icon_medical history.png';
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import svg from "../../../assets/round.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const activeLink = 'bg-transparent text-pink  ';
    const normalLink = "text-black";

    //     return (

    // <div>
    // {/* < !--drawer init and toggle-- > */}
    // <div className="text-center">
    //    <button onClick={()=>setOpen(!open)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
    //    Show drawer
    //    </button>
    // </div>

    //             {/* <!--drawer component-- > */}
    //             {open &&
    //                 <div id="drawer-example" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-label">
    //                 <h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    //                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    //                 </svg>Info</h5>
    //                 <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
    //                     <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    //                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
    //                     </svg>
    //                     <span className="sr-only">Close menu</span>
    //                 </button>

    //                 <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" className="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
    //                 <div className="grid grid-cols-2 gap-4">
    //                     <a href="#" className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
    //                     <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
    //                     </svg></a>
    //                 </div>
    //             </div>}

    //         </div>
    // )

    return (
        <div className="h-screen">
            <div className={` ${open ? "lg:w-[220px] w-[150px]" : "lg:w-[70px] "
                }   p-4 lg:p-7  pt-8 relative transition-all duration-700`} onClick={() => setOpen(!open)}>
                
                <button className={`absolute cursor-pointer   w-8 transition-all duration-700
            rounded-full  ${open ? "rotate-180 transition-all duration-700 top-6 md:-right-4 md:top-9 -right-[10%] z-50" : "rotate-180 transition-all duration-700 md:right-4 md:top-9  top-6 left-6 "}`}>
                    {
                        !open ?
                            <span className=" rounded-md ">
                                <button className="p-1 text-xs bg-white shadow-lg shadow-slate-500 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 29 28" fill="none" >
                                        <path d="M4 21H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 14H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 7H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                            </span> :
                            <span>
                                <button className="fixed -top-5 p-2 bg-white shadow-xl flex items-center  shadow-gray-500 rounded-full">


                                    <MdArrowBackIosNew className="text-pink " />
                                </button>

                            </span>
                    }

                </button>
            </div>
            {/* <button className={`absolute cursor-pointer   w-8 
            rounded-full  ${open ? "rotate-180 transition-all duration-700 top-6 -left-[100%] z-50" : "rotate-180 transition-all duration-700  top-6 left-6 "}`}
                onClick={() => setOpen(!open)}>
                {
                    !open ?
                        <span className=" rounded-md ">
                            <button className="p-1 text-xs bg-white shadow-lg shadow-slate-500 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 29 28" fill="none" >
                                    <path d="M4 21H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 14H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 7H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                        </span> :
                        <span>
                            <button className="fixed -top-5 p-2 bg-white shadow-xl flex items-center  shadow-gray-500 rounded-full">


                                <MdArrowBackIosNew className="text-pink " />
                            </button>

                        </span>
                }

            </button> */}
            <div
                className={` ${open ? "md:w-[220px] w-[150px] h-full bg-sky-100 top-0" : " w-0 "
                    }   p-4 lg:p-7  pt-8 absolute transition-all duration-700`}
            >
                {/* <button className={`absolute cursor-pointer -right-3 top-[5%] w-8 
            rounded-full  ${!open ? "rotate-180 transition-all duration-700 top-[5%] right-[30%]" : "rotate-180 transition-all duration-700  "}`}
                    onClick={() => setOpen(!open)}>
                    {
                        !open ?
                            <span className=" rounded-md ">
                                <button className="p-1 text-xs bg-white shadow-lg shadow-slate-500 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 29 28" fill="none" >
                                        <path d="M4 21H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 14H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 7H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                            </span> :
                            <span>
                                <button className="fixed -top-5 p-2 bg-white shadow-xl flex items-center  shadow-gray-500 rounded-full">


                                    <MdArrowBackIosNew className="text-pink " />
                                </button>

                            </span>
                    }

                </button> */}

                <div className="flex gap-x-1 items-center">
                    <img
                        src={logo}
                        className={`cursor-pointer w-5 h-5 duration-500 ${open ? "rotate-[360deg]" : "hidden"
                            }`}
                    />
                    <h1
                        className={`text-[#384449] origin-left  lg:text-2xl font-medium duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Upto<span className="text-[#FF7594]">Date</span>
                    </h1>
                </div>
                <ul className="pt-8 ">


                    <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink} >
                        <li className="flex  rounded-md  cursor-pointer hover:bg-gray-200 text-text-color text-sm items-center gap-x-1 mb-5">

                            <FaHome className="text-pink text-2xl" />

                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Home
                            </span>


                        </li>
                    </NavLink>
                    <NavLink to='/profile' className={({ isActive }) => isActive ? activeLink : normalLink} >
                        <li className="flex  rounded-md  cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-1 mb-5">

                            {/* <img src={profile} /> */}

                            <CgProfile className="text-pink text-2xl" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Profile
                            </span>


                        </li>
                    </NavLink>
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? activeLink : normalLink} >
                        <li className="flex  rounded-md  cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-1 mb-5">

                            {/* <img src={profile} /> */}

                            <MdOutlineDashboard className="text-pink text-2xl" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Dashboard
                            </span>


                        </li>
                    </NavLink>



                </ul>
                {
                    open ? <button className="text-xs font-medium text-white  p-3 
                        rounded-[5px] shadow-lg" style={{ background: "linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)" }} >New appointment</button> :
                        <img src={svg} />
                }

            </div>
        </div>
    );
};
{/**/ }
export default SideBar;

{/* <NavLink to='/setting' className={({ isActive }) => isActive ? activeLink : normalLink} >
    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 mt-[207px] mb-20">

        <img src={setting} />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Settings
                    </span>
                  
        <button className="text-sm font-medium text-white leading-[19.6px] p-3 
                        rounded-[5px] shadow-lg" style={{ background: "linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)" }} >New appointment</button>


    </li>
</NavLink> */}