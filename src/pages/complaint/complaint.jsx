import Footer from "../../components/Footer/footer";
import Navbar from "../../components/navbar/navbar";

const Complaint = () => {
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
        <p className="px-10 text-center font-serif  text-gray-500 py-5">Welcome to our concern filing system, where you can openly share any challenges or issues you are currently experiencing. Once you submit your concerns, our team will carefully analyze them, and we commit to delivering a comprehensive response to your provided email address as swiftly as possible. Your satisfaction and resolution are our top priorities, and we appreciate your trust in our support system</p>
      </div>

      <div className="flex   justify-center mb-8">
     
        <div className="box md:w-[70%] w-[90%]  outline-8 outline-black h-[28rem] border-2 border-black rounded-2xl p-4">
        <div >
        <textarea className="p-6 w-full h-[350px] mb-3 resize-none" name="" id="" cols="30" rows="10"></textarea>

        </div>
         <div className="flex justify-center">
            
          <button style={{background:"#776B5D"}} className="outline-black outline-4  bg-gray-700 text-white py-2 px-5 rounded-md ml-2  text-lg" >Send  Concerns</button>
         </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Complaint;
