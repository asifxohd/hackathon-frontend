import { useState } from "react";
import Modal from "react-modal";

import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BASE_URL, local } from "../../constents";
import axios from "axios";
import { toast } from "react-toastify";

const StoryPageCard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [location , setLocation] = useState('')


  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setName('')
    setPhoneNumber('')
    setLocation('')
    setIsModalOpen(false);
  };


  const handleVolunteerButtonClick = () => {
    const data = {
      name: name,
      number: phoneNumber,
      location: location
    };
  
    axios.post(BASE_URL+'add-volunteer', data)
      .then(response => {
        console.log('Request successful:', response.data);
        toast.success('Volunteer added successfully')
        closeModal()
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error(error)
      });
  };

  return (
    <>
      <div className=" px-auto my-8 ">
        <div
          className="  rounded-3xl  md:mx-16 lg:mx-24 mx-8 flex max-lg:flex-col flex-row justify-center items-center p-10"
          style={{ backgroundColor: "#B2B377" }}
        >
          <img
            className="ml-5 object-cover h-72 lg:hidden w-96 rounded-3xl "
            src={local+"image-1710062378298.webp"  }
            alt=""
          />
          <div className="font-serif max-lg:mt-10 ">
          "For years I thought I was losing my mind. My husband was always nice to me and doing thoughtful things for me, but then there were times he would subtly put me down and make me feel like I wasn’t worth anything. If I tried to bring up something he said to me and how it upset me, I was met with ‘You know I didn’t mean it that way’, ‘I NEVER said anything like that. Why would you think that I would say something like that?’, or ‘I think you are just being overly emotional and your depression/anxiety is making you feel that way’. Nothing was ever his fault, it was all mine. Even when I learned of an affair he had, it was my fault because I was neglecting him emotionally/sexually. Once I got free of the situation, I was able to see the control for what it was. I wasn’t losing my mind, I was just living with someone who tried to chip away my reality and personality.”
            <br /> <br />
            <b>Teresa</b>
            <br />
            Survivar of physical abuse
          </div>
          <img
            className="ml-5 object-cover h-72 max-lg:hidden w-96 rounded-3xl "
            src={local+"image-1710062378298.webp"  }
            alt=""
          />
        </div>
      </div>

      <div className=" px-auto my-8">
        <div
          className=" rounded-3xl  md:mx-16 lg:mx-24 mx-8 flex max-lg:flex-col flex-row justify-center items-center p-10"
          style={{ backgroundColor: "#B2B377" }}
        >
          <img
            className="mr-5 object-cover  h-72 w-96 rounded-3xl"
            src={local+"image-1710062498453.jpg"}
            alt=""
          />
          <div className="font-serif max-lg:mt-10">
          "I didn't understand what was happening until I started googling my ex's bizarre behaviors and the subject of narcissism kept popping up. I was being gaslit and love bombed but didn't know what that was. I knew that he was playing mind games with me but didn't understand why. This all happened within the first year. Then there [were] the anger rages. That was another confusing behavior. After that I discovered the porn addiction and texting strange women. I was on and off for three years while trying to figure out what was happening and trying to make sense of it all. I was lucky the abuse never turned physical because I believe he was very capable of inflicting great harm. Then the discard begin. I finally ended it first and went 100% no contact because by then I had become educated on the subject."
            <br /> <br />
            <b>Justine</b>
            <br />
            survivor of physical abuse
          </div>
        </div>
      </div>

      <Link to='/stories' className="flex justify-center items-center mt-2">
        <button className=" flex border border-gray-500 p-3 m-3  rounded-lg ">
          Load More
          <span className="pl-2 mt-1">
            <FaArrowRight />
          </span>
        </button>
      </Link>

      <div className="flex flex-col justify-center font-serif items-center mt-3 p-8 lg:h-[500px] bg-[#F2F1EB]">
        <div className="mx-8 text-center">
          <span className="text-4xl max-md:text-3xl font-extrabold">
            Join Our Volunteer Team: Enriching Lives, Creating Change for Women
            Everywhere!
          </span>
        </div>
        <div className="md:mt-10 mt-5 mx-8 text-center">
          <span>
            Volunteer With Us: Make a Difference in Women's Lives. Are you
            passionate about making a positive impact in the lives of women?
            Join our dedicated volunteer team and be a part of something
            extraordinary. Together, we strive to create meaningful change,
            foster support networks, and uplift women from all walks of life.
            Your time, skills, and commitment can contribute to building a
            stronger, more inclusive community. Join us on this rewarding
            journey of empowerment and solidarity. Together, we can shape a
            brighter future for women everywhere.
          </span>
        </div>

        <div
          onClick={openModal}
          className="flex justify-center items-center  mt-5 lg:mt-12"
        >
          <button className=" flex border hover:bg-gray-700 font-serif hover:text-white border-gray-500 p-3 m-3 rounded-lg ">
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
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "100vw",
            maxHeight: "90vh",
            overflow: "auto",
            zIndex: 1000,
          },
        }}
      >
        <div className="flex justify-end">
          <button onClick={closeModal}>
            <IoClose />
          </button>
        </div>

        <div className="modal-content ">
          <div className="flex justify-center items-center">
            <h4 className=" font-mono  text-2xl antialiased font-extrabold leading-snug tracking-normal text-blue-gray-900">
              Become A Volunteer
            </h4>
          </div>
          <form className="max-w-screen-lg mt-5 mb-2 w-80 sm:w-96">
            <div className="flex flex-col gap-4 mb-1">
              <h6 className="block text-sm -mb-3 font-sans  antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Name
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Enter your name "
                  value={name}
                  className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <h6 className="block text-sm -mb-3 font-sans  antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Phone Number
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  onChange={(e)=> setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  placeholder="Entere your phone number"
                  className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <h6 className="block -mb-3 font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Location
              </h6>
              <div className="relative h-auto w-full min-w-[200px]">
                <textarea
                  value={location}
                  onChange={(e)=> setLocation(e.target.value)}
                  placeholder="Enter your location"
                  className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  rows="4"
                />
              </div>
              
            </div>

            <button
              onClick={handleVolunteerButtonClick}
              className="mt-6 block w-full  select-none rounded-lg bg-[#DED0B6] py-3 px-6 text-center align-middle font-sans text-xs font-semibold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Join as volunteer
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default StoryPageCard;
