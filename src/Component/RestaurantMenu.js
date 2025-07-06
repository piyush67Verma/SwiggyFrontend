import { useParams } from "react-router";
import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
export default function RestaurantMenu(){
    
    let {id}= useParams();
    let [RestData, setRestData] = useState([]);

    let[selected, setSelected] = useState(null);

     useEffect(()=>{
            let fetchData = async()=>{
                let proxyServer =  process.env.PROXY_URL;
                let swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
                let response  = await fetch(proxyServer+swiggyAPI);
                console.log(response);
                let data = await response.json();
                let tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                let filteredData = tempData.filter((obj)=>{
                    return 'title' in obj?.card?.card;
                })
                setRestData(filteredData);
            }
    
            fetchData();
        }, [])
    
    console.log(RestData);
    return(
        <div>
            <div className="w-[90%] mx-auto mt-28">
                <button className={`text-3xl mx-2 px-3 py-2 rounded border ${selected=='veg'?'bg-green-500':'bg-gray-300'}`} onClick={()=>{setSelected(selected==='veg'?null:'veg')}}>Veg</button>
                <button  className={`text-3xl mx-2 px-3 py-2 rounded border ${selected=='nonveg'?'bg-red-500':'bg-gray-300'}` } onClick={()=>{setSelected(selected==='nonveg'?null:'nonveg')}}>Non-Veg</button>
            </div>        
            <div className="w-[80%] max-auto ">
                {
                    RestData.map((menuItems)=>{
                        return <MenuCard key={menuItems?.card?.card?.title}      
                                menuItems={menuItems.card.card}    foodselected={selected}        /> ;
                    })
                }
            </div>

        </div>

    );
}
