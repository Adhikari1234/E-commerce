import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CartCard";
import totalAmount from "../ComponentFunction/totalAmount";
import OrangeButton from "../Button/OrangeButton";
import CheckOutModal from "./CheckOutModal";

const Cart = () => {
  const [visible,setVisible]=useState(false);
  let data = localStorage.getItem("cart1");
  const [cartData,setCartData] = useState(JSON.parse(data));

  return (
    <div className="p-2 px-5 flex flex-col h-[100vh]">
      <NavBar />
      <div className="mx-5  space-y-5 flex-1 overflow-auto">
        {cartData.map((item) => (
          <CartCard data={item} key={item.id} setCartData={setCartData} />
        ))}
      </div>
      <div className="mx-5 flex justify-between item-center px-2">
        <OrangeButton  title={"Check Out"} onClick={()=> setVisible((prev)=> !prev)}/>
        <div className="flex  text-orange-500 font-bold text-2xl gap-2">
          <div>Check Out</div>
          <div>Total Amount</div>
          <div className="font-bold text-amber-600">$ {totalAmount(cartData)}</div>
        </div>

      </div>
      
      {visible && ( <CheckOutModal  setVisible={setVisible}/>)}
     
    </div>
  );
};

export default Cart;
