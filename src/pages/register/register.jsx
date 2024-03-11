import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constents";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate=useNavigate()
    useEffect(()=>{
      if (user){
        navigate('/')
      }
    },[])
    const validateName = useCallback(
        (value) => {
        const regex = /^[a-zA-Z0-9_]{3,20}$/;
        setNameError(regex.test(value) ? "" : "Invalid username");
        },
        [name]
    );
      const handleName = (e) => {
        const value = e.target.value;
        setName(value);
        validateName(value);
      };
    
      const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(regex.test(value) ? "" : "Invalid email");
      };
      const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
      };
    
      const validatePassword = useCallback((value) => {
        const regex = /^.{8,}$/;
        setPasswordError(
          regex.test(value) ? "" : "Password must be at least 8 characters"
        );
      });
      const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
      };
    
      const validateConfirmPassword = (value) => {
        setConfirmPasswordError(value === password ? "" : "Passwords do not match");
      };
      const handleConfirmPassword = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        validateConfirmPassword(value);
      };
    
 
    
      const handleRegistration = (e) => {
        e.preventDefault();
        const data = {
          username: name,
          email: email,
          password: password,
        };
        validateConfirmPassword(ConfirmPassword); // Validate confirm password before checking error
      
        if (!EmailError && !nameError && !PasswordError && !ConfirmPasswordError) {
          axios
            .post(BASE_URL + "register", data)
            .then((response) => {
              if (response.status === 400) {
                toast.error("Give Proper Credentials");
              } else {
                toast.success("User Registered Successfully");
                navigate("/otp");
              }
            })
            .catch((error) => toast.error(error));
        } else {
          toast.error("Give Proper Credentials");
        }
      };

    return (
        <>
            <div  className=" bg-gray-100 flex w-full h-svh justify-center items-center px-28">
                <div className="w-1/2 max-lg:hidden flex justify-start items-center">
                    <img
                        className="transform -hue-rotate-18 h-[29rem] "
                        src="./login.png"
                        alt=""
                    />
                </div>
                <div className="flex p-5 items-center  ">
                    <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                        <h4 className="block font-mono text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Register
                        </h4>

                        <form className="max-w-screen-lg mt-5 mb-2 w-80 sm:w-96">
                            <div className="flex flex-col gap-4 mb-1">
                                <h6 className="block text-sm -mb-3 font-sans  antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Full Name 
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input value={name} onChange={(e)=>handleName(e)}
                                        placeholder="Enter your name "
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    />
                                    <div className="error h-[30px] text-xs  text-red-600">
                                        {nameError ? nameError : ''}
                                    </div>
                                </div>
                                <h6 className="block text-sm -mb-3 font-sans  antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Your Email
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input value={email} onChange={(e)=>handleEmail(e)}
                                        placeholder="Entere your mail address"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    />
                                    <div className="error h-[30px] text-xs  text-red-600">
                                        {EmailError ? EmailError : ''}
                                    </div>
                                </div>
                                <h6 className="block -mb-3 font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Password
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input value={password} onChange={(e)=>handlePassword(e)}
                                        type="password"
                                        placeholder="********"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    />
                                    <div className="error h-[30px] text-xs  text-red-600">
                                        {PasswordError ? PasswordError : ''}
                                    </div>
                                </div>
                                <h6 className="block -mb-3 font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Confirm Password
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input value={ConfirmPassword} onChange={(e)=>handleConfirmPassword(e)}
                                        type="password"
                                        placeholder="********"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    />
                                    <div className="error h-[30px] text-xs  text-red-600">
                                        {ConfirmPasswordError ? ConfirmPasswordError : ''}
                                    </div>
                                </div>
                            </div>

                            <button onClick={(e)=>handleRegistration(e)}
                                className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Sign in
                            </button>
                            <p className="block mt-4 font-sans text-sm antialiased font-normal leading-relaxed text-center text-gray-700">
                                Don't have an account?
                                <Link to='/login' className="font-medium text-gray-900">
                                    Sign Up
                                </Link>
                                </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
