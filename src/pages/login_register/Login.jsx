import { useContext, useState } from 'react';
import loginImage from '../../assets/images/login/login.svg'
import { FaRegEye,  FaRegEyeSlash  } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link,   useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contextAPI/AuthContext';
import AnotherHeader from '../../shared/Header/AnotherHeader';

function Login() {
    const [hidePassword, setHidePassword] = useState(false);
    const {login, loading, setLoading, user, setLocationState } = useContext(UserContext);

    const location = useLocation();
    setLocationState(location.state)
    console.log(location);
    const navigate = useNavigate()

    const handleLogin= (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(CurrentUser => {
            setLoading(false)
            if (CurrentUser) {
                console.log(CurrentUser.user);
            }
            if (CurrentUser) {
                navigate(location?.state ? location?.state : "/" )
            }

        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (error) {
                setLoading(false)
            }
            console.log(errorCode, errorMessage);
        })

    }

    
    if (loading) {
        return (
            <div className='w-full h-screen flex justify-center items-center'><span className="loading loading-spinner text-theme-color"></span></div>
        )
    }

   
    return(
        <div className=' min-h-screen md:h-screen w-full'>
            <AnotherHeader></AnotherHeader>
            <div className='py-10 w-full  gap-20 justify-center items-center flex flex-col md:flex-row'>
                <img className='md:w-1/3' src={loginImage} alt="Login Image" />

                <div className='border md:w-1/3 py-5'>
                    <h2 className='text-center py-4'>Login</h2>
                    <div className=" shrink-0 w-full">

                        <form onSubmit={handleLogin}
                         className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    id='email'
                                    name='email'
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative'>
                                <input
                                    id='password'
                                    name='password'
                                    type={hidePassword ? "text" :"password"}
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                     />
                                     <div className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'
                                      onClick={()=>setHidePassword(!hidePassword)}>
                                        { hidePassword ?  <FaRegEye />: <FaRegEyeSlash /> }
                                     </div>
                                </div>




                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="button primary-fill-button-2">Login</button>
                            </div>
                        </form>
                    </div>


                  <h5 className='text-center font-bold capitalize'>or sign up with</h5>
                  <div className='flex justify-center items-center gap-5 py-5 text-xl'>
                    <Link to={"#"} className='btn btn-circle'><FaFacebookF /></Link>
                    <Link to={"#"} className='btn btn-circle'><FaLinkedinIn /></Link>
                    <Link to={"#"} className='btn btn-circle'><FcGoogle /></Link>
                  </div>
                  <p
                  className='text-center capitalize'>already have an account ? 
                  <Link className='hover:underline' to={"/register"}> register</Link>
                  </p>
                </div>
            </div>
        </div>
    )
}

export default Login;