import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constents";

const OtpForm = () => {
    const[otp,setOtp]=useState('')
    const [inp1,setInp1]=useState('')
    const [inp2,setInp2]=useState('')
    const [inp3,setInp3]=useState('')
    const [inp4,setInp4]=useState('')
    const [inp5,setInp5]=useState('')
    const [inp6,setInp6]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
        setOtp(inp1+inp2+inp3+inp4+inp5+inp6)
        console.log(otp)
    },[inp1,inp2,inp3,inp4,inp5,inp6,submission])

    function submission(){
        if (otp) {
            const data={
                otp:otp,
            }
            console.log('ijjjdfdf')
            axios.post(BASE_URL + "otpverify", data)
              .then((response) => {
                if (response.status == 404) {
                  toast.error(response.message);
                  console.log('false')
                } else {
                  toast.success("Otp Verified Successfully");
                  navigate("/login");
                }
                console.log(response)
              })
              
              .catch((error) => toast.error(error));
        } else {
            toast.error("Enter otp");
        }
        console.log('-------')
    }

    return (
        <>
            <div className="bg-gray-100 flex w-full h-svh justify-center items-center px-20">
                <div className="w-1/2 mr max-lg:hidden flex justify-start items-center">
                    <img
                        className="transform -hue-rotate-18 h-[23rem] "
                        src="./otpimage.png"
                        alt=""
                    />
                </div>
                <div className="flex p-5 items-center">
                    <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                        <h4 className="block font-mono text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Enter OTP
                        </h4>

                        <form className="max-w-screen-lg mt-5 mb-2 w-80 sm:w-96">
                            <div className="flex justify-between gap-2">
                                <div className="relative h-11 w-14">
                                    <input value={inp1} onChange={(e)=>setInp1(e.target.value)}
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input value={inp2} onChange={(e)=>setInp2(e.target.value)}
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input value={inp3} onChange={(e)=>setInp3(e.target.value)}
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input value={inp4} onChange={(e)=>setInp4(e.target.value)}
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input value={inp5} onChange={(e)=>setInp5(e.target.value)}
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input value={inp6} onChange={(e)=>setInp6(e.target.value)}
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                            </div>

                            <button onClick={()=>submission()}
                                className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Verify
                            </button>
                            <p className="block mt-4 font-sans text-sm antialiased font-normal leading-relaxed text-center text-gray-700">
                                Didn't receive OTP? <a  className="font-medium text-gray-900">Resend OTP</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtpForm;
