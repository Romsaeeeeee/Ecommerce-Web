import ImageShuffleOne from "../components/ImageShuffleOne";
import ProductBox from "../components/ProductBox";
import yellowChair from "../assets/yellow-chair.png"
import sideBoard from "../assets/wooden-sideboard.png"
import comfort from "../assets/comfort-chair.png"
import pink from "../assets/pink-sofa.png"

export default function Home() {

    const categories = [
        { category: "New Arrival" },
        { category: "Best Seller" },
        { category: "Featured" },
        { category: "Special Offer" },
    ]

    const featured = [
        { chair: yellowChair, name: "Yellow Chair", price: "$100.00" },
        { chair: sideBoard, name: "Wooden Cabinet", price: "$100.00" },
        { chair: comfort, name: "White Comfort Chair", price: "$100.00" },
        { chair: pink, name: "Pink Sofa", price: "$100.00" },

    ]
    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-20">
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
            <div className="w-full h-1/2 flex flex-col justify-center items-center gap-5">
                <p className="text-[#1A0B5B] font-bold text-4xl">Featured Products</p>
                <div className="w-full h-full flex flex-wrap justify-center gap-12">
                    {featured && featured.map((item, index) => (
                        <div key={index} className="w-fit h-fit">
                            <ProductBox
                                image={item?.chair}
                                name={item?.name}
                                price={item?.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center gap-10">
                <p className="text-[#1A0B5B] font-bold text-4xl">Latest Products</p>
                <div className="w-full h-fit flex justify-center items-center gap-30">
                    {categories && categories.map((item, index) => (
                        <div key={index} className="w-fit h-fit">
                            <p className="text-[18px] font-lato text-[#151875]">{item?.category}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full h-full flex flex-wrap justify-center gap-12">
                    {featured && featured.map((item, index) => (
                        <div key={index} className="w-fit h-fit">
                            <ProductBox
                                image={item?.chair}
                                name={item?.name}
                                price={item?.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}
