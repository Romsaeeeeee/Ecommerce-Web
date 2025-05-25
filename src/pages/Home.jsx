import ImageShuffleOne from "../components/ImageShuffleOne";


export default function Home() {
    return (
        <div className="w-full h-full flex justify-start items-center">
            <div className="w-full h-[600px] flex justify-center items-center bg-[#F2F0FF]">
                <div className="w-[40%] h-full flex flex-col justify-center items-start gap-5">
                    <p className="font-lato font-bold text-[16px] text-[#FB2E86] pl-1">
                        Best Furniture For Your Castle...
                    </p>
                    <p className="text-[53px] font-bold">
                        New Furniture Collection<br />
                        Trends in 2025
                    </p>
                    <p className="text-[16px] font-lato text-[#8A8FB9] pl-1 font-semibold">
                        Discover our New Collection featuring the top Trends of 2025 — <br />stylish, practical, and made to elevate your everyday life.
                    </p>
                    <button className="w-40 h-14 bg-[#FB2E86] text-[17px] font-semibold text-white rounded-sm">Shop Now</button>
                </div>

                <div className="w-1/3 h-full flex flex-col justify-end items-center">
                    <ImageShuffleOne />
                </div>
            </div >

        </div >
    );
}
