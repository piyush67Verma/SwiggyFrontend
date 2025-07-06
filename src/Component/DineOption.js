import { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";
export default function DineOption (){
    return(
        <div className="container mx-auto mt-20">
            <div className="text-2xl font-bold ml-20">Discover best restaurants on Dineout</div>
            <div className="ml-20 flex flex-nowrap overflow-x-auto gap-6">
                {dineoutRestaurants.map((value)=>{
                    return <DineCard key={value?.info?.id}  value = {value} />
                })}
            </div>
        </div>
    );
}

