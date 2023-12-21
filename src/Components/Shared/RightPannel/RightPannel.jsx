import pic from "../../../assets/Svg_sample2.png";

const RightPannel = () => {
    return (
        <div className=" w-[452px]  mx-[22px] px-4">

            {/* Upcoming Appointments */}
            <div className="bg-white p-4 border border-[#EDEBEB] rounded-lg shadow-lg mb-2 w-[452px]">

                <h2 className="mb-4 text-text-color font-medium tracking-[0.16px] leading-[24px]">Upcoming Appointments</h2>
                <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 my-2">
                    <li className="mb-[8px] ms-7 flex items-center bg-[#FFF5F5] border-[1px]  border-[#FDDAD6] rounded-lg h-[103px]">
                        <span className="absolute flex items-start justify-center w-5 h-5 bg-transparent rounded-full -start-2.5  dark:ring-gray-900 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <circle cx="5" cy="5.95679" r="5" fill="#FF9898" />
                            </svg>
                        </span>

                        {/* date svg  */}
                        <span className="relative w-[65px] h-[103px] flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="103" viewBox="0 0 65 103" fill="none" className="absolute -left-3">
                                <path d="M14.4043 1H50.5957C57.9987 1 64 8.66427 64 18.1186V84.8814C64 94.3357 57.9987 102 50.5957 102H14.4043C7.00129 102 1 94.3357 1 84.8814V18.1186C1 8.66427 7.00129 1 14.4043 1Z" fill="white" stroke="#EDEBEB" />
                            </svg>
                            {/* date */}
                            <span className="absolute w-full h-full flex flex-col  items-center overflow-hidden 
                                right-[22%] top-3 gap-2  text-[#384449]">
                                <p className="text-[13px] font-medium leading-[16px] opacity-[0.6] ">2022</p>
                                <p className="text-xl font-semibold leading-[18px]">13</p>
                                <p className="text-xl font-medium leading-[16px] opacity-[0.6]">Sep</p>
                            </span>
                        </span>
                        {/* name and button  */}
                        <span className=" ">
                            <h3 className="font-medium leading-[24px] text-[16px] mb-[2px]
                                tracking-[0.16px] text-[#384449]">Dr. Muhammad Abdul Hussein</h3>
                            <p className="text-sm text-text-color 
                                text-[13px] font-normal leading-[19.5px] tracking-[0.13px] mb-[2px]">Cardiologist</p>
                            <span className="flex items-center gap-2 mb-[2px]">
                                <button className="flex items-center bg-white gap-[9px] rounded-[5px] border border-[#F5F5F5] p-[8px]">
                                    <p className="text-[#8A8686] 
                                        text-[14px] font-medium
                                        leading-[19.6px]">Slot</p> <p className="text-[#384449] font-medium text-[14px]">Morning</p>
                                </button>
                                <button className="flex items-center bg-white gap-[9px] rounded-[5px] border border-[#F5F5F5] p-[8px]">
                                    <p className="text-[#8A8686] 
                                        text-[14px] font-medium leading-[19.6px]">Time</p>
                                    <p className="text-[#384449] font-medium text-[14px]">10.00 Am</p>
                                </button>
                            </span>
                        </span>

                    </li>
                    <li className="mb-[8px] ms-7 flex items-center bg-[#FFF5F5] border-[1px] border-[#FDDAD6] rounded-lg h-[103px]">
                        <span className="absolute flex items-center justify-center w-5 h-5 bg-transparent rounded-full -start-2.5  dark:ring-gray-900 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <circle cx="5" cy="5.95679" r="5" fill="#FFF598" />
                            </svg>
                        </span>

                        {/* date svg  */}
                        <span className="relative w-[65px] h-[103px] flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="103" viewBox="0 0 65 103" fill="none" className="absolute -left-3">
                                <path d="M14.4043 1H50.5957C57.9987 1 64 8.66427 64 18.1186V84.8814C64 94.3357 57.9987 102 50.5957 102H14.4043C7.00129 102 1 94.3357 1 84.8814V18.1186C1 8.66427 7.00129 1 14.4043 1Z" fill="white" stroke="#EDEBEB" />
                            </svg>
                            {/* date */}
                            <span className="absolute w-full h-full flex flex-col  items-center overflow-hidden 
                                right-[22%] top-3 gap-2  text-[#384449]">
                                <p className="text-[13px] font-medium leading-[16px] opacity-[0.6] ">2022</p>
                                <p className="text-xl font-semibold leading-[18px]">13</p>
                                <p className="text-xl font-medium leading-[16px] opacity-[0.6]">Sep</p>
                            </span>
                        </span>
                        {/* name and button  */}
                        <span className=" ">
                            <h3 className="font-medium leading-[24px] text-[16px] mb-[2px]
                                tracking-[0.16px] text-[#384449]">Dr. Muhammad Abdul Hussein</h3>
                            <p className="text-sm text-text-color 
                                text-[13px] font-normal leading-[19.5px] tracking-[0.13px] mb-[2px]">Cardiologist</p>
                            <span className="flex items-center gap-2 mb-[2px]">
                                <button className="flex items-center bg-white gap-[9px] rounded-[5px] border border-[#F5F5F5] p-[8px]">
                                    <p className="text-[#8A8686] 
                                        text-[14px] font-medium
                                        leading-[19.6px]">Slot</p> <p className="text-[#384449] font-medium text-[14px]">Morning</p>
                                </button>
                                <button className="flex items-center bg-white gap-[9px] rounded-[5px] border border-[#F5F5F5] p-[8px]">
                                    <p className="text-[#8A8686] 
                                        text-[14px] font-medium leading-[19.6px]">Time</p>
                                    <p className="text-[#384449] font-medium text-[14px]">10.00 Am</p>
                                </button>
                            </span>
                        </span>

                    </li>
                    <li className="mb-[8px] ms-7 flex items-center bg-[#FFF5F5] border-[1px] border-[#FDDAD6] rounded-lg h-[103px]">
                        <span className="absolute flex items-center justify-center w-5 h-5 bg-transparent rounded-full -start-2.5  dark:ring-gray-900 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <circle cx="5" cy="5.95679" r="5" fill="#98FFC1" />
                            </svg>
                        </span>

                        {/* date svg  */}
                        <span className="relative w-[65px] h-[103px] flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="103" viewBox="0 0 65 103" fill="none" className="absolute -left-3">
                                <path d="M14.4043 1H50.5957C57.9987 1 64 8.66427 64 18.1186V84.8814C64 94.3357 57.9987 102 50.5957 102H14.4043C7.00129 102 1 94.3357 1 84.8814V18.1186C1 8.66427 7.00129 1 14.4043 1Z" fill="white" stroke="#EDEBEB" />
                            </svg>
                            {/* date */}
                            <span className="absolute w-full h-full flex flex-col  items-center overflow-hidden 
                                right-[22%] top-3 gap-2  text-[#384449]">
                                <p className="text-[13px] font-medium leading-[16px] opacity-[0.6] ">2022</p>
                                <p className="text-xl font-semibold leading-[18px]">13</p>
                                <p className="text-xl font-medium leading-[16px] opacity-[0.6]">Sep</p>
                            </span>
                        </span>
                        {/* name and button  */}
                        <span className=" ">
                            <h3 className="font-medium leading-[24px] text-[16px] mb-[2px]
                                tracking-[0.16px] text-[#384449]">Dr. Muhammad Abdul Hussein</h3>
                            <p className="text-sm text-text-color 
                                text-[13px] font-normal leading-[19.5px] tracking-[0.13px] mb-[2px]">Cardiologist</p>
                            <span className="flex items-center gap-2 mb-[2px]">
                                <button className="flex items-center bg-white gap-[9px] rounded-[5px] border border-[#F5F5F5] p-[8px]">
                                    <p className="text-[#8A8686] 
                                        text-[14px] font-medium
                                        leading-[19.6px]">Slot</p> <p className="text-[#384449] font-medium text-[14px]">Morning</p>
                                </button>
                                <button className="flex items-center bg-white gap-[9px] rounded-[5px] border border-[#F5F5F5] p-[8px]">
                                    <p className="text-[#8A8686] 
                                        text-[14px] font-medium leading-[19.6px]">Time</p>
                                    <p className="text-[#384449] font-medium text-[14px]">10.00 Am</p>
                                </button>
                            </span>
                        </span>

                    </li>

                    <li className="mb-[8px] ms-7 flex items-center bg-[#FFF5F5] border-[1px] border-[#FDDAD6] rounded-lg h-[103px]">
                        <span className="absolute flex items-center justify-center w-5 h-5 bg-transparent rounded-full -start-2.5  dark:ring-gray-900 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <circle cx="5" cy="5.95679" r="5" fill="#98C7FF" />
                            </svg>
                        </span>

                        {/* date svg  */}
                        <span className="relative w-[65px] h-[103px] flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="103" viewBox="0 0 65 103" fill="none" className="absolute -left-3">
                                <path d="M14.4043 1H50.5957C57.9987 1 64 8.66427 64 18.1186V84.8814C64 94.3357 57.9987 102 50.5957 102H14.4043C7.00129 102 1 94.3357 1 84.8814V18.1186C1 8.66427 7.00129 1 14.4043 1Z" fill="white" stroke="#EDEBEB" />
                            </svg>
                            {/* date */}
                            <span className="absolute w-full h-full flex flex-col  items-center overflow-hidden 
                                right-[22%] top-3 gap-2  text-[#384449]">
                                <p className="text-[13px] font-medium leading-[16px] opacity-[0.6] ">2022</p>
                                <p className="text-xl font-semibold leading-[18px]">13</p>
                                <p className="text-xl font-medium leading-[16px] opacity-[0.6]">Sep</p>
                            </span>
                        </span>
                        {/* name and button  */}
                        <span className=" ">
                            <h3 className="font-medium leading-[24px] text-[16px] mb-[2px]
                                tracking-[0.16px] text-[#384449]">Dr. Muhammad Abdul Hussein</h3>
                            <p className="text-sm text-text-color 
                                text-[13px] font-normal leading-[19.5px] tracking-[0.13px] mb-[2px]">Cardiologist</p>
                            <span className="flex items-center gap-2 mb-[2px]">
                                <button className="flex items-center bg-white gap-[9px] rounded-[5px] border border-[#F5F5F5] p-[8px]">
                                    <p className="text-[#8A8686] 
                                        text-[14px] font-medium
                                        leading-[19.6px]">Slot</p> <p className="text-[#384449] font-medium text-[14px]">Morning</p>
                                </button>
                                <button className="flex items-center bg-white gap-[9px] rounded-[5px] border border-[#F5F5F5] p-[8px]">
                                    <p className="text-[#8A8686] 
                                        text-[14px] font-medium leading-[19.6px]">Time</p>
                                    <p className="text-[#384449] font-medium text-[14px]">10.00 Am</p>
                                </button>
                            </span>
                        </span>

                    </li>
                </ol>

            </div>
            {/* Covid-19 Updates */}
            <div className="flex flex-col border border-[#EDEBEB] rounded-lg bg-white w-[452px] px-5 py-2 shadow-lg">
                <div className="flex items-start justify-between mb-2">
                    <h2 className="text-text-color font-medium text-[14px] leading-[19.6px] ">Covid-19 Updates</h2>
                    <span className="text-right">
                        <p className="text-text-color font-medium text-[14px] leading-[19.6px] ">10 September 2022</p>
                        <p className="text-[#8A8686] font-normal text-[14px] leading-[19.6px]">Thursday 10:00:00 AM </p>
                    </span>
                </div>
                <div className="flex items-center gap-[11px] w-[416px]">
                    <img src={pic} alt="" className="w-[228px] h-[228px]"/>
                    <div className="flex items-start flex-1">
                        <span className="h-[190px] w-full text-center space-y-2 pt-[14px]" style={{ background: "linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)" }}>
                            <h2 className="text-[#FBFBFB] 
                            text-[14px] leading-[19.6px] font-medium">Infection Number </h2>
                            <h2 className="text-[#FBFBFB] text-[38.407px] font-medium leading-[53.77px]">500</h2>
                            <h2 className="text-[#FBFBFB] 
                            text-[14px] leading-[19.6px] font-medium">Infection Rate </h2>
                            <h2 className="text-[#FBFBFB] text-[38.407px] font-medium leading-[53.77px]">10%</h2>
                        </span>
                        <p className="w-[4px] h-[113px] 
                        rounded-[2px] bg-[#FF7590]"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightPannel;