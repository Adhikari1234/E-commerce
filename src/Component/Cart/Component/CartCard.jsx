import React from "react";
import StarCalc from "../../Product/component/StarCalc";
import { BsFillTrash3Fill } from "react-icons/bs";
import removeFromCart from "../../LocalStorage/removeFromCart";
import Quantity from "../Quantity";

const CartCard = ({ data, setCartData }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="border border-gray-300 rounded-2xl overflow-hidden
        flex flex-col sm:flex-row w-full max-w-3xl bg-white transition duration-300 
        shadow-md hover:shadow-2xl hover:border-orange-500 hover:bg-orange-50 relative"
      >
        {/* Delete Button */}
        <div
          className="h-9 w-9 flex justify-center items-center 
          absolute top-2 right-2 bg-red-500 rounded-full 
          shadow-md cursor-pointer hover:scale-110 transition-transform border border-white z-10"
          onClick={() => removeFromCart(data, setCartData)}
        >
          <BsFillTrash3Fill className="text-white text-lg" />
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={data.image}
            alt={data.name}
            className="h-40 w-40 object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
          />
        </div>

        {/* Content */}
        <div className="flex justify-between items-center px-4 py-4 w-full gap-3 flex-wrap">
          <div className="space-y-1">
            <div className="text-gray-800 font-bold text-lg md:text-xl">{data.name}</div>
            <div className="text-sm text-gray-500 italic">{data.tags?.[0]}</div>
            <Quantity data={data} setCartData={setCartData} />
          </div>

          <div className="text-right ml-auto space-y-1">
            <StarCalc rating={Math.floor(data.rating)} />
            <p className="text-xl font-bold text-orange-600">
              Rs. {data.caloriesPerServing}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
