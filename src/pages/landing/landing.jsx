import Footer from "../../components/Footer/footer";
import Card from "../../components/cards/landingcard";
import StoryCard from "../../components/cards/storycard";
import Banner from "../../components/landing/banner";
import Navbar from "../../components/navbar/navbar";

const Landing = () => {
    return (
        <>
            <Navbar />
            <Banner />
            
            <div className="card-heading bg-yellow-50 mb-5 flex justify-center items-center ">
                <p className="p-8 font-bold uppercase font-serif text-2xl">Together, We Shine: Unity Makes Us Stronger</p>
            </div>

            <div className="cards gap-6 flex flex-wrap justify-center items-center ">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            

            <div className="long-header-card md:mt-24 mt-8">
                <div className="header px-8 md:px-28 md:mt-12 py-7 flex justify-center items-center ">
                    <p className="font-serif font-bold text-xl lg:text-3xl">BREAKING SILENCE, REVEALING PAIN: EXPOSING THE EPIDEMIC OF PSYCHOLOGICAL AGGRESSION IN INTIMATE PARTNERSHIPS ACROSS INDIA</p>
                </div>
            </div>
            <div className="stories mb-10 bg-gray-200 p-4 rounded-md shadow-md">
                <p className="text-xl font-serif font-bold text-center">Stories of Wonder Womens</p>
            </div>

            <div className="cards gap-6 flex flex-wrap justify-center items-center ">
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>

            <div className="max-sm:flex-col-reverse  flex mb-32 mt-24 md:mx-20">
                <div className="  max-sm:p-5 max-sm:mt-2 rounded-2xl md:w-2/3  w-full me-2  flex justify-center items-center" style={{backgroundColor:"#B2B377"}} >
                    <p className="font-serif text-xl md:text-2xl lg:text-4xl text-center p-8" >We are women who are passionate about understanding and preventing psychological abuse. Together, we can make a real difference.</p>
                </div>

                <div className="rounded-lg md:w-1/3 w-full" >
                    <img className="rounded-2xl" src="/girl.png" alt="" />
                </div>
            </div>


            <Footer/>
        </>
    );
}

export default Landing;
