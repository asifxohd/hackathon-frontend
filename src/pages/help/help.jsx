import { useEffect, useState } from "react";
import Footer from "../../components/Footer/footer";
import VolunteerCard from "../../components/Volunteer/VolunteerCard";
import Message from "../../components/message/message";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { BASE_URL } from "../../constents";

const Help = () => {
    const [openMessage, setOpenMessage] = useState(false)
    const [volunteer, setValunteer] = useState([])
    const [search, setSearchText] = useState('')


    useEffect(() => {
        axios.get(`${BASE_URL}serach-volunteer/?query=${search}`).then((response) => setValunteer(response.data)).catch((error) => setValunteer([]))
    }, [search])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(BASE_URL + 'volunteers');
                setValunteer(response.data.volunteers);
                console.log(response.data.volunteers);
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };

        fetchData();
    }, []);

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

            <div className="w-full mt-10">
                <div className='lg:max-w-4xl sm:max-w-2xl w-[95%] mx-auto '>

                    <div className="relative flex items-center px-2 w-full h-12 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            value={search}
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Enter current Location"
                        />
                    </div>
                </div>
            </div>
            <div className=" my-24  w-full flex justify-center">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-9 md:grid-cols-3 md:gap-9 lg:gap-9 xl:grid-cols-5 xl:gap-9">
                    {volunteer.slice(0, 10).map((item, i) => (
                        <VolunteerCard key={i} prop={item} />
                    ))}

                </div>


            </div>

            <div className="w-full flex flex-col py-4 mb-24">
                <div className="text-center font-bold text-xl mt-2 text-gray-600 font-serif">
                    If you have any questions, feel free to ask with the help of our AI assistant.
                </div>

                <button onClick={() => setOpenMessage(true)} className="mx-auto mt-5 bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                    Click Here and See The Magic
                </button>
            </div>

            <Message prop={{ openMessage, setOpenMessage }} />

            <Footer />
        </>
    );
}

export default Help;
