import React from "react";
import StarCalc from "../../Product/component/StarCalc";
import { BsFillTrash3Fill } from "react-icons/bs";
import removeFromCart from "../../LocalStorage/removeFromCart";
import Quantity from "../Quantity";


const CartCard = ({ data, setCartData }) => {
  return (
    <div className="flex justify-center items-center  bg-transparent">
      <div className="border border-gray-300 rounded-2xl overflow-hidden
       flex w-full max-w-3xl bg-white transition duration-300 
       shadow-sm hover:shadow-2xl hover:border-orange-500 hover:bg-orange-50 relative m-4">
        <div
          className="h-9 w-9 flex justify-center items-center 
          absolute top-2 right-2 bg-red-500 rounded-full 
          shadow-md cursor-pointer hover:scale-105 transition-transform border border-white z-10"
          onClick={() => removeFromCart(data, setCartData)}
        >
          <BsFillTrash3Fill className="text-white text-lg" />
        </div>

        <div>
          <img
            src={data.image}
            alt={data.name}
            className="h-40 w-40 object-cover rounded-l-2xl"
          />
        </div>

        <div className="flex justify-between items-center px-5 py-4 w-full">
          <div className="space-y-2">
            <p className="text-gray-800 font-bold text-xl">{data.name}</p>
            <p className="text-sm text-gray-500 italic">{data.tags?.[0]}</p>
            <p className="font-semibold text-gray-700">
           <Quantity data={data} setCartData={setCartData} />

            </p>
          </div>

          <div className="text-right space-y-2">
            <StarCalc rating={Math.floor(data.rating)} />
            <p className="text-2xl font-extrabold text-orange-600">
              Rs. {data.caloriesPerServing}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;