import { useState } from "react";
import chair1 from "../assets/wooden_chair.png"
import chair2 from "../assets/black-chair.png"
import chair3 from "../assets/red-chair.png"
import chair4 from "../assets/blue-chair.png"
import blob from "../assets/blob.svg"


export default function ImageShuffleOne() {
    const [timer, setTimer] = useState(1);

    setTimeout(() => {
        setTimer(timer + 1)
        if (timer == 4) {
            setTimer(1)
        }
    }, "7000")

    return (
        <div className="w-full h-full relative">
            <div className={`${timer == 1 ? "w-fit h-full" : "hidden"} transition-all z-10 relative`}>
                <span className={`flex-1 h-full  ${timer == 1 ? 'animate-fadeIn' : timer == 2 ? 'animate-fadeOut' : ""} `} >
                    <img src={chair1} alt="model" className="w-full h-full " />
                </span>
            </div>
            <div className={`${timer == 2 ? "w-fit h-full" : "hidden"} transition-all z-10 relative`}>
                <span className={`flex-1 h-full  ${timer == 2 ? 'animate-fadeIn' : timer == 3 ? 'animate-fadeOut' : ""}`} >
                    <img src={chair2} alt="model" className="w-full h-full " />
                </span>
            </div>
            <div className={`${timer == 3 ? "w-fit h-full" : "hidden"} transition-all z-10 relative`}>
                <span className={`flex-1 h-full  ${timer == 3 ? 'animate-fadeIn' : timer == 4 ? 'animate-fadeOut' : ""}`} >
                    <img src={chair3} alt="model" className="w-full h-full " />
                </span>
            </div>
            <div className={`${timer == 4 ? "w-fit h-full" : "hidden"} transition-all z-10 relative`}>
                <span className={`flex-1 h-full  ${timer == 4 ? 'animate-fadeIn' : timer == 1 ? 'animate-fadeOut' : ""}`} >
                    <img src={chair4} alt="model" className="w-full h-full " />
                </span>
            </div>
            <span className="w-fit h-fit absolute -top-4 left-10">
                <img src={blob} alt="blob" className="w-fit h-[500px] opacity-50 -z-0" />
            </span>
            <span className="w-fit h-fit absolute top-0 ">
                <img src={blob} alt="blob" className="w-fit h-[550px] opacity-50 -z-0" />
            </span>
        </div>
    );
}
