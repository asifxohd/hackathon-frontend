import React from 'react';
import './input.css'
import axios from 'axios';
import { BASE_URL } from '../../constents';

const InputMessage = ({prop}) => {
    
    const {query,setQuery,setQuestion,setResult}=prop;


    async function submitMessage() {
        const data = {
            userPrompt: query, 
        };
    
        await axios.post(BASE_URL+'chatbot', data)
            .then((response) => {
                console.log(response.data.response);
                setResult(response.data.response);
            })
            .catch((error) => {
                console.log(error);
                setResult("Give a valid input");
            });
    }
    
  return (
    <div className="messageBox w-full flex justify-between">
      
      <input className='' onChange={(e)=>setQuery(e.target.value)} value={query}  required="" placeholder="Message..." type="text" id="messageInput" />
      <button onClick={()=>{setQuestion(query)
            submitMessage()}} id="sendButton">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
          <path
            fill="none"
            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="33.67"
            stroke="#6c6c6c"
            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default InputMessage;
