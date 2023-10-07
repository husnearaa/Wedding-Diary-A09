

import { NavLink } from "react-router-dom";
import Logo from "./Logo";




const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 px-6 shadow-xl ">
                <Logo></Logo>
                <ul className="flex gap-5">
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
                    
                </ul>
                <button className="btn bg-[#ca786c] text-white px-10 rounded-none">Login</button>
            </nav>
        </div>
    );
};

export default Navbar;