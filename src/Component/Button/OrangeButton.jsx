import React from "react";

const OrangeButton =({ title, ...props}) => {
    return( <div {...props}
    className = " bg-orange-500 text-white font-semibold text-sm py-2 px-3 w-fit rounded-md hove:bg-amber-300 shadow-sm shadow-green-200">
        {title}
    </div>
)
}
export default OrangeButton;    
