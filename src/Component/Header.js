import {Link} from 'react-router';

export default function Header(){

    return (
        <header className="bg-[#ff5200]">
            <div className="flex justify-around container mx-auto items-center pt-8 pb-8">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <span className="italic text-white font-bold text-2xl">-By Piyush Verma</span>
                <div className=" text-base w-150 flex justify-between items-center font-bold text-white">
                    <a  target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a  target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a  className = "flex items-center border border-white px-4 py-3 rounded" target="_blank" href="https://partner.swiggy.com/login#/swiggy">Get the App</a>
                    <a  className = "bg-black flex items-center border border-white px-4 py-3 rounded-2xl" target="_blank" href="https://partner.swiggy.com/login#/swiggy">Sign in</a>
                </div>
            </div>
            <div className="w-full pt-16 pb-8 relative">
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="max-w-[60%] container mx-auto text-center text-white text-[3.5rem] font-bold">Order food & groceries. Discover best restaurants. Swiggy it!</div>
                <div className="max-w-[70%] container mx-auto flex gap-15 mt-15">
                    <input className="bg-white w-[40%] ml-20 px-6 py-4 text-xl rounded" placeholder="Delhi, India"></input>
                    <input className="bg-white  w-[40%] px-6 py-4 text-xl rounded" placeholder="Search for restaurant, item or more"></input>
                </div>
            </div>
            <div className="flex justify-center">
                <Link to="/restaurants">
                    <img className="w-60 h-70" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                </Link>
                <a target="_blank"href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img className="w-60 h-70" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a target="_blank"href="https://www.swiggy.com/dineout">
                    <img className="w-60 h-70" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
                <a target="_blank"href="https://www.swiggy.com/genie">
                    <img className="w-60 h-70" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                </a>
            </div>
        </header>
    );

}

//48:20-->lec20