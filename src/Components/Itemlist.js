import { useDispatch } from "react-redux";
import { additem } from "../utils/cartSlice";
const Itemlist = ({ listdata }) => {
  // console.log(listdata)
  const dispatch = useDispatch();
  return (
    <div className="p-4 my-2">
      {listdata.map((data) => {
        return (
          <div className="flex justify-between my-2">
            <h1>{data.card.info.name}</h1>
            <button
              onClick={() => {
                dispatch(additem(data));
              }}
              className="bg-black text-white"
            >
              +ADD
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Itemlist;
