import React from "react";
import './Button.css'

function Button({bType, bClick, bText}){
    return (
        <>
            <button
                type={bType}
                onClick={bClick}
            >
                {bText}
            </button>
        </>
    )
}

export default Button;