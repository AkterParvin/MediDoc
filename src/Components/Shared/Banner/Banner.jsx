import banner from "../../../assets/Svg_sample1.png";
import bp from "../../../assets/Icon_Heart.png";
import { useState } from "react";
const Banner = () => {
    // const testResult = "Normal";
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const [isDone, setIsDone] = useState(false);
    const handleDoneboxChange = () => {
        setIsDone(!isDone);
    }
    return (
        <div className="  flex justify-center items-start">

            {/* left container  */}
            <div className=" w-full lg:w-[718px] flex flex-col justify-center items-center px-4">
                {/* Picture part  */}
                <div className="bg-pink flex flex-col lg:flex-row justify-between items-center px-4 h-[213px] lg:gap-20 w-full mb-7 rounded-xl shadow-2xl">
                    <div className="flex-1">
                        <img src={banner} alt="" />
                    </div>
                    <div className=" flex flex-col space-y-3 text-white ">
                        <h2 className="text-2xl font-semibold ">Hello, Mary Jane!</h2>
                        <p className="text-base font-medium leading-[150%]">Stay Up-to-Date with your appointments.</p>
                        <p className="text-base font-medium leading-[150%]">You Have No pending Reports</p>
                    </div>
                </div>
                {/* small card  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[37px]">

                    <div className="max-w-sm w-[157px] h-[157px] p-6 bg-white border-[0.823px]  border-[#EDEBEB] rounded-[6.581px] shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img src={bp} alt="" className="mb-2" />
                        <a href="#">
                            <h5 className="mb-2 text-[12.339px] font-semibold tracking-normal text-text-color dark:text-white">Pulse Count</h5>
                        </a>
                        <p className="mb-[5px] font-medium text-[16.5px ] text-subtitle dark:text-[#D1D5DB]">
                            60 bpm</p>
                        <a href="#" className="inline-flex items-center gap-1 mb-6 hover:underline">

                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z" fill="#2E1619" />
                            </svg>
                            <p className="text-dark-green text-xs font-medium">Normal</p>
                        </a>
                    </div>
                    <div className="max-w-sm w-[157px] h-[157px] p-6 bg-white border-[0.823px]  border-[#EDEBEB] rounded-[6.581px] shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img src={bp} alt="" />
                        <a href="#">
                            <h5 className="mb-2 text-[12.339px] font-semibold tracking-normal text-text-color dark:text-white">Pulse Count</h5>
                        </a>
                        <p className="mb-[5px] font-medium text-[16.5px ] text-subtitle dark:text-[#D1D5DB]">
                            60 bpm</p>
                        <a href="#" className="inline-flex items-center gap-1 mb-6 hover:underline">

                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z" fill="#2E1619" />
                            </svg>
                            <p className="text-dark-green text-xs font-medium">Normal</p>
                        </a>
                    </div>
                    <div className="max-w-sm w-[157px] h-[157px] p-6 bg-white border-[0.823px]  border-[#EDEBEB] rounded-[6.581px] shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img src={bp} alt="" />
                        <a href="#">
                            <h5 className="mb-2 text-[12.339px] font-semibold tracking-normal text-text-color dark:text-white">Pulse Count</h5>
                        </a>
                        <p className="mb-[5px] font-medium text-[16.5px ] text-subtitle dark:text-[#D1D5DB]">
                            60 bpm</p>
                        <a href="#" className="inline-flex items-center gap-1 mb-6 hover:underline">

                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z" fill="#2E1619" />
                            </svg>
                            <p className="text-dark-green text-xs font-medium">Normal</p>
                        </a>
                    </div>
                    <div className="max-w-sm w-[157px] h-[157px] p-6 bg-white border-[0.823px]  border-[#EDEBEB] rounded-[6.581px] shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img src={bp} alt="" />
                        <a href="#">
                            <h5 className="mb-2 text-[12.339px] font-semibold tracking-normal text-text-color dark:text-white">Pulse Count</h5>
                        </a>
                        <p className="mb-[5px] font-medium text-[16.5px ] text-subtitle dark:text-[#D1D5DB]">
                            60 bpm</p>
                        <a href="#" className="inline-flex items-center gap-1 mb-6 hover:underline">

                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z" fill="#2E1619" />
                            </svg>
                            <p className="text-dark-green text-xs font-medium">Normal</p>
                        </a>
                    </div>

                </div>


                <div className="w-[718px] p-[18.5px] bg-white 
                border-[#EDEBEB] border-[1px] rounded-lg h-[445px] mb-40">
                    {/* input area  */}
                    <div className="flex flex-col items-start justify-center mb-6">

                        <h1 className="text-base font-semibold leading-6 tracking-[0.16px] mb-2 text-text-color dark:text-white">To-Do List</h1>

                        <div className="w-[668px] flex items-center gap-4">
                            <textarea name="todo" className="border-[1px] 
                            w-[569px] h-[76px] border-[#EDEBEB] rounded-lg resize-none"/>
                            <button className="bg-gradient-to-r from-pink-gradient-start to-pink-gradient-end w-[83px] h-[32px] p-3 flex items-center gap-2 text-white rounded-[5px] shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z" fill="#FBFBFB" />
                                </svg>
                                <p className="text-sm font-medium leading-[19.6px]">Add</p>
                            </button>
                        </div>
                    </div>
                    {/* list showcase  */}
                    <div className="flex flex-col items-start justify-center">
                        <div className="w-full flex items-center justify-between mb-[26px]">
                            <div className="flex items-center justify-between gap-4">
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

                                <p className="text-text-color font-medium text-sm">Select All</p>
                            </div>
                            {/* <button className="bg-gradient-to-r from-pink-gradient-start to-pink-gradient-end w-[83px] h-[32px] p-3 flex items-center gap-2 text-white rounded-[5px] shadow-sm mr-[8px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z" fill="#FBFBFB" />
                                </svg>
                                <p className="text-sm font-medium leading-[19.6px]">Done</p>
                            </button> */}
                            <button className="bg-gradient-to-r from-pink-gradient-start to-pink-gradient-end  
                            h-[32px] p-3 flex items-center gap-2 text-white rounded-[5px] shadow-sm shadow-[rgba(0, 0, 0, 0.25)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z" fill="#FBFBFB" />
                                </svg>
                                <p className="text-sm font-medium leading-[19.6px]">Done</p>
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


            {/* Right container */}
            <div className="h-[50vh] w-[452px] bg-light-green mx-[22px] p-4">
                {/* Upcoming Appointments */}
                <div className="">


                    <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight">Personal Info</h3>
                            <p className="text-sm">Step details here</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight">Account Info</h3>
                            <p className="text-sm">Step details here</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight">Review</h3>
                            <p className="text-sm">Step details here</p>
                        </li>
                        <li className="ms-6">
                            <span className="absolute flex items-center justify-center w-5 h-5 bg-transparent rounded-full -start-2.5  dark:ring-gray-900 dark:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                    <circle cx="5" cy="5.95679" r="5" fill="#98FFC1" />
                                </svg>
                            </span>
                            <div className="bg-[#FFF5F5] flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="103" viewBox="0 0 65 103" fill="none">
                                        <path d="M14.4043 1H50.5957C57.9987 1 64 8.66427 64 18.1186V84.8814C64 94.3357 57.9987 102 50.5957 102H14.4043C7.00129 102 1 94.3357 1 84.8814V18.1186C1 8.66427 7.00129 1 14.4043 1Z" fill="white" stroke="#EDEBEB" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight">Confirmation</h3>
                                <p className="text-sm">Step details here</p>
                            </div>
                            
                        </li>
                    </ol>

                </div>
                {/* Covid-19 Updates */}
                <div></div>
            </div>
        </div>
    );
};

export default Banner;