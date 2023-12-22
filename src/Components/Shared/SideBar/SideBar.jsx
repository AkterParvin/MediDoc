import { useState } from "react";
import setting from '../../../assets/Icon_Settings.png';
import home from '../../../assets/Icon_Home.png';
import profile from '../../../assets/Icon_Patient Profile.png';
import appoinment from '../../../assets/Icon_Appointment.png';
import history from '../../../assets/Icon_medical history.png';
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import svg from "../../../assets/round.png";

// import Home from "../../Home/Home";


const SideBar = () => {
    const [open, setOpen] = useState(true);
    const activeLink = 'bg-transparent text-pink  ';
    const normalLink = "text-black";



    return (

        <div
            className={` ${open ? "w-[264px]" : "w-[96px] "
                } bg-[#FFF] h-full p-[31px]  pt-8 relative duration-300`}
        >
            <button className={`absolute cursor-pointer -right-3 top-[5%] w-8 
            rounded-full  ${!open && "rotate-180 right-[30%]"}`}
                onClick={() => setOpen(!open)}>
                {
                    !open ?
                        <span className="py-[7px] px-[6px] w-[41px] h-[41px] rounded-[5px] bg-white shadow-md shadow-[rgba(0, 0, 0, 0.20)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 29 28" fill="none" >
                                <path d="M4 21H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 14H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 7H25" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></span> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" >
                            <g filter="url(#filter0_d_1_2435)">
                                <circle cx="22" cy="20" r="17" fill="white" />
                            </g>
                            <path d="M25.6941 13.3082C25.89 13.5055 26 13.7732 26 14.0523C26 14.3314 25.89 14.599 25.6941 14.7964L20.5221 20.0064L25.6941 25.2163C25.8844 25.4148 25.9897 25.6807 25.9873 25.9566C25.985 26.2326 25.8751 26.4966 25.6814 26.6917C25.4876 26.8869 25.2256 26.9976 24.9516 27C24.6777 27.0024 24.4137 26.8963 24.2167 26.7045L18.3059 20.7505C18.11 20.5531 18 20.2854 18 20.0064C18 19.7273 18.11 19.4596 18.3059 19.2622L24.2167 13.3082C24.4126 13.1108 24.6783 13 24.9554 13C25.2324 13 25.4981 13.1108 25.6941 13.3082Z" fill="#FF7594" />
                            <defs>
                                <filter id="filter0_d_1_2435" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="2" />
                                    <feGaussianBlur stdDeviation="2.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2435" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2435" result="shape" />
                                </filter>
                            </defs>
                        </svg>
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
                    Medi<span className="text-[#FF7594]">Doc</span>
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