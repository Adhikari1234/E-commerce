import { useState, useEffect } from "react";
import AddToCart from "../../Button/AddToCart";
import StarCalc from "./StarCalc";
import ProductModal from "../Modal/ProductModal";
import addToCart from "../../LocalStorage/addToCart";

const Card = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartBoolean, setCartBoolean] = useState(false);

  const addItemToCart = () => {
    if (!cartBoolean) {
      addToCart(data);
      setCartBoolean(true);
    }
  };

  // Optional: prevent re-adding if item is already in cart (on page reload)
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart1")) || [];
    const exists = cartItems.some((item) => item.id === data.id);
    setCartBoolean(exists);
  }, [data.id]);

  return (
    <>
      <div
        className="my-2 flex flex-col items-center justify-center border border-gray-400 rounded-lg shadow-md w-72 overflow-hidden gap-1 hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 hover:bg-slate-50 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        {/* Product Image */}
        <img src={data.image} alt={data.name} className="h-40 w-72 object-cover" />

        {/* Product Info */}
        <div className="w-full px-3 py-2 pb-3 flex flex-col gap-1">
          <div className="text-center text-xs text-gray-600 font-medium">
            {data.mealType?.[0]}
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold w-[60%] line-clamp-2">{data.name}</div>
            <StarCalc rating={Math.floor(Number(data.rating))} />
          </div>

          {/* Price + Cart Button */}
          <div
            className="flex justify-between items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-bold text-orange-500 text-xl">
              Rs. {data.caloriesPerServing}
            </div>
            <AddToCart
              cartBoolean={cartBoolean}
              onClick={() => {
                addItemToCart();
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <ProductModal
          data={data}
          setShowModal={setShowModal}
          cartBoolean={cartBoolean}
          setCartBoolean={setCartBoolean}
          addItemToCart={addItemToCart}
        />
      )}
    </>
  );
};

export default Card;
