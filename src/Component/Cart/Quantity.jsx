import React from "react";
import addQuantity from "../LocalStorage/addQuantity";
import subQuantity from "../LocalStorage/subQuantity";

const Quantity = ({ data, setCartData }) => {
  return (
    <div className="flex items-center space-x-4 px-4 py-2 rounded-xl w-fit">
      <button
        className="w-8 h-8 flex items-center justify-center text-lg font-bold text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition"
        onClick={() => subQuantity(data, setCartData)}
      >
        −
      </button>
      <span className="text-xl font-semibold text-orange-700">{data.quantity}</span>
      <button
        className="w-8 h-8 flex items-center justify-center text-lg font-bold text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition"
        onClick={() => addQuantity(data, setCartData)}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;