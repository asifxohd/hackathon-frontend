
const Banner = () => {
    return (
        <div className="relative">
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url("/banner.jpeg")` }}>
                <div className=" inset-0 flex ">

                    <div className="max-w-2xl mx-4 sm:py-14 max-md:mt-32 md:mt-48 max-md:p-5 p-10 text-black" data-aos="zoom-in">
                        <h1 className="md:text-6xl text-5xl  md:mt-0  max-[400px]:text-3xl font-serif font-bold">From Hurt to Healing</h1>
                        <p className="mt-4 font-sans text-base md:text-lg  max-[400px]:text-sm">Welcome to "From Hurt to Healing," a platform dedicated to supporting women who have experienced psychological abuse within their households. We understand the pain and trauma that can stem from such experiences, and we're here to provide a safe space for healing and empowerment.</p>

                    </div>
                </div>
            </div>
        </div>
    );
} 
    
export default Banner;
