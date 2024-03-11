import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer/footer";
import Card from "../../components/cards/landingcard";
import StoryCard from "../../components/cards/storycard";
import Banner from "../../components/landing/banner";
import Message from "../../components/message/message";
import Navbar from "../../components/navbar/navbar";
import axios from 'axios';
import { BASE_URL } from '../../constents';

const Landing = () => {
    const [stories,setStories]=useState([])
    useEffect(() => {
        axios
            .get(BASE_URL + "stories")
            .then((response) => {
                console.log(response.data.story.slice(0,4))
               setStories(response.data.story.slice(0,4))
            })
            .catch((error) => toast.error(error));
    },[])
    
    return (
        <>
            <Navbar />
            <Banner />
            
            <div className="card-heading bg-yellow-50 mb-5 flex justify-center items-center "  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                <p className="p-8 font-bold uppercase font-serif text-2xl">Together, We Shine: Unity Makes Us Stronger</p>
            </div>

            <div className="cards gap-6 flex flex-wrap justify-center items-center  "  data-aos="fade-up" data-aos-duration="1000">
                <Card prop={{header:"Identify abuse", content:"Identifying psychological abuse in women involves recognizing manipulation, control, gaslighting, isolation, threats, and undermining of confidence and autonomy." , img:"https://d3i11hp0zpbt87.cloudfront.net/media/W1siZiIsIjIwMjEvMDQvMjcvMTYvNDkvMDUvZTUwNjU4MzAtZjg2Ny00YmVmLWJlYzUtNDllNzhiZmU4NWEzL2lTdG9jay0xMTg0MTA4NjI1LmpwZyJdLFsicCIsInRodW1iIiwiMTI0MHg2NDAjIl1d?basename=What+Is+Emotional+Abuse%3F&sha=bbde2e1c2dec4204"}} />
                <Card prop={{header:"Stories", content:"These experiences reflect the resilience and strength of women who have triumphed over psychological abuse and reclaimed their autonomy." , img:"https://media.istockphoto.com/id/1157741177/photo/portrait-of-a-young-adult-asian-woman-in-venice.jpg?s=612x612&w=0&k=20&c=VWgnBIQMyNPF1a7mh3CFci7g_97MfoFy5jHvvElhVH8="}} />
                <Card prop={{header:"Community", content:"These communities provide safe spaces for women to share their thoughts, connect with others, and find healing from psychological abuse" , img:"https://img.freepik.com/free-photo/low-angle-best-friends-looking-down_23-2148440535.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709510400&semt=ais"}} />
                <Card prop={{header:"Help", content:"This help center offers access to nearby volunteers and AI assistance to support women facing psychological abuse and other challenges" , img:"https://inteliexpress.com/wp-content/uploads/2019/02/call_center_Vac.jpg"}} />

            </div>
            

            <div className="long-header-card md:mt-24 mt-8">
                <div className="header px-8 md:px-28 md:mt-12 py-7 flex justify-center items-center ">
                    <p className="font-serif font-bold text-xl lg:text-3xl">BREAKING SILENCE, REVEALING PAIN: EXPOSING THE EPIDEMIC OF PSYCHOLOGICAL AGGRESSION IN INTIMATE PARTNERSHIPS ACROSS INDIA</p>
                </div>
            </div>
            <div className="stories mb-10 bg-gray-200 p-4 rounded-md shadow-md">
                <p className="text-xl font-serif font-bold text-center">Stories of Wonder Womens</p>
            </div>

            <div className="cards gap-6 flex flex-wrap justify-center items-center " data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                {stories.map((prop,ind)=>{
                    return(
                        <StoryCard prop={prop} key={ind} />
                    )
                })}
        
            </div>

            <div className="max-sm:flex-col-reverse  flex mb-32 mt-24 md:mx-20">
                <div className="  max-sm:p-5 max-sm:mt-2 rounded-2xl md:w-2/3  w-full me-2  flex justify-center items-center" style={{backgroundColor:"#B2B377"}}  >
                    <p className="font-serif text-xl md:text-2xl lg:text-4xl text-center p-8" data-aos="fade-right" >We are women who are passionate about understanding and preventing psychological abuse. Together, we can make a real difference.</p>
                </div>

                <div className="rounded-lg md:w-1/3 w-full" >
                    <img classexName="rounded-2xl" src="/girl.png" alt="" />
                </div>
            </div>


            <Footer/>
        </>
    );
}

export default Landing;