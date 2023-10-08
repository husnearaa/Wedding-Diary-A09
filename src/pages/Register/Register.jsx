import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
    

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);


          // create user
          createUser(email, password)
          .then(result =>{
              console.log(result.user)
          })
          .catch(error =>{
              console.error(error)
          })

    }

    return (
        <div>
            <div  className="bg-slate-300 lg:w-1/3 md:w-1/3 w-4/5 mb-10  mx-auto rounded-md">
                <h2 className="text-2xl my-10 font-bold pt-5 text-center">Please Register!</h2>
                <form onSubmit={handleRegister} className="w-4/5 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
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
                        <button className="btn bg-[#ca786c] text-white">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4 mb-20 pb-5">Already have an Account? <Link
                    className="text-[#ca786c] font-bold" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;