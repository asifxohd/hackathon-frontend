import { useState } from 'react';
import Modal from 'react-modal';


import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



const StoryPageCard = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="card px-28 my-8 " >
                <div className="  rounded-3xl px  flex flex-row justify-center items-center p-10" style={{ backgroundColor: "#B2B377" }} >
                    <div className=" ">
                        “For years I thought I was losing my mind. My husband was always nice to me and doing thoughtful things for me, but then there were times he would subtly put me down and make me feel like I wasn’t worth anything. If I tried to bring up something he said to me and how it upset me, I was met with ‘You know I didn’t mean it that way’, ‘I NEVER said anything like that. Why would you think that I would say something like that?’, or ‘I think you are just being overly emotional and your depression/anxiety is making you feel that way’. Nothing was ever his fault, it was all mine. Even when I learned of an affair he had, it was my fault because I was neglecting him emotionally/sexually. Once I got free of the situation, I was able to see the control for what it was. I wasn’t losing my mind, I was just living with someone who tried to chip away my reality and personality.”<br /> <br /><b>name of the person</b><br />survivar of physical abuse
                    </div>
                    <img className="ml-5 object-cover h-72 w-96 rounded-3xl " src="https://media.istockphoto.com/id/912337826/photo/thoughtful-woman-working-at-a-creative-office.webp?b=1&s=170667a&w=0&k=20&c=v84u9k4H6HzOZW3BPWNAjuyt4fAB-FO0EnkozYwQdnM=" alt="" />
                </div>
            </div>


            <div className="card px-28 ">
                <div className="rounded-3xl px flex flex-row justify-center items-center p-10" style={{ backgroundColor: "#B2B377" }}>
                    <img className="mr-5 object-cover h-72 w-96 rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWK1zbbWb3dJ-B3TDz9t8cZdVuBXguh5x3ERBIJBG0ZIcN8SPNWG9CHt0y1fzAAblOB8&usqp=CAU" alt="" />
                    <div className="">
                        “For years I thought I was losing my mind. My husband was always nice to me and doing thoughtful things for me, but then there were times he would subtly put me down and make me feel like I wasn’t worth anything. If I tried to bring up something he said to me and how it upset me, I was met with ‘You know I didn’t mean it that way’, ‘I NEVER said anything like that. Why would you think that I would say something like that?’, or ‘I think you are just being overly emotional and your depression/anxiety is making you feel that way’. Nothing was ever his fault, it was all mine. Even when I learned of an affair he had, it was my fault because I was neglecting him emotionally/sexually. Once I got free of the situation, I was able to see the control for what it was. I wasn’t losing my mind, I was just living with someone who tried to chip away my reality and personality.”<br /> <br /><b>name of the person</b><br />survivor of physical abuse
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-2">
                <button className=" flex border border-gray-500 p-3 m-3  rounded-lg ">
                    Load More
                    <span className="pl-2 mt-1" >
                        <FaArrowRight />
                    </span>
                </button>
            </div>


            <div className="flex flex-col justify-center items-center mt-3  p-5 h-[400px] bg-slate-200">

                <div>
                    <span className="text-[40px] font-bold">Give back make an impact</span>
                </div>
                <div>
                    <span>Make a meaningful impact by moderating groups, organizing events, and more. Your support matters.</span>
                </div>

                <div className="pt-3">
                    <button onClick={openModal} className="border bg-gray-400 hover:bg-gray-500 outline-black border-grey-500 p-3 rounded-md">
                        Become a volunteer
                    </button>

                </div>

            </div>


            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999 // Ensure the overlay is behind the modal
                    },
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        maxWidth: '80vw',
                        maxHeight: '80vh',
                        overflow: 'auto',
                        zIndex: 1000 // Adjust the z-index as needed
                    }
                }}
            >

                <div className='flex justify-end'>

                    <button onClick={closeModal}><IoClose /></button>
                </div>

                <div className="modal-content">
                    <div className='flex justify-center items-center'>

                        <h4 className=" font-mono text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Share your Story
                        </h4>
                    </div>
                    <form className="max-w-screen-lg mt-5 mb-2 w-80 sm:w-96">
                        <div className="flex flex-col gap-4 mb-1">
                            <h6 className="block text-sm -mb-3 font-sans  antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Name
                            </h6>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    placeholder="Enter your name "
                                    className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                />
                            </div>
                            <h6 className="block text-sm -mb-3 font-sans  antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Title
                            </h6>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    placeholder="Entere your Title"
                                    className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                />
                            </div>
                            <h6 className="block -mb-3 font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Description
                            </h6>
                            <div className="relative h-auto w-full min-w-[200px]">
                                <textarea
                                    placeholder="Enter your story"
                                    className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    rows="4"
                                />
                            </div>
                            <h6 className="block text-sm -mb-3 font-sans antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Upload Image
                            </h6>
                            <div className="  relative h-11 w-full min-w-[200px]">
                                <input
                                    type="file"
                                    className=" file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:p-1 file:text-white  file:border-none file:rounded-xl  peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                />
                            </div>

                        </div>

                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Share
                        </button>

                    </form>
                </div>
            </Modal>
        </>
    );
}

export default StoryPageCard