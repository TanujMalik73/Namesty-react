//Resturent container
import { CDN_LINK } from "../utils/constant";
import userContext from "../utils/userContext";
import { useContext } from "react";
const Res_container = ({Res_data}) => {
  const{username}=useContext(userContext)
    const{cloudinaryImageId,name,areaName,avgRating,costForTwo}=Res_data?.info
    return (
      <div className="m-4 p-4 w-52 shadow-lg rounded-lg h-96 hover:border hover:bg-green-50 ">
        <img className="w-48 h-48 shadow-lg rounded-lg"
          src={
            CDN_LINK+
            cloudinaryImageId
          }
        ></img>
        <h2 className="my-4 font-semibold">{name}</h2>
        <div className="res-detail">
          <h4>{areaName}</h4>
          <h4>{avgRating}stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{username}</h4>
        </div>
      </div>
    );
  };

  //higher order function
export const higher_Opentag=(Res_container)=>{
  return (props)=>{
    return <div>
      <label className="absolute text-black">{"🔓"}</label>
      <Res_container {...props}/>
    </div>
  }
 }

  export default Res_container;