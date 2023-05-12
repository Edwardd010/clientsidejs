import React from "react";
import './Input.css';

function Input({iType, iValue, iKeyPress, iChange, iPlaceholder, iClassName, iName}){

    return (
        <>
            <input
                className={iClassName}
                name={iName}
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