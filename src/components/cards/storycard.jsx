import { useNavigate } from "react-router-dom";
import { BASE_URL, local } from "../../constents";


const StoryCard = ({prop}) => {
    const navigator=useNavigate()
    console.log(local+prop.image)
    return (
        <div onClick={()=>navigator('/stories')} className=" max-sm:w-[70%] w-72 p-3 h-96 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={local+prop.image} alt="Placeholder" className="w-full h-56 object-cover" />
            <div className="px-6 py-4 flex flex-col items-center">
                <div className="font-bold text-lg font-mono mb-2">{prop.title}</div>
                <p className="text-gray-700 text-xs">{prop.description}</p>
                <p>read more </p>
            </div>
        </div>
    );
}

export default StoryCard