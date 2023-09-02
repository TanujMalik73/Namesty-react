import { useState } from "react";
import Itemlist from "./Itemlist";
const Menulist = ({ menudata,showitem,setshowitem}) => {
  const[show,setshow]=useState(false)
  return (
    <div>
      <div onClick={(index)=>{
        setshowitem(index)
        setshow(!show)
      }
      } className="flex justify-between my-4 border bg-gray-300 shadow-lg cursor-pointer">
        <h1>
          {menudata.title} ({menudata.itemCards.length})
        </h1>
        <span>🔽</span>
      </div>

      {showitem && show &&<Itemlist listdata={menudata?.itemCards} />}
    </div>
  );
};
export default Menulist;
