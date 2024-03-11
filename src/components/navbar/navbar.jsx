import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserData } from "../../features/userSlice";


const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const {open,setOpen}=useContext(MyContext)
    const navigator=useNavigate()
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    console.log('user',user)
    
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
                className="h-24 flex  md:px-7 px-2 w-full justify-between fixed z-10 items-center"
                style={{
                    backgroundColor: scrolling ? "white" : "transparent",
                    transition: "background-color 0.6s ease-out",
                }}
              >
                <div>
                    <div className="logo flex align-middle">
                        <span onClick={()=>navigator('/')} className="">
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
                        </span>
                    </div>
                </div>

                <div className="center-portion flex  max-lg:hidden justify-center pe-0">
                    <span
                        onClick={()=>navigator('/')}
                        className="text-black mx-4  font-serif font-bold hover:text-gray-600 cursor-pointer"
                    >
                        Home
                    </span>
                    <span
                        onClick={()=>navigator('/abuse')}
                        className="text-black mx-4  font-serif font-bold hover:text-gray-600 cursor-pointer"
                    >
                        Identify abuse
                    </span>
                    <span
                        onClick={()=>navigator("/community")}
                        className="text-black mx-4  font-serif font-bold hover:text-gray-600 cursor-pointer"
                    >
                        Community
                    </span>
                    <span
                        onClick={()=>navigator("/stories")}
                        className="text-black mx-4  font-serif font-bold hover:text-gray-600 cursor-pointer"
                    >
                        Stories
                    </span>
                    <span
                        onClick={()=>navigator("/help")}
                        className="text-black mx-4 font-serif font-bold  hover:text-gray-600 cursor-pointer"
                    >
                        Help
                    </span>
                        {(user)&&(<span
                        onClick={()=>navigator("/consult")}
                        className="text-black mx-4 font-serif font-bold  hover:text-gray-600 cursor-pointer"
                    >
                        Consult
                    </span>)
                        }
                    

                </div>

        {(!user)?(<div className="right-portion me-6 max-lg:hidden">
                <div
                    className="relative inline-block px-4 py-2 font-medium group"
                >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-transparent group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute rounded-xl  inset-0 w-full h-full bg-transparent border-2 border-black group-hover:bg-black"></span>
                    <Link to='/login' className="relative p-2  text-black group-hover:text-white">
                        Login{" "}
                    </Link>
                </div>
            </div>):(<div onClick={()=>{dispatch(deleteUserData())}} className="right-portion me-6 max-lg:hidden">
                <div
                    className="relative inline-block px-4 py-2 font-medium group"
                >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-transparent group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute rounded-xl  inset-0 w-full h-full bg-black border-2 border-black group-hover:bg-black"></span>
                    <Link to='/login' className="relative p-2  text-white group-hover:text-white">
                        Logout{" "}
                    </Link>
                </div>
            </div>)}
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
