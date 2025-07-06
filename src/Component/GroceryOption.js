import { groceryGridCard } from "../Utils/Grocery";

export default function GroceryOption(){
    return(
        <div className="container mx-auto mt-20">
        <h2 className="text-2xl ml-20 mb-3 font-bold">Shop groceries on Instamart</h2>
        <div className=" flex overflow-x-auto gap-3 ml-20">
            {groceryGridCard.map((value)=>{
                return(
                    <div key={value.id} className="flex-none">
                        <a target="_blank" href={value.action.link}>
                            <img className="w-36 h-45 object-cover"src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}></img>
                        </a>
                        <div className="w-36 font-bold whitespace-normal text-center">{value.action.text}</div>
                    </div>
                )
            })}
        </div>
        </div>
    );
}