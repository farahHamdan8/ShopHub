import { useState } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {

    const { mode, swap } = useContext(ModeContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { login, signup } = useContext(AuthContext);
    const [error, setErrors] = useState(null);
    const navigate = useNavigate();

    function onSubmit(data) {
        let result;
        if (mode === "signup") {
            result = signup(data.email, data.password);
        } else {
            result = login(data.email, data.password);
        }
        if (result.success) {
            navigate("/cart");
        } else {
            setErrors(result.error);
        }
    }

    return (
        <div className="auth w-full h-full py-20 flex justify-center ">
            <div className=" bg-white   shadow-xl w-  rounded-2xl px-4 py-5">
                <p className="font-medium p-2 text-center">To Complete Your Order Should Signup in Website</p>
                {mode === "signup" ? <h1 className="font-medium text-xl">SignUp</h1> : <h1 className="font-medium text-xl">Login</h1>}
                <form onSubmit={handleSubmit(onSubmit)} className="p-2 mt-5 flex flex-col gap-4">
                    {error && <div className="error ">{error}</div>}
                    <label>Email
                        <input type="email" className="w-full my-2  py-0.5 px-1.5 border-gray-200 border focus:outline-0  focus:border-blue-400"
                            {...register('email', { required: "Email is required" })} />
                        {errors.email && (<span className="error ">{errors.email.message}</span>)}
                    </label>
                    <label>Password
                        <input type="password" className="w-full my-2  py-0.5 px-1.5 border-gray-200 border focus:outline-0  focus:border-blue-400"
                            {...register('password', { required: "Password is required" })} />
                        {errors.password && (<span className="error ">{errors.password.message}</span>)}
                    </label>
                    <button type="submit" className="bg-blue-600 shadow-xl hover:cursor-pointer hover:bg-blue-500  text-white w-20 rounded-sm p-1">{mode === "signup" ? "SignUp" : "Login"}</button>
                </form>
                {mode === "login" ? <p className="p-4">Don't have an account? <span onClick={() => { swap("signup") }} className="text-blue-600 hover:cursor-pointer"><Link to={"/auth"}>Sign Up</Link></span></p> :
                    <p className="p-4">Already have an account? <span onClick={() => { swap("login") }} className="text-blue-600 hover:cursor-pointer"><Link to={"/auth"}>Login</Link></span></p>}
            </div>
        </div>
    )

}