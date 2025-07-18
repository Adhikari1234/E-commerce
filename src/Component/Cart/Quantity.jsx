
import addQuantity from "../LocalStorage/addQuantity";
import subQuantity from "../LocalStorage/subQuantity";


const Quantity = ({data ,setCartData}) => {


  return (
    <div className="flex items-center space-x-4  px-4 py-2 rounded-xl   w-fit">
      <button
        
        className="w-8 h-8 flex items-center 
        justify-center text-lg font-bold text-gray-700 bg-amber-300 rounded-full 
        shadow-lg hover:bg-orange-100 transition" onClick={()=> subQuantity(data,setCartData)}
      >
        −
      </button>
      <span className="text-xl font-semibold text-gray-800">{data.quantity}</span>
      <button
        
        className="w-8 h-8 flex items-center justify-center text-lg 
        font-bold text-gray-700 bg-amber-300 rounded-full shadow-lg hover:bg-orange-100 transition"
        onClick={()=>addQuantity(data,setCartData)}  >
        +
      </button>
    </div>
  );
};

export default Quantity;