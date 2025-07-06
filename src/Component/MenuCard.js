import RestInfo from "./RestInfo";
import {useState} from 'react';
export default function MenuCard(props){
    let {menuItems} = props;
    let {foodselected} = props;
    let [isOpen, setIsOpen] = useState(true);

    if("categories" in menuItems)
        {
            return(
                <div className="w-full m-20">
                    <p className="font-bold text-2xl">{menuItems?.title}</p>
                    {
                        menuItems.categories.map((items)=>{
                            return <MenuCard key={items.title} menuItems={items} foodselected={foodselected}></MenuCard>
                        })
                    }
                </div>
            );
        }

    if(isOpen==false)
    {
        return(
        <div className="w-full m-20">
           <div className="flex justify-between">
           <p className="font-bold text-2xl">{menuItems?.title}</p>
            <button className="font-bold text-3xl" onClick={()=>{setIsOpen(true)}}>
                {
                
                   isOpen?"^":"⌄"
                }
            </button>
           </div>
           <div className="mt-4 h-5 bg-gray-300"></div>
        </div>
        );
    }

    if(foodselected=="veg")
    {
        return(
            <div className="w-full m-20">
           <div className="flex justify-between">
           <p className="font-bold text-2xl">{menuItems?.title}</p>
            <button className="font-bold text-3xl" onClick={()=>{setIsOpen(false)}}>
                {
                
                   isOpen?"^":"⌄"
                }
            </button>
           </div>
            <div>
                {
                    menuItems?.itemCards?.filter((items)=>{ return (items?.card?.info?.hasOwnProperty("isVeg")==true) ;})?.map((items)=>{
                        return <RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>
                    })
                }
            </div>
            <div className="mt-4 h-5 bg-gray-300"></div>
        </div>

        );
    }
    
    if(foodselected=="nonveg")
        {
            return(
                <div className="w-full m-20">
               <div className="flex justify-between">
               <p className="font-bold text-2xl">{menuItems?.title}</p>
                <button className="font-bold text-3xl" onClick={()=>{setIsOpen(false)}}>
                    {
                    
                       isOpen?"^":"⌄"
                    }
                </button>
               </div>
                <div>
                    {
                        menuItems?.itemCards?.filter((items)=>{ return (items?.card?.info?.hasOwnProperty("isVeg")==false) ;})?.map((items)=>{
                            return <RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>
                        })
                    }
                </div>
                <div className="mt-4 h-5 bg-gray-300"></div>
            </div>
    
            );
        }

    return(
        
        <div className="w-full m-20">
           <div className="flex justify-between">
           <p className="font-bold text-2xl">{menuItems?.title}</p>
            <button className="font-bold text-3xl" onClick={()=>{setIsOpen(false)}}>
                {
                
                   isOpen?"^":"⌄"
                }
            </button>
           </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=>{
                        return <RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>
                    })
                }
            </div>
            <div className="mt-4 h-5 bg-gray-300"></div>
        </div>

    )
}

// 01:05:18 date 17 march lec-24 swiggy part-5