import { shimmer_card_unit, shimmer_menu_card_unit } from "../utils/constant";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card  m-4 p-4 w-52 h-96 border rounded-lg">
      <div className=" shimmer-img w-48 h-48 border rounded-lg stroke-slate-300 animate-pulse bg-gray-200"></div>
      <div className="shimmer-title my-4 w-48 h-4 border rounded-sm  stroke-slate-300  bg-gray-200"></div>
      <div className="shimmer-tags my-4 w-48 h-2 border rounded-lg stroke-slate-300  bg-gray-200" ></div>
      <div className="shimmer-details my-4 w-48 h-2 border rounded-lg stroke-slate-300  bg-gray-200"></div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary stroke-color animate">
        <img className="shimmer-img stroke animate" />
        <div className="restaurant-summary-details">
          <h2 className="shimmer-w40  stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60  stroke animate">
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            { Array(shimmer_menu_card_unit).fill("").map( (element, index)  => 
            <div className="shimmer-menu-card" key={index}>
              <div className="shimmer-item-details">
                <h3 className="shimmer-w40  stroke animate"></h3>
                <p className="shimmer-w20  stroke animate"> </p>
                <p className="shimmer-w60  stroke animate"></p>
              </div>
              <div className="shimmer-img-wrapper">
                <img className="shimmer-img stroke animate" /> 
                <div className="shimmer-btn stroke animate"> </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap  justify-between  mt-16">
      {/* create a new Array instance using Array() constructor and map through every element of array */}
      {Array(shimmer_card_unit).fill("").map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;