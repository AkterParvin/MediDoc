/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Banner = ({ theme }) => {
    return (
        <div className="  ">
            <header className="bg-white dark:bg-gray-900">


                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex ">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg ">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-6xl lg:leading-tight">Best place to manage your <br /> your <span className="text-pink ">tasks</span></h1>

                                <p className="lg:my-6 my-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                                <Link to={"/login"}>    <a href="#_" className="relative inline-block text-lg group">
                                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-100 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-pink">
                                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-pink"></span>
                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                        <span className="relative">Let&#39;s Explore</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </a></Link>
                                {/* <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Explore More</button> */}
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-3xl" src="/Banner2.gif" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                    <div className="w-full my-5 md:my-7 lg:my-20 bg-gray-500" style={{ backgroundImage: "url('https://source.unsplash.com/random/640x480')", backgroundPosition: "center", backgroundBlendMode: "multiply", backgroundSize: "cover" }}>
                        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                            <h1 className="text-5xl antialiased font-semibold leading text-center text-gray-100">Get Our <span className="text-pink">Updates</span></h1>
                            <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">Find out about events and other news</p>
                            <div className="flex flex-row">
                                <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                                <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-pink text-gray-50">Subscribe</button>
                            </div>
                        </div>
                    </div>

                </div>
            </header>


        </div>
    );
};

export default Banner;