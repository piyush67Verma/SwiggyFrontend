let arr = [];

for(let i=0; i<20; i++)
{
    arr.push(<ShimCard key={i}/>);
}

function ShimCard()
{
    return(

            <div className=" flex-none max-w-[600px] shadow-gray-500 shadow-lg">
                    <div className="w-78 h-50 bg-gray-400 rounded m-3"></div>
                    <div className=" flex flex-col justify-center mt-2 max-w-[90%] gap-3 ml-4 mb-4">
                        <div className="bg-gray-400 h-8  "></div>
                        <div className="bg-gray-400 h-8  "></div>
                        <div className="bg-gray-400 h-8  "></div>
                    </div>
            </div>
    
    )
}




export default function Shimmer(){
    
    return(
        <div className="container mx-auto mt-30">
            <div className="flex flex-wrap ml-20 gap-2 ">
               {arr}
            </div>
        </div>
    );
}