const Navbar = () => {
    return (
        <>
            <div className="h-24 bg-transparent flex max:md px-7 w-full justify-between absolute z-10 items-center">
                <div className="left-portion">
                    <div className="logo flex align-middle">
                        <div> 
                            <img className="h-24 p-2" src="/logo.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="center-portion flex justify-center pe-0">
                    <div className="text-black mx-4  font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('stories')}>Stories</div>
                    <div className="text-black mx-4  font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('legal-insights')}>Legal Insights</div>
                    <div className="text-black mx-4 font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('who-we-are')}>Who We Are</div>
                    <div className="text-black mx-4  font-serif font-bold hover:underline cursor-pointer" onClick={() => handleNavigation('community')}>Community</div>
                </div>

                <div className="right-portion me-6">
                    <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span class="relative text-black group-hover:text-white">Login </span>
                    </a>                
                </div>

            </div>
        </>
        
    );
}

export default Navbar;
