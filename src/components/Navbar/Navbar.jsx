import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () =>{
        logOut()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })

    }

    return (
        <div>
            <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 px-6 text-lg ">
                <Logo></Logo>
                <ul className="flex gap-5 flex-col md:flex-row font-bold">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ca786c] " : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ca786c] " : ""
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/faq"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ca786c]  " : ""
                            }
                        >
                            FAQ
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ca786c]  " : ""
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ca786c]  " : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ca786c]  " : ""
                            }
                        >
                            Register
                        </NavLink>
                    </li> */}

                </ul>
                {/* <Link to="/login">
                <button className="btn bg-[#ca786c] text-white px-10 rounded-none">Login</button>
                </Link> */}
                {
                    user ?
                        <button  onClick={handleSignOut} className="btn  bg-[#ca786c] text-white px-10 rounded-none">Sign Out</button>
                        :
                        <Link to='/login'>
                            <button className="btn bg-[#ca786c] text-white px-10 rounded-none">Login</button>
                        </Link>
                }
            </nav>
        </div>
    );
};

export default Navbar;