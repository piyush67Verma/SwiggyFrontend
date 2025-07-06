export default function DineCard({value}){
    return(
       <a  target="_blank" href={value.cta.link}>
            <div className=" max-w-sm flex flex-col shadow-lg p-3 bg-gray-200 rounded">
            
            <div className="w-90 h-45 flex-none">
                <img className="rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.mediaFiles[0]?.url}`}></img>
                <p className=" mt-5 text-xl font-bold ">{value.info.name}</p>
                <p className="mt-3 mb-4 text-xl">{value.info.rating.value}{'⭐'}</p>
            </div>

            <div className="mt-50">
                <div className="flex justify-between text-xl">
                    <span>{value?.info?.cuisines[0]}{value?.info?.cuisines[1]}</span>
                    <span className="">{value?.info?.costForTwo}</span>
                </div>
               
               <div  className="flex justify-between text-xl">
                <span>{value?.info?.locality+", "}{value?.info?.locationInfo?.city?.name}</span>
                <span className="">{value?.info?.locationInfo?.distanceString}</span>
                </div>
            
            </div>

            <div className="bg-gray-300 rounded-2xl w-35 p-2 mt-5 ">
                <img className=" inline-block w-3 h-3 mr-1" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.info.vendorHighlights[0].logo.logo}`}></img>
                <span>{value?.info?.vendorHighlights[0]?.title}</span>
            </div>

            <div className="font-bold text-white text-2xl text-center rounded bg-[#1ba672] mt-5">
                <p>{value?.info?.offerInfoV2?.otherOffers?.offers[0]?.header}</p>
            </div>
            
            <div className="text-[#5ec79f] text-2xl p-2  rounded bg-[#c8f9e5] mt-5">
                <p>{value?.info?.customerOffer?.info?.description.substring(2)}</p>
            </div>
            </div>
       </a>
    )
}
