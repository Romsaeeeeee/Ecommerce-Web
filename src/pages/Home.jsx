import ImageShuffleOne from "../components/ImageShuffleOne";
import ProductBox from "../components/ProductBox";
import yellowChair from "../assets/yellow-chair.png"
import sideBoard from "../assets/wooden-sideboard.png"
import comfort from "../assets/comfort-chair.png"
import pink from "../assets/pink-sofa.png"
import newprod1 from "../assets/1.png"
import newprod2 from "../assets/2.png"
import newprod3 from "../assets/3.png"
import newprod4 from "../assets/4.png"
import newprod5 from "../assets/5.png"
import newprod6 from "../assets/6.png"
import { useState } from "react";

export default function Home() {
    const [arrival, setArrival] = useState(true);
    const [best, setBest] = useState(false);
    const [feat, setFeat] = useState(false);
    const [special, setSpecial] = useState(false);

    const newArrival = () => {
        setArrival(true);
        setBest(false);
        setFeat(false);
        setSpecial(false);
    }
    const bestSeller = () => {
        setArrival(false);
        setBest(true);
        setFeat(false);
        setSpecial(false);
    }
    const featuredProd = () => {
        setArrival(false);
        setBest(false);
        setFeat(true);
        setSpecial(false);
    }
    const specialOffer = () => {
        setArrival(false);
        setBest(false);
        setFeat(false);
        setSpecial(true);
    }

    const newProd = [
        { chair: newprod1, name: "Wingback Chair", price: "$320.00" },
        { chair: newprod2, name: "Low Sofa", price: "$780.00" },
        { chair: newprod3, name: "2-Seater Sofa", price: "$650.00" },
        { chair: newprod4, name: "Velvet Dining Chair", price: "$150.00" },
        { chair: newprod5, name: "Armchair w/ Lamp", price: "$520.00" },
        { chair: newprod6, name: "Accent Chair", price: "$400.00" },
    ]

    const bestProd = [
        { chair: newprod3, name: "Wingback Chair", price: "$320.00" },
        { chair: newprod2, name: "Low Sofa", price: "$780.00" },
        { chair: newprod4, name: "2-Seater Sofa", price: "$650.00" },
        { chair: newprod1, name: "Velvet Dining Chair", price: "$150.00" },
        { chair: newprod6, name: "Armchair w/ Lamp", price: "$520.00" },
        { chair: newprod5, name: "Accent Chair", price: "$400.00" },
    ]

    const featProd = [
        { chair: newprod2, name: "Wingback Chair", price: "$320.00" },
        { chair: newprod4, name: "Low Sofa", price: "$780.00" },
        { chair: newprod3, name: "2-Seater Sofa", price: "$650.00" },
        { chair: newprod1, name: "Velvet Dining Chair", price: "$150.00" },
        { chair: newprod6, name: "Armchair w/ Lamp", price: "$520.00" },
        { chair: newprod5, name: "Accent Chair", price: "$400.00" },
    ]

    const specialProd = [
        { chair: newprod6, name: "Wingback Chair", price: "$320.00" },
        { chair: newprod5, name: "Low Sofa", price: "$780.00" },
        { chair: newprod4, name: "2-Seater Sofa", price: "$650.00" },
        { chair: newprod3, name: "Velvet Dining Chair", price: "$150.00" },
        { chair: newprod2, name: "Armchair w/ Lamp", price: "$520.00" },
        { chair: newprod1, name: "Accent Chair", price: "$400.00" },
    ]

    const categories = [
        { category: "New Arrival", click: newArrival },
        { category: "Best Seller", click: bestSeller },
        { category: "Featured", click: featuredProd },
        { category: "Special Offer", click: specialOffer },
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
                <div className={`w-full h-full flex flex-wrap justify-center gap-12`}>
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
                        <button key={index} onClick={item?.click} className={`w-fit h-fit cursor-pointer text-[18px] font-lato text-[#151875] hover:text-[#FB2E86] transition-all duration-700
                        ${arrival && item.category === "New Arrival" ? "text-[#FB2E86]" : ""}
                        ${best && item.category === "Best Seller" ? "text-[#FB2E86]" : ""}
                        ${feat && item.category === "Featured" ? "text-[#FB2E86]" : ""}
                        ${special && item.category === "Special Offer" ? "text-[#FB2E86]" : ""}
                        `}>
                            {item?.category}
                        </button>
                    ))}
                </div>
                <div className="w-fit h-full grid grid-cols-3 gap-5 place-items-center ">
                    {arrival &&
                        newProd.map((item, index) => (
                            <ProductBox
                                key={index}
                                image={item?.chair}
                                name={item?.name}
                                price={item?.price}
                            />
                        ))}
                    {best &&
                        bestProd.map((item, index) => (
                            <ProductBox
                                key={index}
                                image={item?.chair}
                                name={item?.name}
                                price={item?.price}
                            />
                        ))}
                    {feat &&
                        featProd.map((item, index) => (
                            <ProductBox
                                key={index}
                                image={item?.chair}
                                name={item?.name}
                                price={item?.price}
                            />
                        ))}
                    {special &&
                        specialProd.map((item, index) => (
                            <ProductBox
                                key={index}
                                image={item?.chair}
                                name={item?.name}
                                price={item?.price}
                            />
                        ))}
                </div>

            </div>
        </div >
    );
}
