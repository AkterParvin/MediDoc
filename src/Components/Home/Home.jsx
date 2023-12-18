import SideBar from "../Shared/SideBar/SideBar";


const Home = () => {
    return (
        <div className="bg-red-700 h-screen w-full flex">
            <div>
                <SideBar />
            </div>
            <div className="h-screen flex-1 flex-grow  bg-[#F9F9F9]">

            </div>
        </div>
    );
};

export default Home;