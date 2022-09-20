import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
   const { id, errorMessage, label, onChange, ...inputProps } = props;

   // * ...inputProps => name, placeholder, type, value
   // * Ejemplo: console.log()
   /*{
        name: "username"
        placeholder: "Username"
        type: "text"
        value: ""
    }*/

   const [focused, setFocused] = useState(false);

   const handleFocus = (e) => {
      setFocused(true);
   };

   return (
      <div className="formInput">
         <label>{label}</label>
         <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
         />
         <span>{errorMessage}</span>
      </div>
   );
};

export default FormInput;
