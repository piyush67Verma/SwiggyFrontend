import { Link } from "react-router";

export default function RestCard({value}){

    return(
        <Link to={"/city/delhi/"+value.info.id}>            
            <div  className="flex-none max-w-[300px] hover:scale-90 transition-transform">
                <img className="w-70 h-50 object-cover rounded"src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.info?.cloudinaryImageId}></img>
                <div className="max-w-[95%] pl-3 mt-2">
                    <h2 className="font-bold text-xl">{value?.info?.name}</h2>
                    <div className="text-xl">
                        <span>{'⭐'}{value?.info?.avgRating + " "}</span>
                        <span className="font-semibold">{" "+ value?.info?.sla?.slaString}</span>
                    </div>
                    <h3 className="text-xl text-gray-500 h-8 overflow-hidden">{value?.info?.cuisines.join(", ")}</h3>
                    <h3 className="text-xl text-gray-500 h-8 overflow-hidden">{value?.info?.areaName}</h3>
                </div>
            </div>
      </Link>

    );
}


