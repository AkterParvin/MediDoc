import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className="bg-bg-light">
           
            <Outlet/>
           
        </div>
    );
};

export default Root;