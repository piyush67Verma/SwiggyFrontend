import { imageGridCards } from "../Utils/FoodData";
export default function FoodOptions(){
    return(
        <div className="container mx-auto mt-20">
        <div className="  flex flex-nowrap overflow-x-auto ml-20">
            {imageGridCards.map((value)=>{
                return(
                    <div key={value.id} className="max-w-[80%] flex-none">
                        <a target="_blank" href={value?.action.link}>
                            <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}></img>
                        </a>
                    </div>
                )
            })}
        </div>
        </div>
    );
}
