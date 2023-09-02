import { useSelector } from "react-redux"
import Itemlist from "./Itemlist";
import { useDispatch } from "react-redux";
import { clearitem } from "../utils/cartSlice";
const Cart_layout = ()=>{
    const cartitem = useSelector((store)=>store.cart.item);
    const dispatch = useDispatch();
    console.log(cartitem)
    return <div className="w-6/12 mx-auto">
        <button onClick={()=>dispatch(clearitem())} className="bg-black text-white p-1">Clear Cart</button>
        <h1 className="font-bold text-center text-xl my-2">CART</h1>
        <Itemlist listdata={cartitem}/>
    </div>
}
export default Cart_layout