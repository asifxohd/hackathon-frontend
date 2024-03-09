import Footer from "../../components/Footer/footer";
import VolunteerCard from "../../components/Volunteer/VolunteerCard";
import Navbar from "../../components/navbar/navbar";

const Help = () => {
    return (
        <>
            <Navbar />
            <div className="h-20"></div>

            <div className="bg-orange-100 mt-10 flex justify-center items-center h-48">
                <p className="text-gray-700 font-bold text-5xl font-serif">Help</p>
            </div>

            <div className="container mx-auto mt-8 px-4">
                <p className="text-lg text-gray-800 text-center font-serif leading-7">
                    Welcome to our volunteer search platform. If you encounter any challenges in the future, rest assured that we are here to assist you. Our dedicated team is committed to helping you find the right volunteers for your needs. Please explore the options below to connect with volunteers who can support your cause effectively.
                </p>
            </div>



            <div className="w-full mt-10"> {/* Aligns the content to the right */}
                <div className='max-w-4xl mx-auto '>
                    <div className="relative flex items-center px-2 w-full h-12 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Enter current Location"
                        />
                    </div>
                </div>
            </div>
            <div className=" my-24  w-full flex justify-center">
            <div className=" grid grid-cols-5 gap-10">
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Help;
