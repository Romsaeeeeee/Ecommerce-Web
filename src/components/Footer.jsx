export default function Footer() {
    return (
        <div className="w-full h-52 bg-[#EEEFFB] flex justify-evenly items-center px-20">
            <div className="w-96 h-full flex flex-col justify-center">
                <p className="text-[34px] font-bold">SnapBuy</p>
                <p> Elevate your space with stylish and modern furniture collections curated for 2025 and beyond.</p>
            </div>
            <div className="w-52 h-full flex flex-col justify-center">
                <p className="text-[20px] font-bold">Quick Links</p>
                <p>Home</p>
                <p>Shop</p>
                <p>Featured</p>
                <p>Contact</p>
            </div>
            <div className="w-52 h-full flex flex-col justify-center">
                <p className="text-[20px] font-bold">Help</p>
                <p>FAQs</p>
                <p>Shipping & Returns</p>
                <p>Order Tracking</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
}
