import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resMenuLink } from "../utils/constant";
import Menulist from "./Menulist";

const RestaurantMenu_Layout = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  const [showIndex, setshowIndex] = useState(0);

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);
  async function getRestaurantInfo() {
    try {
      const response = await fetch(resMenuLink + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find(
            (x) =>
              x &&
              x.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )?.card?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData = json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      setMenuItems(menuItemsData);
      console.log(restaurant);
      console.log(menuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return (
    <div className="w-6/12 mx-auto">
      {/* <div className="flex justify-between  my-2 p-2 border bg-gray-300 shadow-lg">
        <div>
          <h1 className="font-bold">{restaurant.name} </h1>
          <h1>{restaurant.cuisines}</h1>
          <h1>{restaurant.locality}</h1>
        </div>
        <div>
          <h1>{restaurant.avgRating}</h1>
          <h1>{restaurant.totalRatingsString}</h1>
        </div>
      </div> */}
          {menuItems.map((data,index) => {
            return <div key={data?.title} > 
              <Menulist menudata={data} showitem={index==showIndex&&true} setshowitem={()=>setshowIndex(index)}></Menulist>
              </div>
          })}
    </div>
  );
};
export default RestaurantMenu_Layout;
