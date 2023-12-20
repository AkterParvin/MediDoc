import banner from "../../../assets/Svg_sample1.png";
import bp from "../../../assets/Icon_Heart.png";
const Banner = () => {
    // const testResult = "Normal";

    return (
        <div className="  flex justify-center items-center">
           
            {/* left container  */}
            <div className="h-full w-full lg:w-[70%] flex flex-col justify-center items-center px-4">
                {/* Picture part  */}
                <div className="bg-pink flex flex-col lg:flex-row justify-between items-center px-4 lg:gap-20 mb-7 rounded-xl shadow-2xl">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img src={bp} alt="" />
                        <a href="#">
                            <h5 className="mb-2 text-[12.339px] font-semibold tracking-normal text-text-color dark:text-white">Pulse Count</h5>
                        </a>
                        <p className="mb-[6.5px] font-medium text-[16.5px ] text-subtitle dark:text-[#D1D5DB]">
                            60 bpm</p>
                        <a href="#" className="inline-flex items-center gap-1 mb-6 hover:underline">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z" fill="#2E1619" />
                            </svg>
                            <p className="text-dark-green ">Normal</p>
                        </a>
                    </div>

                </div>
                <div></div>

            </div>


            {/* Right container */}
            <div className="h-[50vh] w-[40%] bg-light-green mx-[22px]">

            </div>
        </div>
    );
};

export default Banner;