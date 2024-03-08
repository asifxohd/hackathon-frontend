import React from "react";
import { Link } from "react-router-dom";

const OtpForm = () => {
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
                                    <input
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                                <div className="relative h-11 w-14">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    />
                                </div>
                            </div>

                            <button
                                className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Verify
                            </button>
                            <p className="block mt-4 font-sans text-sm antialiased font-normal leading-relaxed text-center text-gray-700">
                                Didn't receive OTP? <a href="#" className="font-medium text-gray-900">Resend OTP</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtpForm;
