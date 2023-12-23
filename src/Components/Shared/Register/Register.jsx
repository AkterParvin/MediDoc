import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();
    const { createUser, loginUser, googleRegister, updateUserProfile }=useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default Register;