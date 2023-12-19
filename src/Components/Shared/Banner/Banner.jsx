import banner from "../../../assets/Svg_sample1.png";
const Banner = () => {
    return (
        <div className="  flex justify-center items-center">
           
            {/* left container  */}
            <div className="h-full w-[70%] flex flex-col justify-center items-center ">
                {/* Picture part  */}
                <div className="bg-pink flex justify-between items-center px-4 gap-20 mb-7 rounded-xl shadow-2xl">
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
                <div></div>
                <div></div>

            </div>


            {/* Right container */}
            <div className="h-[50vh] w-[40%] bg-light-green mx-[22px]">

            </div>
        </div>
    );
};

export default Banner;