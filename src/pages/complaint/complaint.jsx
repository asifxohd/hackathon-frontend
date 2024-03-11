import { useState } from "react";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/navbar/navbar";
import { BASE_URL } from "../../constents";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Complaint = () => {

  const [text, setText] = useState('')
  const { user } = useSelector((state) => state.user);
console.log(user.email)

  const handleSubmit = async () => {
    if(user){
      try {
        const data = {
          complaints: text,
          email:user.email
        };
    
        const response = await axios.post(BASE_URL+'/add-complaints', data);
    
        console.log(response.data.response); 
        setText('')
        toast.success("you will get your response on your email")
      } catch (error) {
        console.error('Error:', error);
        toast.error("Error:!!! please try again after some time")
      }
    }else{
      toast.error('Please Login for Consult')
    }
    
  };
  return (
    <>
      <Navbar />
      <div className="h-24 "> </div>
      <div className=" mb-5">
        <p className="text-center py-16 font-serif text-3xl font-bold bg-orange-100 mt-6">
          File Your Concerns
        </p>
      </div>
      <div>
        <p className="px-10 text-center font-serif  text-gray-500 py-5">
          Welcome to our concern filing system, where you can openly share any
          challenges or issues you are currently experiencing. Once you submit
          your concerns, our team will carefully analyze them, and we commit to
          delivering a comprehensive response to your provided email address as
          swiftly as possible. Your satisfaction and resolution are our top
          priorities, and we appreciate your trust in our support system
        </p>
      </div>

      <div className="flex   justify-center mb-8">
        <div className="box md:w-[70%] w-[90%]  outline-8 outline-black h-[28rem] border-2 border-black rounded-2xl p-4">
          <div>
            <textarea
              onChange={(e) => setText(e.target.value)}
              className="p-6 w-full h-[350px] font-mono outline-none mb-3 resize-none"
              value={text}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              style={{ background: "#776B5D" }}
              className="outline-black outline-4  bg-gray-700 text-white py-2 px-5 rounded-md ml-2  text-lg"
            >
              Send Concerns
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Complaint;
