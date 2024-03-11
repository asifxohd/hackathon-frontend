import Navbar from "../navbar/navbar";

const AbuseBanner = () => {

    return (
        <>
            <Navbar />
            <div className="relative">

                <div className="bg-cover max-lg:hidden bg-center h-screen" data-aos="fade-down" style={{ backgroundImage: `url("/bombing.png")` }}>
                    <div className=" inset-0 flex justify-end me-12">
                        <div className="max-w-2xl mx-4 max-md:mt-32 md:mt-52  text-black">
                            <h1 className="text-5xl font-serif text-center font-bold">What Exactly Is Psychological Abuse ?</h1>
                            <p className="mt-5 text-center me-6 font-sans text-sm md:text-lg">Abuse means someone uses words or actions to make you feel bad about yourself all the time. They might say mean things or make you scared, even if you didn't do anything wrong. It's not okay for anyone to treat you like that. It can make you feel really sad and scared, but you're not alone. There are people who can help you feel better and safer. Remember, it's not your fault, and you deserve to be treated with kindness and respect</p>
                        </div>
                    </div>
                </div>
                <div className="bg-cover lg:hidden bg-center h-screen max-[350px]:hidden" style={{ backgroundImage: `url("/bombing-lg.png")` }}>

                </div>
                <div className="h-24 w-full max-[350px]:block  hidden"></div>

                <div className=" inset-0  lg:hidden flex justify-center sm:mt-10 ">

                    <div className="max-w-2xl sm:mx-4 mx-auto text-black">
                        <h1 className="md:text-5xl sm:text-4xl text-2xl font-serif text-center font-bold">What Exactly Is Psychological Abuse ?</h1>
                        <p className="mt-5 text-center font-sans text-sm md:text-lg">Abuse means someone uses words or actions to make you feel bad about yourself all the time. They might say mean things or make you scared, even if you didn't do anything wrong. It's not okay for anyone to treat you like that. It can make you feel really sad and scared, but you're not alone. There are people who can help you feel better and safer. Remember, it's not your fault, and you deserve to be treated with kindness and respect</p>
                    </div>
                </div>

            </div>


        </>
    );
}

export default AbuseBanner 