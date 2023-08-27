import { IMG_CDN_URL } from "../config";


const ResturantCard = ({cloudinaryImageId,name,cuisines,avgRating}) =>
{

 

  return (
    <>
    {/* <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} /> */}
    <div className="bg-white p-4 rounded-lg shadow-md h-[320px]">
       <img src={IMG_CDN_URL  +cloudinaryImageId} className="w-full h-32 object-cover rounded-md mb-2"/>
       <h2 className="text-lg font-semibold mb-1">{name}</h2>
       <p className="text-gray-500 mb-1">{cuisines.join(", ")}</p>
       <div class="flex items-center">
      <span class="text-yellow-500">⭐️</span>
      <p class="ml-1">{avgRating}</p>
    </div>
    </div>
    </>
  );
}

export default ResturantCard;
