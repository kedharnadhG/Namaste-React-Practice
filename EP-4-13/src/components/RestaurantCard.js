import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    slaString,
  } = resData;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] h-[450px]  rounded-lg bg-gray-100 hover:bg-gray-300"
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        className="rounded-lg shadow-lg w-50 h-50"
        alt="res-logo"
      />
      <h3 className="font-bold py-3 text-lg text-center">{name}</h3>
      <h5>
        {cuisines.length >= 3
          ? cuisines.slice(0, 3).join(", ") + "..."
          : cuisines.join(", ")}
      </h5>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString ? slaString : resData?.sla?.slaString}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// (contract) input- RestaurantCard ==>> RestaurantCardTopRated - label

export const withTopRatedLabel = (RestaurantCard) => {
  //returning a new-Enhanced-component
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-700 text-white m-2 p-1 rounded-lg">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
