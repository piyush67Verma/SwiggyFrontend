export default function RestInfo(props){
    let {restData} = props;
    return (
        <>
        <div className="w-full flex justify-between m-5">
            <div className="w-[70%]">
                <p className="text-gray-800  font-bold ">{restData?.name}</p>
                <p>{"₹"+(Number("price" in restData ? restData?.price : restData?.defaultPrice)/100)}</p>
                <p>{"⭐"+ restData?.ratings?.aggregatedRating?.rating+" ("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</p>
                <p className="text-gray-500">{restData?.description}</p>
            </div>
            <div className="w-[20%] relative">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+`${restData?.imageId}`}
                    className="w-full h-36 object-cover m-3 rounded"
                ></img>
                <button className="absolute text-2xl text-green-400 bg-white left-25 bottom-1 px-2 py-1 shadow-gray-500 shadow-md rounded">ADD</button>
            </div>
        </div>
        <hr></hr>
        </>
    );
}
