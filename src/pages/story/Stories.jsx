import Footer from "../../components/Footer/footer";
import StoryPage from "../../components/cards/StoryPage";
import Navbar from "../../components/navbar/navbar";

const StoriesPage = () => {

    return (
        <>
            <Navbar/>
            <div className="h-24 w-full"></div>
            <div className="md:px-16 mb-16">
                <div className="header-stories max-xl:ml-10 flex items-center justify-center mt-8 md:mt-20">
                    <p className="font-serif font-bold sm:text-6xl text-4xl" >Stories</p>
                </div>
                <div className="md:w-[80%] w-[70%] max-md:ml-10 md:px-12 pt-8 max-sm:text-sm font-serif text-lg">
                    <p>
                    Welcome to our Stories page – a testament to the resilience and shared strength within our community. Here, we unveil the raw authenticity of lived experiences, turning pain into power and transforming adversity into triumph. These stories are not just narratives; they are the heartbeats of survivors who have emerged from the shadows of hardship.                    </p>
                </div>
            </div>

            <StoryPage/>
            <Footer/>
        </>
    );
}


export default StoriesPage