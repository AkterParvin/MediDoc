import { useState } from "react";
import setting from '../../../assets/Icon_Settings.png';
import home from '../../../assets/Icon_Home.png';
import profile from '../../../assets/Icon_Patient Profile.png';
import appoinment from '../../../assets/Icon_Appointment.png';
import history from '../../../assets/Icon_medical history.png';
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import svg from "../../../assets/round.png";
import { MdArrowBackIosNew } from "react-icons/md";
// import Home from "../../Home/Home";


const SideBar = () => {
    const [open, setOpen] = useState(true);
    const activeLink = 'bg-transparent text-pink  ';
    const normalLink = "text-black";



    return (

        <div
            className={` ${open ? "w-[264px]" : "w-[96px] "
                } bg-[#e1eefa] h-full p-[31px]  pt-8 relative duration-300`}
        >
            <button className={`absolute cursor-pointer -right-3 top-[5%] w-8 
            rounded-full  ${!open ? "rotate-180 transition-all duration-700 right-[30%]" : "rotate-180 transition-all duration-700 "}`}
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
                                
                               
                                <MdArrowBackIosNew className="text-pink "/>
                            </button>
                       
                        </span>
                }

            </button>

            {/* <img
                    src="./src/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                /> */}
            <div className="flex gap-x-[24px] items-center">
                <img
                    src={logo}
                    className={`cursor-pointer duration-500 ${open ? "rotate-[360deg]" : "hidden"
                        }`}
                />
                <h1
                    className={`text-[#384449] origin-left  text-2xl font-medium duration-200 ${!open && "scale-0"
                        }`}
                >
                    Upto<span className="text-[#FF7594]">Date</span>
                </h1>
            </div>
            <ul className="pt-[105px] ">


                <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 mb-[40px]">

                        <img src={home} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Home
                        </span>


                    </li>
                </NavLink>
                <NavLink to='/profile' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 mb-[40px]">

                        <img src={profile} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Patient Profile
                        </span>


                    </li>
                </NavLink>
                <NavLink to='/dashboard' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 mb-[40px]">

                        <img src={appoinment} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>


                    </li>
                </NavLink>
                <NavLink to='/history' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 mb-[40px]">

                        <img src={history} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Medical History
                        </span>


                    </li>
                </NavLink>
                <NavLink to='/setting' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 mb-[259px]">

                        <img src={setting} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Settings
                        </span>


                    </li>
                </NavLink>


            </ul>
            {
                open ? <button className="text-sm font-medium text-white leading-[19.6px] p-3 
                        rounded-[5px] shadow-lg" style={{ background: "linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)" }} >New appointment</button> :
                    <img src={svg} />
            }

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