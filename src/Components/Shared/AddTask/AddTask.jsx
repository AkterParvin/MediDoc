import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const AddTask = () => {
    useEffect(() => {
        window.document.title = "TaskSpan | Add task";
    }, []);
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [publishing, setPublishing] = useState(false);

    const onSubmit = async (data, e) => {
        e.preventDefault();
        setPublishing(true);
        const title = data.title;
        const priority = data.priority;
        const date = data.date;
        const des = data.des;

        const Info = {
            title,
            email: user?.email,
            priority,
            deadline: date,
            description: des,
        };
        axios
            .post(
                "https://task-management-server-eight-topaz.vercel.app/addTask",
                Info
            )
            .then(() => {
                setPublishing(false);
                e.target.reset();
                toast.success("Successfully Inserted!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch(() => {
                setPublishing(false);
            });
    };
    return (
        <div className="flex flex-col items-center justify-center">

            {/* <h1 className="text-base font-semibold leading-6 tracking-[0.16px] mb-2 text-text-color dark:text-white">To-Do List</h1> */}

            {/* <div className="w-full flex items-center justify-between gap-4">
                <textarea name="todo" className="border-[1px] 
                            w-[569px] h-[76px] border-[#EDEBEB] bg-green-400 rounded-lg resize-none"/>
                <button className="bg-gradient-to-r from-pink-gradient-start to-pink-gradient-end w-[83px] h-[32px] p-3 flex items-center gap-2 text-white rounded-[5px] shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z" fill="#FBFBFB" />
                    </svg>
                    <p className="text-sm font-medium leading-[19.6px]">Add</p>
                </button>
            </div> */}

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                    <a
                        href="/"
                        aria-label="View"
                        className="inline-block  rounded-full sm:mx-auto"
                    >
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-text-color sm:text-3xl sm:leading-none">
                        Add New Task
                    </h2>
                    
                    <p className="text-base text-gray-700 md:text-sm sm:px-4">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                       
                    </p>
                    <hr className="w-full mt-4 border-gray-300" />
                </div>
            </div>

            <div className="text-black max-w-full  mx-auto h-screen flex items-start justify-start flex-col  lg:mb-0">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-gradient-to-b from-pink via-text-color/80 to-ash/70 w-full md:w-2/3 lg:w-[400px]   p-8 rounded-lg drop-shadow-2xl"
                >
                   
                    <div>
                        <label
                            htmlFor="title"
                            className="block mb-2  text-sm italic font-bold uppercase text-white"
                        >
                            Task Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            {...register("title", {
                                required: "Title is required!",
                            })}
                            placeholder="Task title "
                            className=" rounded-md py-1 pl-2 mb-2 block outline-light-green    w-full border border-gray-400  text-sm"
                        />
                        {errors.title && (
                            <span className="text-red-700 text-xs">
                                {errors.title.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 text-sm italic font-bold uppercase text-white">
                            Priority
                        </label>

                        <select
                            name="priority"
                            {...register("priority")}
                            id=""
                            className="text-sm mb-2 py-1 pl-2  rounded-md"
                        >
                            <option value="Later">Later</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="date"
                            className="block mb-2  text-sm italic font-bold uppercase text-white"
                        >
                            Timeline
                        </label>
                        <input
                            id="date"
                            type="datetime-local"
                            {...register("date", {
                                required: "Deadline is required!",
                            })}
                            placeholder="article title here"
                            className=" rounded-md py-1 pl-2 mb-2 block outline-light-green    w-full border border-gray-400  text-sm"
                        />
                        {errors.date && (
                            <span className="text-red-700 text-xs">
                                {errors.date.message}
                            </span>
                        )}
                    </div>

                    <label
                        htmlFor="article"
                        className="block mb-2  text-sm italic font-bold uppercase text-white"
                    >
                        Task Description
                    </label>
                    <textarea
                        className=" resize-none rounded-md shadow-xl outline-light-green block w-full border border-gray-400  text-sm "
                        rows="3"
                        id="article"
                        {...register("des", {
                            minLength: {
                                value: 20,
                                message: "Description should be at least 20 character!",
                            },
                        })}
                        placeholder="This is about..."
                    ></textarea>
                    {errors.des && (
                        <span className="text-red-700 text-xs">{errors.des.message}</span>
                    )}
                    <button
                        className={`mt-6  mx-auto flex items-center gap-3 justify-center  rounded-none  bg-transparent text-white hover:text-black hover:bg-white border-white border-2 ease-linear px-4 py-2 duration-300`}
                    >
                        {publishing ? "loading..." : "Continue"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;