//Body contaner
import Res_container, { higher_Opentag } from "./Resturents";
import { Link } from "react-router-dom";
import { useEffect, useState ,useContext} from "react";
import useOnline from "../utils/useOnline";
import Shimmer from "./Shimmer";
import userContext from "../utils/userContext";
//Resturent List
const Body_layout = () => {
  //useState:-React Hook gives Superpowers to a varible
  const [ListofResturent, SetListofResturent] = useState([]);
  const [ListoffilterResturent, SetListoffilterResturent] = useState([]);
  const [Inputtext, Setinputtext] = useState("");

  const{username,SetUsername}=useContext(userContext)

  const Opentag = higher_Opentag(Res_container);
  useEffect(() => {
    getRestaurants();
  }, []);
  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      SetListofResturent(resData);
      SetListoffilterResturent(resData);
    } catch (error) {
      console.log(error);
    }
  }
  const online = useOnline();
  if (online === false) {
    return <h1>check your internet connection</h1>;
  }
  return ListoffilterResturent.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body_container comman_container">
      <div className="m-4">
        <input
          className="border w-48"
          type="search"
          placeholder="Search here"
          value={Inputtext}
          onChange={(e) => {
            Setinputtext(e.target.value);
          }}
        ></input>
        <button
          className="ml-4 p-1.5 border border-gray-200 bg-green-100 shadow-lg rounded-lg"
          type="button"
          onClick={() => {
            const Filteredres = ListofResturent.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(Inputtext.toLowerCase());
            });
            SetListoffilterResturent(Filteredres);
          }}
        >
          Search
        </button>
        {/* ****************filter ***************/}
        <button
          className="ml-4 p-1.5 border border-gray-200 bg-green-100 shadow-lg rounded-lg"
          type="button"
          onClick={() => {
            let filteredList = ListofResturent.filter((res) => {
              return res.info.avgRating > 4;
            });
            SetListoffilterResturent(filteredList);
          }}
        >
          Top Rated Resturents
        </button>

        <input className="border border-black mx-4 p-1" onChange={(e)=>{
          SetUsername(e.target.value)
        }} placeholder={username}></input>
      </div>
      {/* ****************filter end ************** */}

      <div className="flex flex-wrap justify-evenly">
        {ListoffilterResturent.map((data) => {
          return (
            <Link to={"/restaurantmenu/" + data?.info?.id} key={data?.info?.id}>
              {data.info.isOpen?<Opentag Res_data={data} />
              :
                <Res_container Res_data={data} />
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body_layout;
