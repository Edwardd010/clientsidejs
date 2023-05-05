import React from "react";
import './Input.css';

function Input({iType, iValue, iKeyPress, iChange}){

    return (
        <>
            <input
                type={iType}
                value={iValue}
                onKeyDown={iKeyPress}
                onChange={iChange}

            />
        </>
    )
}

export default Input;