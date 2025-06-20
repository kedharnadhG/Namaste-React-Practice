import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  // Local state-variable -super powerful variable (array-destructuring on the fly)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Higher Order Component (calling a function that returns a new component which has "TopRatedLabel" in it)
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  // conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* filter */}
      <div className="filter flex ">
        {/* search */}
        <div className="m-2 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-black p-2 border-solid rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurant-cards and update the ui
              // console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res?.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-2 p-4 flex items-center ">
          <button
            className="px-4 py-2 rounded-lg bg-gray-200"
            onClick={() => {
              //filter logic
              setFilteredRestaurants(
                listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
              );
              // console.log(listOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-2 p-4 flex items-center ">
          <label className="pr-2 ">UserName: </label>
          <input
            className="border p-1 border-black rounded-md"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* restaurantContainer */}
      <div className="flex flex-wrap shadow-lg">
        {/* Config-driven UI */}
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            className="res-link"
          >
            {
              /* if the restaurant's "avgRating" is > 4.5 => "Top Rated" , do using HOC  */

              restaurant?.info?.avgRating >= 4.5 ? (
                <RestaurantCardTopRated resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
