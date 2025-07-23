import React from 'react';
import UserDetails from './UserDetails';

const CheckOutModal = ({ visible, setVisible, cartData }) => {
  const getTotal = () => {
    return cartData.reduce(
      (total, item) => total + item.caloriesPerServing * item.quantity,
      0
    );
  };

  return (
    <div
      className={`${
        visible ? 'flex' : 'hidden'
      } fixed inset-0 z-40 bg-black/60 backdrop-blur-sm justify-center items-center transition-opacity duration-300`}
      onClick={() => setVisible(false)}
    >
      <div
        className="p-5 w-[90%] max-w-md max-h-[85vh] rounded-xl bg-white flex flex-col overflow-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ❌ Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-600 text-2xl font-bold transition"
          onClick={() => setVisible(false)}
        >
          &times;
        </button>

        {/* Modal Title */}
        <div className="text-2xl font-bold mb-6 text-center text-gray-800">
          CHECKOUT
        </div>

        {/* Item List */}
        <div>
          <div className="text-lg text-orange-600 font-semibold mb-3">Items:</div>

          <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
            {cartData.map((item) => (
              <div
                className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
                key={item.id}
              >
                <div className="flex-1 font-medium text-gray-800">{item.name}</div>
                <div className="w-10 text-center text-gray-600">x{item.quantity}</div>
                <div className="w-16 text-right text-orange-700 font-semibold">
                  {item.caloriesPerServing * item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between font-bold text-orange-700 border-t pt-4 mt-5 text-lg">
            <div className="flex-1">Total</div>
            <div className="w-14"></div>
            <div className="w-16 text-right">{getTotal()}</div>
          </div>
        </div>

        {/* UserDetails Form */}
        <div className="mt-6">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;
