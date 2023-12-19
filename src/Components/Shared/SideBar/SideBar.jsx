import { useState } from "react";
import setting from '../../../assets/Icon_Settings.png';
import home from '../../../assets/Icon_Home.png';
import profile from '../../../assets/Icon_Patient Profile.png';
import appoinment from '../../../assets/Icon_Appointment.png';
import history from '../../../assets/Icon_medical history.png';
import { NavLink } from "react-router-dom";
// import Home from "../../Home/Home";


const SideBar = () => {
    const [open, setOpen] = useState(true);
    const activeLink = 'bg-transparent text-pink px-2 py-1 underline rounded-lg';
    const normalLink = "text-black";
    const Menus = [
        { title: "Home", src:home },
        { title: "Patient Profile", src:profile },
        { title: "Appointments", src: appoinment },
        { title: "Medical History ", src:history },
        { title: "Settings", src:setting },
        
    ];

    return (
       
        <div
            className={` ${open ? "w-[264px]" : "w-[96px] "
                } bg-[#FFF] h-screen p-[31px]  pt-8 relative duration-300`}
        >
            <button className={`absolute cursor-pointer -right-3 top-[5%] w-8 
            rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}>
                    
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
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
            </button>

            {/* <img
                    src="./src/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                /> */}
            <div className="flex gap-x-[24px] items-center">
                <img
                    src="/Icon_Vector.png"
                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                        }`}
                />
                <h1
                    className={`text-[#384449] origin-left  text-2xl font-medium duration-200 ${!open && "scale-0"
                        }`}
                >
                    Medi<span className="text-[#FF7594]">Doc</span>
                </h1>
            </div>
            <ul className="pt-6">
                {/* <li className="text-lg font-bold "><NavLink
                     to='/' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    Home
                </NavLink>
                </li>  */}
               
                <NavLink to='/appoinments' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 ">

                        <img src={home} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                           Home
                        </span>


                    </li>
                </NavLink>
                <NavLink to='/appoinments' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 ">

                        <img src={profile} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Patient Profile
                        </span>


                    </li>
                </NavLink>
                <NavLink to='/appoinments' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 ">

                        <img src={appoinment} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Appoinments
                        </span>


                    </li>
                </NavLink>
                <NavLink to='/medicalHistory' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 ">

                        <img src={history} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Medical History
                        </span>


                    </li>
                </NavLink>
                <NavLink to='/setting' className={({ isActive }) => isActive ? activeLink : normalLink} >
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 ">
                
                    <img src={setting} />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Settings
                    </span>
                  
                
                    </li>
                </NavLink>
                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-text-color text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                            } `}
                    >
                        <img src={Menu.src} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {Menu.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
{/**/}
export default SideBar;

 // <div className="flex">
        //     <div
        //         className={` ${open ? "w-[264px]" : "w-[96px] "
        //             } bg-[#FFF] h-screen p-[31px]  pt-8 relative duration-300`}
        //     >
        //         <button className={`absolute cursor-pointer -right-3 top-[5%] w-8 
        //     rounded-full  ${!open && "rotate-180"}`}
        //         onClick={() => setOpen(!open)}>
        //             <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
        //                 <g filter="url(#filter0_d_1_2435)">
        //                     <circle cx="22" cy="20" r="17" fill="white" />
        //                 </g>
        //                 <path d="M25.6941 13.3082C25.89 13.5055 26 13.7732 26 14.0523C26 14.3314 25.89 14.599 25.6941 14.7964L20.5221 20.0064L25.6941 25.2163C25.8844 25.4148 25.9897 25.6807 25.9873 25.9566C25.985 26.2326 25.8751 26.4966 25.6814 26.6917C25.4876 26.8869 25.2256 26.9976 24.9516 27C24.6777 27.0024 24.4137 26.8963 24.2167 26.7045L18.3059 20.7505C18.11 20.5531 18 20.2854 18 20.0064C18 19.7273 18.11 19.4596 18.3059 19.2622L24.2167 13.3082C24.4126 13.1108 24.6783 13 24.9554 13C25.2324 13 25.4981 13.1108 25.6941 13.3082Z" fill="#FF7594" />
        //                 <defs>
        //                     <filter id="filter0_d_1_2435" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        //                         <feFlood floodOpacity="0" result="BackgroundImageFix" />
        //                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        //                         <feOffset dy="2" />
        //                         <feGaussianBlur stdDeviation="2.5" />
        //                         <feComposite in2="hardAlpha" operator="out" />
        //                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        //                         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2435" />
        //                         <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2435" result="shape" />
        //                     </filter>
        //                 </defs>
        //             </svg>  
        //     </button>

        //         {/* <img
        //             src="./src/assets/control.png"
        //             className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
        //    border-2 rounded-full  ${!open && "rotate-180"}`}
        //             onClick={() => setOpen(!open)}
        //         /> */}
        //         <div className="flex gap-x-[24px] items-center">
        //             <img
        //                 src="/Icon_Vector.png"
        //                 className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
        //                     }`}
        //             />
        //             <h1
        //                 className={`text-[#384449] origin-left  text-2xl font-medium duration-200 ${!open && "scale-0"
        //                     }`}
        //             >
        //                 Medi<span className="text-[#FF7594]">Doc</span>
        //             </h1>
        //         </div>
        //         <ul className="pt-6">
        //             {Menus.map((Menu, index) => (
        //                 <li
        //                     key={index}
        //                     className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
        //       ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
        //                         } `}
        //                 >
        //                     <img src={`./src/assets/${Menu.src}.png`} />
        //                     <span className={`${!open && "hidden"} origin-left duration-200`}>
        //                         {Menu.title}
        //                     </span>
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        //     <div className="h-screen flex-1  bg-[#F9F9F9]">
        //         {/* <h1 className="text-2xl font-semibold ">Home Page</h1> */}
        //         <Home/>
        //     </div>
        // </div>