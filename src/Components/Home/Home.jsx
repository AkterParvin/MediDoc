/* eslint-disable no-unused-vars */
import Banner from "../Shared/Banner/Banner";
import SideBar from "../Shared/SideBar/SideBar";
import avatar from "../../assets/Avatar.png";
// import banner from "../../assets/Svg_sample1.png";


const Home = () => {
    return (
        <div className=" h-screen w-full flex ">
            <div>
                <SideBar />
            </div>
            {/* <div className="flex justify-between items-start w-full 
p-5 h-12 mb-6">
                <h2 className="text-[#646F75] text-2xl font-semibold  ml-2">Home</h2>
                <span className="flex justify-center items-center gap-6">
                    <input type="checkbox" className="toggle toggle-md ri" checked />
                    <img src={avatar} alt="profile pic" className="" />
               </span>
            </div> */}
            <div className="flex flex-col  h-screen  flex-grow ">
                <div className="flex justify-between items-start w-full 
p-5 h-12 mb-6">
                    <h2 className="text-[#646F75] text-2xl font-semibold  ml-2">Home</h2>
                    <span className="flex justify-center items-center gap-6">
                        <input type="checkbox" className="toggle toggle-md ri" checked />
                        <img src={avatar} alt="profile pic" className="" />
                    </span>
                </div>
                
                <div >
                    {/* <div className="h-[50vh] w-[60%] flex flex-col justify-center items-center bg-pink">


                    </div>

                    
                    <div className="h-[50vh] w-[40%] bg-light-green mx-[22px]">

                    </div> */}
                     <Banner/> 
                </div>
            </div>

        </div>
    );
};

export default Home;