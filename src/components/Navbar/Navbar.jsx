import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
             <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 px-6 text-lg ">
                <Logo></Logo>
                <ul className="flex gap-5 font-bold">
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
                    {/* <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ca786c] " : ""
                            }
                        >
                            Blog
                        </NavLink>
                    </li> */}
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
                    <li>
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ca786c]  " : ""
                            }
                        >
                            Register
                        </NavLink>
                    </li>
                    
                </ul>
                <Link>
                <button className="btn bg-[#ca786c] text-white px-10 rounded-none">Login</button>
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;