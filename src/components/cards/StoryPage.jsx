import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BASE_URL, local } from "../../constents";
import axios from "axios";
import { toast } from "react-toastify";

const StoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [stories, setStories] = useState([]);
  const [count, setCount] = useState(3);
  useEffect(() => {
    axios
      .get(BASE_URL + "stories")
      .then((response) => {
        console.log(response.data.story);
        setStories(response.data.story);
      })
      .catch((error) => toast.error(error));
  }, []);

  function counterIncrease() {
    var i = 0;
    while (i < 3) {
      if (count <= stories.length) {
        setCount((count) => count + 1);
        i = i + 1;
      } else {
        break;
      }
    }
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
  
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageViewer = document.querySelector(".image-viewer");
        if (imageViewer) {
          imageViewer.style.backgroundImage = `url(${e.target.result})`; // Corrected
          imageViewer.style.display = "block";
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleShare = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("title", title);
    formData.append("description", description);
    axios
      .post(BASE_URL + "add-story", formData)
      .then((response) => {
        console.log(response.data);
        console.log("Request successful:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setName("");
    setTitle("");
    setDescription("");
    setImage(null);
    closeModal();
  };

  return (
    <>
      {stories.map((prop, index) => {
        if (index % 2 == 0 && index < count) {
          return (
            <div className=" px-auto my-8 ">
              <div
                className="  rounded-3xl  md:mx-16 lg:mx-24 mx-8 flex max-lg:flex-col flex-row justify-center items-center p-10"
                style={{ backgroundColor: "#B2B377" }}
              >
                <img
                  className="ml-5 object-cover h-72 lg:hidden w-96 rounded-3xl "
                  src={local + prop.image}
                  alt=""
                />
                <div className="font-serif max-lg:mt-10 ">
                  {prop.description}
                  <br /> <br />
                  <b>{prop.name}</b>
                  <br />
                  {prop.title}
                </div>
                <img
                  className="ml-5 object-cover h-72 max-lg:hidden w-96 rounded-3xl "
                  src={local + prop.image}
                  alt=""
                />
              </div>
            </div>
          );
        } else if (index % 2 == 1 && index < count) {
          return (
            <div className=" px-auto my-8">
              <div
                className=" rounded-3xl  md:mx-16 lg:mx-24 mx-8 flex max-lg:flex-col flex-row justify-center items-center p-10"
                style={{ backgroundColor: "#B2B377" }}
              >
                <img
                  className="mr-5 object-cover  h-72 w-96 rounded-3xl"
                  src={local + prop.image}
                  alt=""
                />
                <div className="font-serif max-lg:mt-10">
                  {prop.description}
                  <br /> <br />
                  <b>{prop.name}</b>
                  <br />
                  {prop.title}
                </div>
              </div>
            </div>
          );
        }
      })}

      <div
        className="flex justify-center items-center mt-2"
        onClick={() => counterIncrease()}
      >
        <button className=" flex border border-gray-500 p-3 m-3  rounded-lg ">
          Load More
          <span className="pl-2 mt-1">
            <FaArrowRight />
          </span>
        </button>
      </div>

      <div className="flex flex-col justify-center font-serif items-center mt-3 p-8 lg:h-[500px] bg-[#F2F1EB]">
        <div className="mx-8 text-center">
          <span className="text-4xl max-md:text-3xl font-extrabold">
            Add Stories
          </span>
        </div>
        <div className="md:mt-10 mt-5 mx-8 text-center">
          <span>
            Dive into the powerful narratives on our "Breaking Chains: Women's
            Stories of Resilience" page, where courage takes center stage. These
            are more than just stories—they're beacons of strength, showcasing
            women who've faced adversity and emerged victorious. In this
            collection, find inspiration, support, and a testament to the
            unyielding spirit that triumphs over the darkest moments. Join us as
            we celebrate the indomitable resilience of these women, proving that
            even in the face of abuse, the human spirit can break free and soar.
          </span>
        </div>

        <div
          onClick={openModal}
          className="flex justify-center items-center  mt-5 lg:mt-12"
        >
          <button className=" flex border border-gray-500 p-3 m-3 font-serif  rounded-lg ">
            Add Stories
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name "
                  className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <h6 className="block text-sm -mb-3 font-sans  antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Title
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Entere your Title"
                  className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <h6 className="block -mb-3 font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Description
              </h6>
              <div className="relative h-auto w-full min-w-[200px]">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter your story"
                  className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  rows="4"
                />
              </div>

              <h6 className="block text-sm -mb-2 font-sans antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Upload Image
              </h6>
              <div className="relative w-full min-w-[200px]">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="file:bg-gradient-to-b mb-3  file:from-gray-400 file:to-gray-400 file:p-2 file:text-white  file:border-none file:rounded-xl  peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-2 py-2 font-sans text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              {image ? (
                <div className="image-viewer h-[130px] w-[200px] mx-auto bg-cover bg-center"></div>
              ) : (
                ""
              )}
            </div>

            <button
              onClick={handleShare}
              className="mt-6 block w-full  select-none rounded-lg bg-[#DED0B6] py-3 px-6 text-center align-middle font-sans text-xs font-semibold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Share
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default StoryPage;