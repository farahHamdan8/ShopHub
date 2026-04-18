import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ModeContext } from "../Context/ModeContext";

export default function Navbar() {

    const { mode, swap } = useContext(ModeContext);
    const { user, logOut } = useContext(AuthContext);

    return (
            <div className="navbar fixed top-0 w-full h-11 sm:h-15 bg-white px-4 shadow-2xs">
                <div className="container h-full text-taupe-600 mx-auto  flex justify-around items-center">
                    <div className="logo font-bold sm:text-[20px] text-[16px]">ShopHub</div>
                    <div className="Links sm:text-[14px] text-[12px] font-medium flex gap-2 sm:gap-4">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/cart" }>Cart </Link>
                    </div>
                    {!user ? <div className="Auth font-medium sm:text-[14px] text-[10px] flex gap-2 sm:gap-4">
                        {/* onClick={() => {swap("login")}}
                   onClick={() => {swap("signup")}}
                    */}
                        <button onClick={() => { swap("login") }} className="login btn  bg-gray-600  hover:bg-gray-500"><Link to={"/auth"}>Login</Link></button>
                        <button onClick={() => { swap("signup") }} className="signup btn bg-blue-600 hover:bg-blue-500"><Link to={"/auth"}>Signup</Link></button>
                    </div> : <div className="logout sm:text-sm text-[8px] flex items-center sm:gap-3 gap-1">
                        <p className=" font-medium text-taupe-800">Welcome {user.email}</p>
                        <button onClick={logOut} className="bg-mist-600 text-white rounded-sm p-1"><Link to={"/auth"}>Logout</Link></button>
                    </div>}
                </div>
            </div>
    )
};