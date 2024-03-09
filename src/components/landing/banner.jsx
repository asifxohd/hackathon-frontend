
const Banner = () => {
    return (
        <div className="relative">
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url("/banner.jpeg")` }}>
                <div className=" inset-0 flex ">
                    <div className="max-w-2xl mx-4 max-md:mt-32 md:mt-48 p-10 text-black">
                        <h1 className="text-6xl font-serif font-bold">From Hurt to Healing</h1>
                        <p className="mt-4 font-sans text-lg">Welcome to "From Shattered to Healing," a platform dedicated to supporting women who have experienced psychological abuse within their households. We understand the pain and trauma that can stem from such experiences, and we're here to provide a safe space for healing and empowerment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
