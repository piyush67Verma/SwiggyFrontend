import { useState, useEffect } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
export default function Restaurant(){

    let [RestData, setRestData] = useState([]);
    useEffect(()=>{
        let fetchData = async()=>{
            let proxyServer =  process.env.PROXY_URL;
            let swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            let response  = await fetch(proxyServer+swiggyAPI);
            let data = await response.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchData();
    }, [])



    //Shimmer effect
    if(RestData.length==0)
    {
        return <Shimmer/>
    }


    return(
        <div className="container mx-auto mt-30">
        <div className="flex flex-wrap ml-30 gap-5">
           {
                RestData.map((value)=>{
                    return(
                        <RestCard  value={value}  key={value?.info?.id}/> 
                    )
                })
           }
        </div>
        </div>
    );
}
