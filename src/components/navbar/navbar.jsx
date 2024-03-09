import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = ({ open, setOpen }) => {
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className="h-24    flex  md:px-7 px-2 w-full justify-between fixed z-10 items-center"
                style={{
                    backgroundColor: scrolling ? "white" : "transparent",
                    transition: "background-color 0.6s ease-out",
                }}
              >
                <div>
                    <div className="logo flex align-middle">
                        <Link to='/' className="">
                            <img
                                className="h-24 p-2  max-sm:hidden  "
                                src="/Desktop.png"
                                alt=""
                            />
                            <img
                                className="h-16 p-2  sm:hidden   "
                                src="/Desktop.png"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>

                <div className="center-portion flex max-lg:hidden justify-center pe-0">
                    <Link
                        to="/abuse"
                        className="text-black mx-4  font-serif font-bold hover:underline cursor-pointer"
                    >
                        Identify abuse
                    </Link>
                    <Link
                        to="/community"
                        className="text-black mx-4  font-serif font-bold hover:underline cursor-pointer"
                    >
                        Community
                    </Link>
                    <Link
                        to="/stories"
                        className="text-black mx-4  font-serif font-bold hover:underline cursor-pointer"
                    >
                        Stories
                    </Link>
                    <Link
                        to="/help"
                        className="text-black mx-4 font-serif font-bold hover:underline cursor-pointer"
                    >
                        Help
                    </Link>
                </div>

                <div className="right-portion me-6 max-lg:hidden">
                    <a
                        href="#_"
                        className="relative inline-block px-4 py-2 font-medium group"
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <Link to='/login' className="relative text-black group-hover:text-white">
                            Login{" "}
                        </Link>
                    </a>
                </div>
                {!open && (
                    <div
                        onClick={() => setOpen(true)}
                        className="center-portion flex lg:hidden justify-center pe-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30"
                            height="50"
                            viewBox="0 0 24 24"
                        >
                            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                        </svg>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
