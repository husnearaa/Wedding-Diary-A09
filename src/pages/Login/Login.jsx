
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";





const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        signIn(email, password)
        .then(result =>{
            console.log(result.user);

            // navigate after login 
            navigate(location ?.state ? location.state : '/');
            
        })
        .catch(error =>{
            console.error(error);
        })

    }

    return (
        <div>
            <div className="bg-slate-300 lg:w-1/3 md:w-1/3 w-4/5 mb-10 mx-auto rounded-md">
                <h2 className="text-2xl my-10 font-bold pt-5 text-center">Please Login!</h2>
                <form onSubmit={handleLogin} className="w-4/5 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#ca786c] text-white">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4 mb-20 pb-5">Don't have an Account? <Link
                    className="text-[#ca786c] font-bold" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;