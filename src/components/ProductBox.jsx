import React from "react";

export default function ProductBox({ name, image, price }) {
    return (
        <div className="w-80 h-[400px] flex flex-col justify-center items-center bg-[#F2F0FF] rounded-md animate-fadeIn duration-[30ms]">
            <img src={image} alt="chair" className="w-fit h-fit" />
            <p className="text-[#FB2E86] font-lato font-semibold text-[18px]">{name}</p>
            <p className="text-[#151875] text-[15px]">{price}</p>
        </div>
    );
}
