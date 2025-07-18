import React from 'react'

const CheckOutModal = (visible,setVisible) => {
  return (
    <div className="bg-black" onClick={()=>setVisible(false)}>
      Hello
    </div>
  );
};

export default CheckOutModal;