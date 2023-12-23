import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";
import Footer from "../Shared/Footer/Footer";



const Root = () => {
    return (
        <div >
            <div className=" dark:bg-gradient-to-br dark:from-[#150A09] dark:via-[#150A09] dark:to-[#2E1619] bg-bg-light dark:text-  w-full flex ">
                <div className="z-50">
                    <SideBar />
                </div>

                <div className="flex flex-col   flex-grow z-10">
                    <Outlet />
                    
                </div>
                

            </div>


            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;