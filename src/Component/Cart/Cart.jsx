import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CartCard";
import { useState, useEffect } from "react";
import OrangeButton from "../Button/OrangeButton";
import totalAmount from "../ComponentFunction/totalAmount";
import CheckOutModal from "./CheckOutModal";

const Cart = () => {
  const [visible, setVisible] = useState(false);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("cart1");
    setCartData(JSON.parse(data) || []);
  }, []);

  return (
    <div className="p-3 px-5 flex flex-col min-h-[100vh] bg-gray-50">
      {/* NavBar */}
      <NavBar />

      {/* Cart Items */}
      <div className="mx-5 space-y-4 flex-1 overflow-auto mt-3">
        {cartData.length > 0 ? (
          cartData.map((item) => (
            <CartCard data={item} key={item.id} setCartData={setCartData} />
          ))
        ) : (
          <div className="text-center text-gray-500 font-medium mt-10">
            Your cart is empty.
          </div>
        )}
      </div>

      {/* Checkout Bar */}
      {cartData.length > 0 && (
        <div className="mt-5 py-4 border-t bg-white shadow-md px-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <OrangeButton title={"Proceed to Checkout"} onClick={() => setVisible(true)} />
          <div className="font-bold text-lg text-orange-700">
            Total: Rs. {totalAmount(cartData)}
          </div>
        </div>
      )}

      {/* Modal */}
      <CheckOutModal visible={visible} setVisible={setVisible} cartData={cartData} />
    </div>
  );
};

export default Cart;
