import Footer from "../../components/Footer/footer";
import StoryPageCard from "../../components/cards/CommunityPage";
import Navbar from "../../components/navbar/navbar";

const Story = () => {

    return (
        <>
            <Navbar/>
            <div className="h-24 w-full"></div>
            <div className="md:px-16">
                <div className="header-stories max-xl:ml-10 flex items-center justify-center mt-8 md:mt-20">
                    <p className="font-serif font-bold sm:text-6xl text-4xl" >Welcome to our supportive community! </p>
                </div>
                <div className="md:w-[80%] w-[70%] max-md:ml-10 md:px-12 pt-8 max-sm:text-sm font-serif text-lg">
                    <p>
                        Together, we are a beacon of hope, strength, and growth. Whether you're here to seek support, offer assistance, or simply connect with others on a journey of learning and self-discovery, you've found your place among us.<br /> Within these virtual walls, we celebrate the power of storytelling as a catalyst for motivation and learning. Your experiences, triumphs, and challenges have the potential to inspire and empower others on their own journeys.
                    </p>
                </div>
            </div>

            <div className="stories mt-10">
                <div className="para-head">
                    <p className="text-3xl font-serif font-bold max-md:px-10 pl-28 py-12" >
                        Inspirational Stories from Remarkable Women
                    </p>
                </div>
            </div>

            <StoryPageCard/>
            <Footer/>
        </>
    );
}


export default Story