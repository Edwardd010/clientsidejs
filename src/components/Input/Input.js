import React from "react";
import './Input.css';

function Input({iType, iValue, iKeyPress, iChange, iPlaceholder, iClassName}){

    return (
        <>
            <input
                className={iClassName}
                type={iType}
                value={iValue}
                onKeyDown={iKeyPress}
                onChange={iChange}
                placeholder={iPlaceholder}
            />
        </>
    )
}

export default Input;