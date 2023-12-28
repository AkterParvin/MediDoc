/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import banner from "../../../assets/Svg_sample1.png";
import heart from "../../../assets/Icon_Heart.png";
import bp from "../../../assets/Icon_Blood_pressure.png";
import sugar from "../../../assets/Icon_Blood_sugar.png";
import o2 from "../../../assets/Frame 2851.png";
import bgHeart from "../../../assets/heart-dark.png";
import bgBp from "../../../assets/bp-dark.png";
import bgSugar from "../../../assets/dark-sugar.png";
import bgO2 from "../../../assets/dark-o2.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AddTask from "../AddTask/AddTask";
import { Link } from "react-router-dom";
const Todo = ({ theme }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const [isDone, setIsDone] = useState(false);
    const handleDoneboxChange = () => {
        setIsDone(!isDone);
    }

    const { user, updateUserProfile } = useContext(AuthContext);
    console.log(user);
    return (
        <div className=" w-full  flex flex-col justify-center items-center px-5">
            {/* Picture part  */}
            <div className="bg-pink flex flex-col lg:flex-row justify-between items-center px-4 h-[213px] lg:gap-20 w-full mb-7 rounded-xl shadow-2xl">
                <div className="flex-1">
                    <img src={banner} alt="" />
                </div>
                <div className=" flex flex-col space-y-3 text-white ">
                    <h2 className="text-2xl font-semibold ">Hello, <span>{user?.displayName
}</span>!</h2>
                    <p className="text-base font-medium leading-[150%]">Stay Up-to-Date with your appointments.</p>
                    <p className="text-base font-medium leading-[150%]">You Have No pending Reports</p>
                </div>
            </div>
            {/* small card  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[37px] w-full ">

                <div className="h-[157px] p-3 bg-white border-[0.823px]  border-[#EDEBEB] dark:border-text-color rounded-[6.581px] shadow-md dark:bg-light-ash/10 dark:shadow-lg dark:shadow-[rgba(0, 0, 0, 0.20)]">
                    {
                        !theme ? < img src={heart} alt="" /> : <img src={bgHeart} alt="" />
                    }
                   
                    <a href="#">
                        <h5 className="mb-2 text-[12.339px] font-semibold tracking-normal text-text-color dark:text-white">Pulse Count</h5>
                    </a>
                    <p className="mb-[5px] font-medium text-[16.5px] text-subtitle dark:text-[#D1D5DB]">
                        60 bpm</p>
                    <a href="#" className="inline-flex items-center gap-1 mb-6 hover:underline">

                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z" fill={!theme ? '#2E1619' : '#D1D5DB'} />
                        </svg>
                        <p className="text-dark-green text-xs font-medium">Normal</p>
                    </a>
                </div>
                <div className=" h-[157px] p-3 bg-white border-[0.823px]  border-[#EDEBEB] rounded-[6.581px] shadow-md dark:bg-gray-800 dark:border-gray-700">
                    {
                        !theme ? < img src={bp} alt="" /> : <img src={bgBp} alt="" />
                    }
                    <a href="#">
                        <h5 className="mb-2 text-[12.339px] font-semibold tracking-normal text-text-color dark:text-white">Blood Pressure </h5>
                    </a>
                    <p className="mb-[5px] font-medium text-[16.5px] text-subtitle dark:text-[#D1D5DB]">
                        110/70 mmHg</p>
                    <a href="#" className="inline-flex items-center gap-1 mb-6 hover:underline dark:text-[#D1D5DB]">

                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" className="dark:text-[#D1D5DB]">
                            <path d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z" fill={!theme ? '#2E1619' : '#D1D5DB'} />
                        </svg>
                        <p className="text-light-green text-xs font-medium">Slightly higher</p>
                    </a>
                </div>

                <div className=" h-[157px] p-3 bg-white border-[0.823px]  border-[#EDEBEB] rounded-[6.581px] shadow-md dark:bg-gray-800 dark:border-gray-700">
                    {
                        !theme ? < img src={o2} alt="" /> : <img src={bgO2} alt="" />
                    }
                    <a href="#">
                        <h5 className="mb-2 text-[12.339px] font-semibold tracking-normal text-text-color dark:text-white">Oxygen Saturation</h5>
                    </a>
                    <p className="mb-[5px] font-medium text-[16.5px ] text-subtitle dark:text-[#D1D5DB]">
                       97%</p>
                    <a href="#" className="inline-flex items-center gap-1 mb-6 hover:underline">

                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z" fill={!theme ? '#2E1619' : '#D1D5DB'} />
                        </svg>
                        <p className="text-dark-green text-xs font-medium">Slightly higher</p>
                    </a>
                </div>
                <div className=" h-[157px] p-3 bg-white border-[0.823px]  border-[#EDEBEB] rounded-[6.581px] shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img src={sugar} alt="" />
                    <a href="#">
                        <h5 className="mb-2 text-[12.339px] font-semibold tracking-normal text-text-color dark:text-white">Glucose Count</h5>
                    </a>
                    <p className="mb-[5px] font-medium text-[16.5px] text-subtitle dark:text-[#D1D5DB]">
                        100 mm/dl</p>
                    <a href="#" className="inline-flex items-center gap-1 mb-6 hover:underline">

                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z" fill={!theme ? '#2E1619' : '#D1D5DB'} />
                        </svg>
                        <p className="text-dark-green text-xs font-medium">Normal</p>
                    </a>
                </div>

            </div>


            <div className="w-full p-[18.5px] bg-pink/10 
                border-[#EDEBEB] border-[1px] rounded-lg h-[445px] mb-40">
                {/* input area  */}
                {/* <AddTask/> */}
                <div className="flex flex-col items-start justify-center mb-6">

                    <h1 className="text-base font-semibold leading-6 tracking-[0.16px] mb-2 text-text-color dark:text-white">To-Do List</h1>

                    <div className="w-full flex items-center justify-between gap-4 my-5">
                        {/* <textarea name="todo" className="border-[1px] 
                            w-[569px] h-[76px] border-[#EDEBEB] bg-green-400 rounded-lg resize-none"/>
                        <button className="bg-gradient-to-r from-pink-gradient-start to-pink-gradient-end w-[83px] h-[32px] p-3 flex items-center gap-2 text-white rounded-[5px] shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z" fill="#FBFBFB" />
                            </svg>
                            <p className="text-sm font-medium leading-[19.6px]">Add</p>
                        </button> */}
                        <Link to={"/addTask"}><button className="btn btn-sm btn-accent">Add Task</button></Link>
                    </div>
                </div>
                {/* list showcase  */}
                <div className="flex flex-col items-start justify-center">
                    <div className="w-full flex items-center justify-between mb-[26px]">
                        <div className="flex   items-center justify-between gap-4">
                            <span className="flex-1">
                                <input
                                    type="checkbox"

                                    id="myCheckbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className="hidden" />
                                <label htmlFor="myCheckbox">
                                    <div>

                                        {isChecked ?
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="#000">
                                                <path d="M4.69444 0C3.4494 0 2.25535 0.494592 1.37497 1.37497C0.494592 2.25535 0 3.4494 0 4.69444V21.3056C0 22.5506 0.494592 23.7446 1.37497 24.625C2.25535 25.5054 3.4494 26 4.69444 26H21.3056C22.5506 26 23.7446 25.5054 24.625 24.625C25.5054 23.7446 26 22.5506 26 21.3056V4.69444C26 3.4494 25.5054 2.25535 24.625 1.37497C23.7446 0.494592 22.5506 0 21.3056 0H4.69444ZM19.1822 9.79333L11.96 17.0156C11.7569 17.2184 11.4815 17.3324 11.1944 17.3324C10.9074 17.3324 10.632 17.2184 10.4289 17.0156L7.53422 14.1209C7.42778 14.0217 7.34242 13.9021 7.28321 13.7692C7.22399 13.6363 7.19216 13.4929 7.18959 13.3474C7.18702 13.202 7.21378 13.0575 7.26827 12.9226C7.32275 12.7877 7.40385 12.6651 7.50672 12.5623C7.60959 12.4594 7.73213 12.3783 7.86703 12.3238C8.00192 12.2693 8.14641 12.2426 8.29187 12.2451C8.43733 12.2477 8.58078 12.2796 8.71367 12.3388C8.84655 12.398 8.96616 12.4833 9.06533 12.5898L11.1944 14.7174L17.6511 8.26078C17.7511 8.15736 17.8707 8.07488 18.0029 8.01817C18.1351 7.96146 18.2772 7.93164 18.4211 7.93046C18.5649 7.92928 18.7076 7.95675 18.8407 8.01129C18.9738 8.06582 19.0947 8.14632 19.1964 8.24808C19.298 8.34985 19.3784 8.47084 19.4328 8.604C19.4872 8.73717 19.5146 8.87983 19.5133 9.02367C19.512 9.16752 19.482 9.30966 19.4252 9.4418C19.3683 9.57395 19.2857 9.69345 19.1822 9.79333Z" fill="#FF7594" />
                                            </svg>
                                            </> :
                                            <> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <path d="M4.69444 0C3.4494 0 2.25535 0.494592 1.37497 1.37497C0.494592 2.25535 0 3.4494 0 4.69444V21.3056C0 22.5506 0.494592 23.7446 1.37497 24.625C2.25535 25.5054 3.4494 26 4.69444 26H21.3056C22.5506 26 23.7446 25.5054 24.625 24.625C25.5054 23.7446 26 22.5506 26 21.3056V4.69444C26 3.4494 25.5054 2.25535 24.625 1.37497C23.7446 0.494592 22.5506 0 21.3056 0H4.69444ZM19.1822 9.79333L11.96 17.0156C11.7569 17.2184 11.4815 17.3324 11.1944 17.3324C10.9074 17.3324 10.632 17.2184 10.4289 17.0156L7.53422 14.1209C7.42778 14.0217 7.34242 13.9021 7.28321 13.7692C7.22399 13.6363 7.19216 13.4929 7.18959 13.3474C7.18702 13.202 7.21378 13.0575 7.26827 12.9226C7.32275 12.7877 7.40385 12.6651 7.50672 12.5623C7.60959 12.4594 7.73213 12.3783 7.86703 12.3238C8.00192 12.2693 8.14641 12.2426 8.29187 12.2451C8.43733 12.2477 8.58078 12.2796 8.71367 12.3388C8.84655 12.398 8.96616 12.4833 9.06533 12.5898L11.1944 14.7174L17.6511 8.26078C17.7511 8.15736 17.8707 8.07488 18.0029 8.01817C18.1351 7.96146 18.2772 7.93164 18.4211 7.93046C18.5649 7.92928 18.7076 7.95675 18.8407 8.01129C18.9738 8.06582 19.0947 8.14632 19.1964 8.24808C19.298 8.34985 19.3784 8.47084 19.4328 8.604C19.4872 8.73717 19.5146 8.87983 19.5133 9.02367C19.512 9.16752 19.482 9.30966 19.4252 9.4418C19.3683 9.57395 19.2857 9.69345 19.1822 9.79333Z" fill="#a1a1a1" />
                                            </svg>
                                            </>}

                                    </div>
                                </label>
                            </span>

                            <p className="text-text-color font-medium text-sm">Select All</p>
                        </div>
                       
                        <button className="bg-gradient-to-r  from-pink-gradient-start to-pink-gradient-end  
                            h-[32px] p-3 flex items-center gap-2 text-white rounded-[5px] shadow-sm shadow-[rgba(0, 0, 0, 0.25)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z" fill="#FBFBFB" />
                            </svg>
                            <p className="text-sm font-medium leading-[19.6px] ">Done</p>
                        </button>
                    </div>

                    {/* done items list  */}
                    <div className="w-full flex flex-col gap-4 items-center justify-between  pb-[85px]">

                        <div className="flex items-center justify-start  w-full">
                            <span className="pr-4">
                                <input
                                    type="checkbox"

                                    id="myDonebox"
                                    checked={isDone}
                                    onChange={handleDoneboxChange}
                                    className="hidden" />
                                <label htmlFor="myDonebox">
                                    <div>

                                        {isDone ?
                                            <><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <path d="M4.69444 0C3.4494 0 2.25535 0.494592 1.37497 1.37497C0.494592 2.25535 0 3.4494 0 4.69444V21.3056C0 22.5506 0.494592 23.7446 1.37497 24.625C2.25535 25.5054 3.4494 26 4.69444 26H21.3056C22.5506 26 23.7446 25.5054 24.625 24.625C25.5054 23.7446 26 22.5506 26 21.3056V4.69444C26 3.4494 25.5054 2.25535 24.625 1.37497C23.7446 0.494592 22.5506 0 21.3056 0H4.69444ZM19.1822 9.79333L11.96 17.0156C11.7569 17.2184 11.4815 17.3324 11.1944 17.3324C10.9074 17.3324 10.632 17.2184 10.4289 17.0156L7.53422 14.1209C7.42778 14.0217 7.34242 13.9021 7.28321 13.7692C7.22399 13.6363 7.19216 13.4929 7.18959 13.3474C7.18702 13.202 7.21378 13.0575 7.26827 12.9226C7.32275 12.7877 7.40385 12.6651 7.50672 12.5623C7.60959 12.4594 7.73213 12.3783 7.86703 12.3238C8.00192 12.2693 8.14641 12.2426 8.29187 12.2451C8.43733 12.2477 8.58078 12.2796 8.71367 12.3388C8.84655 12.398 8.96616 12.4833 9.06533 12.5898L11.1944 14.7174L17.6511 8.26078C17.7511 8.15736 17.8707 8.07488 18.0029 8.01817C18.1351 7.96146 18.2772 7.93164 18.4211 7.93046C18.5649 7.92928 18.7076 7.95675 18.8407 8.01129C18.9738 8.06582 19.0947 8.14632 19.1964 8.24808C19.298 8.34985 19.3784 8.47084 19.4328 8.604C19.4872 8.73717 19.5146 8.87983 19.5133 9.02367C19.512 9.16752 19.482 9.30966 19.4252 9.4418C19.3683 9.57395 19.2857 9.69345 19.1822 9.79333Z" fill="#FF7594" />
                                            </svg>
                                            </> :
                                            <> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <path d="M4.69444 0C3.4494 0 2.25535 0.494592 1.37497 1.37497C0.494592 2.25535 0 3.4494 0 4.69444V21.3056C0 22.5506 0.494592 23.7446 1.37497 24.625C2.25535 25.5054 3.4494 26 4.69444 26H21.3056C22.5506 26 23.7446 25.5054 24.625 24.625C25.5054 23.7446 26 22.5506 26 21.3056V4.69444C26 3.4494 25.5054 2.25535 24.625 1.37497C23.7446 0.494592 22.5506 0 21.3056 0H4.69444ZM19.1822 9.79333L11.96 17.0156C11.7569 17.2184 11.4815 17.3324 11.1944 17.3324C10.9074 17.3324 10.632 17.2184 10.4289 17.0156L7.53422 14.1209C7.42778 14.0217 7.34242 13.9021 7.28321 13.7692C7.22399 13.6363 7.19216 13.4929 7.18959 13.3474C7.18702 13.202 7.21378 13.0575 7.26827 12.9226C7.32275 12.7877 7.40385 12.6651 7.50672 12.5623C7.60959 12.4594 7.73213 12.3783 7.86703 12.3238C8.00192 12.2693 8.14641 12.2426 8.29187 12.2451C8.43733 12.2477 8.58078 12.2796 8.71367 12.3388C8.84655 12.398 8.96616 12.4833 9.06533 12.5898L11.1944 14.7174L17.6511 8.26078C17.7511 8.15736 17.8707 8.07488 18.0029 8.01817C18.1351 7.96146 18.2772 7.93164 18.4211 7.93046C18.5649 7.92928 18.7076 7.95675 18.8407 8.01129C18.9738 8.06582 19.0947 8.14632 19.1964 8.24808C19.298 8.34985 19.3784 8.47084 19.4328 8.604C19.4872 8.73717 19.5146 8.87983 19.5133 9.02367C19.512 9.16752 19.482 9.30966 19.4252 9.4418C19.3683 9.57395 19.2857 9.69345 19.1822 9.79333Z" fill="#EDEBEB" />
                                            </svg>
                                            </>}

                                    </div>
                                </label>
                            </span>
                            <span className="text-text-color text-[14px] font-medium tracking-[0.14px] leading-[21.98px] pr-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className="text-light-ash text-sm font-medium tracking-[0.14px] leading-[21.98px]">
                                Last Added: 10 sep 2022
                            </span>
                        </div>
                        <div className="flex items-center justify-start  w-full">
                            <span className="pr-4">
                                <input
                                    type="checkbox"

                                    id="myDonebox"
                                    checked={isDone}
                                    onChange={handleDoneboxChange}
                                    className="hidden" />
                                <label htmlFor="myDonebox">
                                    <div>

                                        {isDone ?
                                            <><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <path d="M4.69444 0C3.4494 0 2.25535 0.494592 1.37497 1.37497C0.494592 2.25535 0 3.4494 0 4.69444V21.3056C0 22.5506 0.494592 23.7446 1.37497 24.625C2.25535 25.5054 3.4494 26 4.69444 26H21.3056C22.5506 26 23.7446 25.5054 24.625 24.625C25.5054 23.7446 26 22.5506 26 21.3056V4.69444C26 3.4494 25.5054 2.25535 24.625 1.37497C23.7446 0.494592 22.5506 0 21.3056 0H4.69444ZM19.1822 9.79333L11.96 17.0156C11.7569 17.2184 11.4815 17.3324 11.1944 17.3324C10.9074 17.3324 10.632 17.2184 10.4289 17.0156L7.53422 14.1209C7.42778 14.0217 7.34242 13.9021 7.28321 13.7692C7.22399 13.6363 7.19216 13.4929 7.18959 13.3474C7.18702 13.202 7.21378 13.0575 7.26827 12.9226C7.32275 12.7877 7.40385 12.6651 7.50672 12.5623C7.60959 12.4594 7.73213 12.3783 7.86703 12.3238C8.00192 12.2693 8.14641 12.2426 8.29187 12.2451C8.43733 12.2477 8.58078 12.2796 8.71367 12.3388C8.84655 12.398 8.96616 12.4833 9.06533 12.5898L11.1944 14.7174L17.6511 8.26078C17.7511 8.15736 17.8707 8.07488 18.0029 8.01817C18.1351 7.96146 18.2772 7.93164 18.4211 7.93046C18.5649 7.92928 18.7076 7.95675 18.8407 8.01129C18.9738 8.06582 19.0947 8.14632 19.1964 8.24808C19.298 8.34985 19.3784 8.47084 19.4328 8.604C19.4872 8.73717 19.5146 8.87983 19.5133 9.02367C19.512 9.16752 19.482 9.30966 19.4252 9.4418C19.3683 9.57395 19.2857 9.69345 19.1822 9.79333Z" fill="#FF7594" />
                                            </svg>
                                            </> :
                                            <> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <path d="M4.69444 0C3.4494 0 2.25535 0.494592 1.37497 1.37497C0.494592 2.25535 0 3.4494 0 4.69444V21.3056C0 22.5506 0.494592 23.7446 1.37497 24.625C2.25535 25.5054 3.4494 26 4.69444 26H21.3056C22.5506 26 23.7446 25.5054 24.625 24.625C25.5054 23.7446 26 22.5506 26 21.3056V4.69444C26 3.4494 25.5054 2.25535 24.625 1.37497C23.7446 0.494592 22.5506 0 21.3056 0H4.69444ZM19.1822 9.79333L11.96 17.0156C11.7569 17.2184 11.4815 17.3324 11.1944 17.3324C10.9074 17.3324 10.632 17.2184 10.4289 17.0156L7.53422 14.1209C7.42778 14.0217 7.34242 13.9021 7.28321 13.7692C7.22399 13.6363 7.19216 13.4929 7.18959 13.3474C7.18702 13.202 7.21378 13.0575 7.26827 12.9226C7.32275 12.7877 7.40385 12.6651 7.50672 12.5623C7.60959 12.4594 7.73213 12.3783 7.86703 12.3238C8.00192 12.2693 8.14641 12.2426 8.29187 12.2451C8.43733 12.2477 8.58078 12.2796 8.71367 12.3388C8.84655 12.398 8.96616 12.4833 9.06533 12.5898L11.1944 14.7174L17.6511 8.26078C17.7511 8.15736 17.8707 8.07488 18.0029 8.01817C18.1351 7.96146 18.2772 7.93164 18.4211 7.93046C18.5649 7.92928 18.7076 7.95675 18.8407 8.01129C18.9738 8.06582 19.0947 8.14632 19.1964 8.24808C19.298 8.34985 19.3784 8.47084 19.4328 8.604C19.4872 8.73717 19.5146 8.87983 19.5133 9.02367C19.512 9.16752 19.482 9.30966 19.4252 9.4418C19.3683 9.57395 19.2857 9.69345 19.1822 9.79333Z" fill="#EDEBEB" />
                                            </svg>
                                            </>}

                                    </div>
                                </label>
                            </span>
                            <span className="text-text-color text-[14px] font-medium tracking-[0.14px] leading-[21.98px] pr-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className="text-light-ash text-sm font-medium tracking-[0.14px] leading-[21.98px]">
                                Last Added: 10 sep 2022
                            </span>
                        </div>
                        <div className="flex items-center justify-start  w-full">
                            <span className="pr-4">
                                <input
                                    type="checkbox"

                                    id="myDonebox"
                                    checked={isDone}
                                    onChange={handleDoneboxChange}
                                    className="hidden" />
                                <label htmlFor="myDonebox">
                                    <div>

                                        {isDone ?
                                            <><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <path d="M4.69444 0C3.4494 0 2.25535 0.494592 1.37497 1.37497C0.494592 2.25535 0 3.4494 0 4.69444V21.3056C0 22.5506 0.494592 23.7446 1.37497 24.625C2.25535 25.5054 3.4494 26 4.69444 26H21.3056C22.5506 26 23.7446 25.5054 24.625 24.625C25.5054 23.7446 26 22.5506 26 21.3056V4.69444C26 3.4494 25.5054 2.25535 24.625 1.37497C23.7446 0.494592 22.5506 0 21.3056 0H4.69444ZM19.1822 9.79333L11.96 17.0156C11.7569 17.2184 11.4815 17.3324 11.1944 17.3324C10.9074 17.3324 10.632 17.2184 10.4289 17.0156L7.53422 14.1209C7.42778 14.0217 7.34242 13.9021 7.28321 13.7692C7.22399 13.6363 7.19216 13.4929 7.18959 13.3474C7.18702 13.202 7.21378 13.0575 7.26827 12.9226C7.32275 12.7877 7.40385 12.6651 7.50672 12.5623C7.60959 12.4594 7.73213 12.3783 7.86703 12.3238C8.00192 12.2693 8.14641 12.2426 8.29187 12.2451C8.43733 12.2477 8.58078 12.2796 8.71367 12.3388C8.84655 12.398 8.96616 12.4833 9.06533 12.5898L11.1944 14.7174L17.6511 8.26078C17.7511 8.15736 17.8707 8.07488 18.0029 8.01817C18.1351 7.96146 18.2772 7.93164 18.4211 7.93046C18.5649 7.92928 18.7076 7.95675 18.8407 8.01129C18.9738 8.06582 19.0947 8.14632 19.1964 8.24808C19.298 8.34985 19.3784 8.47084 19.4328 8.604C19.4872 8.73717 19.5146 8.87983 19.5133 9.02367C19.512 9.16752 19.482 9.30966 19.4252 9.4418C19.3683 9.57395 19.2857 9.69345 19.1822 9.79333Z" fill="#FF7594" />
                                            </svg>
                                            </> :
                                            <> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <path d="M4.69444 0C3.4494 0 2.25535 0.494592 1.37497 1.37497C0.494592 2.25535 0 3.4494 0 4.69444V21.3056C0 22.5506 0.494592 23.7446 1.37497 24.625C2.25535 25.5054 3.4494 26 4.69444 26H21.3056C22.5506 26 23.7446 25.5054 24.625 24.625C25.5054 23.7446 26 22.5506 26 21.3056V4.69444C26 3.4494 25.5054 2.25535 24.625 1.37497C23.7446 0.494592 22.5506 0 21.3056 0H4.69444ZM19.1822 9.79333L11.96 17.0156C11.7569 17.2184 11.4815 17.3324 11.1944 17.3324C10.9074 17.3324 10.632 17.2184 10.4289 17.0156L7.53422 14.1209C7.42778 14.0217 7.34242 13.9021 7.28321 13.7692C7.22399 13.6363 7.19216 13.4929 7.18959 13.3474C7.18702 13.202 7.21378 13.0575 7.26827 12.9226C7.32275 12.7877 7.40385 12.6651 7.50672 12.5623C7.60959 12.4594 7.73213 12.3783 7.86703 12.3238C8.00192 12.2693 8.14641 12.2426 8.29187 12.2451C8.43733 12.2477 8.58078 12.2796 8.71367 12.3388C8.84655 12.398 8.96616 12.4833 9.06533 12.5898L11.1944 14.7174L17.6511 8.26078C17.7511 8.15736 17.8707 8.07488 18.0029 8.01817C18.1351 7.96146 18.2772 7.93164 18.4211 7.93046C18.5649 7.92928 18.7076 7.95675 18.8407 8.01129C18.9738 8.06582 19.0947 8.14632 19.1964 8.24808C19.298 8.34985 19.3784 8.47084 19.4328 8.604C19.4872 8.73717 19.5146 8.87983 19.5133 9.02367C19.512 9.16752 19.482 9.30966 19.4252 9.4418C19.3683 9.57395 19.2857 9.69345 19.1822 9.79333Z" fill="#EDEBEB" />
                                            </svg>
                                            </>}

                                    </div>
                                </label>
                            </span>
                            <span className="text-text-color text-[14px] font-medium tracking-[0.14px] leading-[21.98px] pr-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className="text-light-ash text-sm font-medium tracking-[0.14px] leading-[21.98px]">
                                Last Added: 10 sep 2022
                            </span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Todo;
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { Draggable, Droppable } from "react-beautiful-dnd";
// import { DragDropContext } from "react-beautiful-dnd";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../Components/Authprovider/AuthProvider";

// const AllTask = () => {
//     const { user } = useContext(AuthContext);
//     console.log(user, "11");
//     const [task, setTask] = useState([]);
//     const type = ["todo", "ongoing", "completed"];
//     const {
//         data: tasks,
//         isPending,
//         isSuccess,
//     } = useQuery({
//         queryKey: ["tasks", user],
//         queryFn: async () => {
//             const res = await axios.get(
//                 http://localhost:5000/tasks?email=${user?.email}
//             );
//             setTask(res.data);
//             return res.data;
//         },
//     });
//     const onDragEnd = (result) => {
//         const { source, destination } = result;
//         let draggedTodo = tasks.find((todo) => todo._id === result.draggableId);
//         console.log(draggedTodo, "paici");
//         draggedTodo.category = destination.droppableId;
//         let draggedTodoPosition = tasks.findIndex(
//             (todo) => todo._id === source.draggableId
//         );
//         console.log(result);
//         tasks.splice(draggedTodoPosition, 0, draggedTodo.category);
//         axios.put(
//             http://localhost:5000/updateTask?email=${user?.email},
//             draggedTodo
//         );
//     };
//     console.log(tasks);
//     useEffect(() => {
//         window.document.title = "TaskSnap | Add task";
//         console.log(tasks);
//     }, []);
//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <div className="flex gap-5 lg:mt-20 p-4 flex-wrap items-start justify-center ">
//                 {/* 1 */}
//                 {type.map((todos) => (
//                     <Droppable droppableId={todos} key={todos}>
//                         {(provided, snapshot) => (
//                             <div
//                                 ref={provided.innerRef}
//                                 {...provided.droppableProps}
//                                 className={`shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] xl:w-[400px] bg-gradient-to-tr ${snapshot.isDraggingOver
//                                         ? "bg-black/70"
//                                         : todos === "todo"
//                                             ? "from-slate-600 to-amber-500"
//                                             : todos === "ongoing"
//                                                 ? "from-slate-600 to-green-500"
//                                                 : "from-slate-600 to-red-500"
//                                     } `}
//                             >
//                                 <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
//                                     {todos.toUpperCase()}
//                                 </h1>
//                                 {isPending
//                                     ? "loading..."
//                                     : isSuccess
//                                         ? tasks?.map(
//                                             (item, i) =>
//                                                 todos === item.category && (
//                                                     <Draggable key={i} draggableId={item?._id} index={i}>
//                                                         {(provided) => (
//                                                             <div
//                                                                 ref={provided.innerRef}
//                                                                 {...provided.draggableProps}
//                                                                 {...provided.dragHandleProps}
//                                                                 draggable
//                                                                 className={`p-3  ${todos === "todo"
//                                                                         ? "bg-amber-300"
//                                                                         : todos === "ongoing"
//                                                                             ? "bg-emerald-400"
//                                                                             : "bg-red-300"
//                                                                     }  relative flex shadow-md rounded-lg gap-3 items-center mt-3`}
//                                                             >
//                                                                 <div className="absolute -right-1 -top-4 shadow-lg bg-fuchsia-300 p-1 rounded-lg">
//                                                                     {item?.priority}
//                                                                 </div>
//                                                                 <img
//                                                                     src="/todo.svg"
//                                                                     className="h-full"
//                                                                     width={20}
//                                                                     alt=""
//                                                                 />
//                                                                 <div>
//                                                                     <h4 className="text-xl font-semibold">
//                                                                         {item?.title}
//                                                                     </h4>
//                                                                     <p>
//                                                                         Lorem ipsum dolor sit amet, consectetur
//                                                                         adipisicing elit. Tenetur, minus.
//                                                                     </p>
//                                                                     <div className="py-2 flex justify-center gap-4">
//                                                                         <Link to="/">
//                                                                             <img
//                                                                                 src="/edit.svg"
//                                                                                 width={30}
//                                                                                 className="cursor-pointer"
//                                                                                 alt=""
//                                                                             />
//                                                                         </Link>
//                                                                         <Link to="/">
//                                                                             <img
//                                                                                 src="/delete.svg"
//                                                                                 width={30}
//                                                                                 className="cursor-pointer"
//                                                                                 alt=""
//                                                                             />
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         )}
//                                                     </Draggable>
//                                                 )
//                                         )
//                                         : "Not Available"}

//                                 {provided.placeholder}
//                             </div>
//                         )}
//                     </Droppable>
//                 ))}
//                 {/* 2 */}
//                 {/* <Droppable droppableId="ongoing">
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] bg-gradient-to-tr from-slate-600 to-blue-500 "
//               draggable
//             >
//               <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
//                 ongoing List
//               </h1>
//               {arr3.map((item, i) => (
//                 <Draggable key={i} draggableId={item?.id} index={i}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       draggable
//                       className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center mt-3"
//                     >
//                       <img src="/todo.svg" width={20} alt="" />
//                       <p className="">task1</p>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//         <Droppable droppableId="completed">
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] bg-gradient-to-tr from-slate-600 to-blue-500 "
//               draggable
//             >
//               <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
//                 Completed List
//               </h1>
//               {arr2.map((item, i) => (
//                 <Draggable key={i} draggableId={item?.id} index={i}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       draggable
//                       className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center mt-3"
//                     >
//                       <img src="/todo.svg" width={20} alt="" />
//                       <p className="">task1</p>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable> */}
//             </div>
//         </DragDropContext>
//     );
// };