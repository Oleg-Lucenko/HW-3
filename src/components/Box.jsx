import React, { useEffect } from "react";
import './box.css';





const Box = ({colorStatus, changeColorStatus}) => {
    
  useEffect(() => {

        const handleClick = () => {
            changeColorStatus(!colorStatus);
        };

        window.addEventListener('click', handleClick);

        return () => window.removeEventListener("click", handleClick);

    }, [colorStatus]);



    return <div className="box" ></div>
    
    
};

export default Box;
