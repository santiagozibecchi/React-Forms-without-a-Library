import React from "react";
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

   console.log(inputProps);

   return (
      <div className="formInput">
         <label>{label}</label>
         <input {...inputProps} onChange={onChange} />
         <span>{errorMessage}</span>
      </div>
   );
};

export default FormInput;
