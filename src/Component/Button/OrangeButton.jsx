import React from "react";

const OrangeButton = ({ title, ...props }) => {
  return (
    <div
      {...props}
      className="bg-orange-500 text-white font-semibold text-sm py-2 px-3 w-fit rounded-md hover:bg-orange-600 shadow-md shadow-orange-200 transition"
    >
      {title}
    </div>
  );
};

export default OrangeButton;