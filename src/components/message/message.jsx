import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import InputMessage from "./inputmessage";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";


const Message = ({prop}) => {
    const {openMessage,setOpenMessage}=prop
    const [query,setQuery]=useState('')
    const [result,setResult]=useState('')
    const [question,setQuestion]=useState('')

    return(
        <>
            {(!openMessage)&&<div onClick={()=>setOpenMessage(true)} className="fixed bg-black rounded-3xl z-20 h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] bottom-28 sm:p-4 p-2  right-5"><BiSolidMessageRoundedDetail  color="white" size={38}/></div>}
            {(openMessage)&&<div className="fixed bg-gray-800 rounded-3xl z-20 w-[250px] h-[400px] sm:h-[480px] sm:w-[400px] bottom-28 right-2">
                <div onClick={()=>setOpenMessage(false)} className=" p-3 text-white w-full flex justify-between font-black mt-2"><span className="text-xs font-bold">Enter What You Need To Know!!<br/></span><AiFillCloseSquare className="cursor-pointer" size={28} /></div>
                <div className="w-full static p-2 px-4 h-[68%] sm:h-[73%] rounded-md overflow-y-auto">
                    {(question)&&<div className="bg-slate-300 break-words p-2 rounded-md h-auto overflow-wrap-normal"><span className="text-xs font-bold">Question:<br/></span>{question}</div>}
                    {(result)&&<div className="bg-gray-500 mt-1 p-2 break-words rounded-md h-auto overflow-wrap-normal"><span className="text-xs font-bold">Answer:<br/></span>{result}</div>}
                    
                </div>
               <div className="absolute bottom-2 p-4 w-full">
                    <InputMessage prop={{query,setQuery,setQuestion,setResult}}/>
               </div>
    
            </div>}
        </>
    );
}

export default Message 