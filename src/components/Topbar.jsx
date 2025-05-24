import { FaSearch } from "react-icons/fa";


export default function Topbar() {
    return (
        <div className="w-full h-20 flex justify-center items-center gap-20">
            <div className="flex-1 text-end">
                <p className="text-[34px] font-bold">SnapBuy</p>
            </div>
            <div className="flex-1 flex justify-evenly text-[18px] font-semibold">
                <p>Home</p>
                <p>Products</p>
                <p>Contact</p>
            </div>
            <div className="flex-1  text-[18px]">
                <span><FaSearch /></span>
            </div>
        </div>
    );
}
