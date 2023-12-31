import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../AxiosPublic/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;
        console.log(data.PhotoURL, email, password, data.name, data.profession);
        console.log(data);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            profession: data.profession,
                            email: data.email,
                            photo: data.PhotoURL
                        }

                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("user profile info added to the database")
                                    reset();
                                    Swal.fire(
                                        'Sign Up Successfully!',
                                        'You clicked the button!',
                                        'success'
                                    )

                                    navigate('/dashboard');
                                }
                            })

                    })

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    };
    return (
        <><Helmet>
            <title>UptoDate | Register</title>
        </Helmet>
            <div className="relative h-full">
                <div style={{ backgroundImage: "url(/register-bg.png)", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', }} className="blur-sm backdrop-blur-3xl absolute w-full h-full inset-0 z-0"></div>
                <div className="flex w-full max-w-sm mx-auto items-center justify-center overflow-hidden  rounded-lg  dark:bg-gray-800 lg:max-w-6xl py-10 ">
                    <div className="w-full px-6 py-8 md:px-12 lg:w-[35%] bg-white  rounded-xl shadow-2xl shadow-gray-500 z-50">
                        <div className="flex gap-2  justify-center items-center mx-auto">
                            <img className="w-auto h-6 sm:h-8" src='/logo.png' alt="Logo" />
                            <h1
                                className='text-[#384449] origin-left  text-2xl font-medium'
                            >
                                Upto<span className="text-[#FF7594]">Date</span>
                            </h1>
                        </div>
                        {/* welcome  */}
                        <div className="flex items-center justify-between my-2">
                            <span className="w-1/5 border-b border-pink dark:border-gray-600 lg:w-1/4"></span>
                            <span>
                                <p className="mt-3 text-xl text-center text-text-color dark:text-gray-200">
                                    Signup!
                                </p>

                            </span>
                            <span className="w-1/5 border-b border-pink dark:border-gray-400 lg:w-1/4"></span>
                        </div>
                        {/* Form Div  */}
                         <form onSubmit={handleSubmit(onSubmit)}>
                            {error && <span className="text-sm my-2 font-semibold text-red-700">
                                {error}
                            </span>}
                            <div className="relative z-0 w-full my-6 group mt-4">
                                <input
                                    type="text"
                                    name="name"
                                    {...register("name", { required: true})}
                                    className="block py-2.5  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-ash peer"
                                    placeholder=" "
                                />
                                {errors.name && <span className="text-sm font-semibold text-red-700">
                                    This field is required
                                </span>}
                                <label
                                    className="peer-focus:font-medium absolute text-sm text-text-color dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink peer-focus:dark:text-ash peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Full Name
                                </label>
                            </div>
                            <div className="relative z-0 w-full my-6 group mt-4">
                                <input
                                    type="text"
                                    name="profession"
                                    {...register("profession", { required: true})}
                                    className="block py-2.5  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-ash peer"
                                    placeholder=" "
                                />
                                {errors.name && <span className="text-sm font-semibold text-red-700">
                                    This field is required
                                </span>}
                                <label
                                    className="peer-focus:font-medium absolute text-sm text-text-color dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink peer-focus:dark:text-ash peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                  Profession
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group mt-4">
                                <input
                                    type="text"
                                    name="PhotoURL"
                                    {...register("PhotoURL", { required: true })}
                                    className="block py-2.5  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-amber-800 peer"
                                    placeholder=" "
                                />
                                {errors.PhotoURL && <span className="text-sm font-semibold text-red-700">
                                    User Photo URL is required
                                </span>}
                                <label
                                    className="peer-focus:font-medium absolute text-sm text-text-color dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-800 peer-focus:dark:text-amber-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Photo URL
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group mt-4">
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                    className="block py-2.5  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-amber-800 peer"
                                    placeholder=" "
                                />
                                {errors.email && <span className="text-sm font-semibold text-red-700">
                                    {errors.email && <span className="text-sm font-semibold text-red-700">
                                        User Email Error Occured!!
                                    </span>}
                                </span>}
                                <label
                                    className="peer-focus:font-medium absolute text-sm text-text-color dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-800 peer-focus:dark:text-amber-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email address
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/

                                    })}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-amber-800 peer"
                                    placeholder=" "
                                />
                                {errors.password?.type === 'required' && <span className="text-sm font-semibold text-red-700">
                                    Password is required
                                </span>}
                                {errors.password?.type === 'maxLength' && <span className="text-sm font-semibold text-red-700">
                                    Password max length is 20 characters
                                </span>}
                                {errors.password?.type === 'minLength' && <span className="text-sm font-semibold text-red-700">
                                    6 characters required for  Password
                                </span>}
                                {errors.password?.type === 'pattern' && <span className="text-sm font-semibold text-red-700">
                                    Password must contain a capital letter,a small letter and a special character
                                </span>}
                                <label
                                    className="peer-focus:font-medium absolute text-sm text-text-color dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Password
                                </label>
                            </div>

                            <div className="mt-4 ">

                                <input
                                    type='submit'
                                    // disabled={disabled}
                                    value='Signup'
                                    // className='btn btn-sm w-full'
                                    className="w-full  btn btn-sm  font-medium tracking-wide text-white text-lg  capitalize transition-colors duration-300 transform bg-ash rounded-lg hover:bg-pink  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                                />


                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Register;