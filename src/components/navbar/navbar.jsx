import { useEffect, useState } from "react";
import Hamburger from "../hamburger/hamburger";

const Navbar = () => {
    const [open,setOpen]=useState(false)
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
            {open && (<div className="w-full h-[100vh] absolute z-30 flex" >
                <div className="max-md:w-full bg-black md:w-[50%] h-full">
                    <div className="flex text-white p-4 justify-end" onClick={()=>setOpen(false)}>
                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 30 30">
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                    </svg>

                    </div>
                        
                    <div className="flex my-2 text-white flex-col">
                        <div className="mx-4 my-2  font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('stories')}>Stories</div>
                        <div className="mx-4 my-2  font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('legal-insights')}>Legal Insights</div>
                        <div className="mx-4 my-2 font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('who-we-are')}>Who We Are</div>
                        <div className="mx-4 my-2  font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('community')}>Community</div>
                    </div>
                </div>
                <div className="md:w-[50%]  bg-black bg-opacity-50  h-full"></div>
            </div>)}

            <div className="h-24   flex max:md px-7 w-full justify-between fixed z-10 items-center" style={{backgroundColor: scrolling ? "white" : "transparent",transition: "background-color 0.6s ease-out"}}>
                {(!open)&&(<div onClick={()=>setOpen(true)}  className="center-portion flex lg:hidden justify-center pe-0">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="50" viewBox="0 0 24 24">
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
                    
                </div>)}
                
                <div>
                    <div className="logo flex align-middle">
                        <div> 
                            <img className="h-24 p-2  max-sm:hidden" src="/Desktop.png" alt="" />
                            <img className="h-24 p-2 max-[300px]:hidden sm:hidden" src="/Mobile.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="center-portion flex max-lg:hidden justify-center pe-0">
                    <div className="text-black mx-4  font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('stories')}>Stories</div>
                    <div className="text-black mx-4  font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('legal-insights')}>Legal Insights</div>
                    <div className="text-black mx-4 font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('who-we-are')}>Who We Are</div>
                    <div className="text-black mx-4  font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('community')}>Community</div>
                </div>

                <div className="right-portion me-6">
                    <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Login </span>
                    </a>                
                </div>

            </div>
        </>
    );
}

export default Navbar;
