import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    slaString,
  } = resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="rounded-lg shadow-lg"
        alt="res-logo"
      />
      <h3 className="font-bold py-3 text-lg text-center">{name}</h3>
      <h5>{cuisines.length >= 3 ? cuisines.slice(0, 3).join(", ") + "..." : cuisines.join(", ")}</h5>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
