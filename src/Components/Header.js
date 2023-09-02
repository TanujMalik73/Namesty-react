//Header contaner
import { useState } from "react";
import { LOGO_LINK } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
const Header_layout = () => {

const item_incart = useSelector((store)=>store.cart.item)

  const online = useOnline();
  const [Val, setVal] = useState("login");
  return (
    <div className="flex h-40 p-4 justify-between bg-green-100">
      <div>
        <img className="w-20 " src={LOGO_LINK}></img>
      </div>
      <ul className="flex space-x-6 font-bold my-auto">
        <li >{online ? "✅" : "🔴"}</li>
        <li >
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact us</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({item_incart.length})</Link>
        </li>
        <button 
          onClick={() => {
            Val === "login" ? setVal("logout") : setVal("login");
          }}
          className="bg-green-100 w-24 hover:bg-green-200"
        >
          {Val}
        </button>
      </ul>
    </div>
  );
};
export default Header_layout;
