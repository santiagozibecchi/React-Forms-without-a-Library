import { useState } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

function App() {
   const [values, setValues] = useState({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
   });

   const inputs = [
      {
         id: 1,
         name: "username",
         type: "text",
         errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
         placeholder: "Username",
         label: "Username",
         // pattern -> codigo de etiqueta HTML permite solo lo que coincida, caso contrario
         pattern: "^[A-Za-z0-9]{3,16}$",
         required: true,
      },
      {
         id: 2,
         name: "email",
         type: "email",
         errorMessage: "It should be a valid email address",
         placeholder: "Email",
         label: "Email",
         required: true,
      },
      {
         id: 3,
         name: "birthday",
         type: "date",
         errorMessage: "",
         placeholder: "Birthday",
         label: "Birthday",
      },
      {
         id: 4,
         name: "password",
         type: "password",
         errorMessage:
            "Password should be 8-20 character and include at least 1 letter, 1 number, and 1 special character",
         placeholder: "Password",
         label: "Password",
         pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
         required: true,
      },
      {
         id: 5,
         name: "confirmPassword",
         type: "password",
         errorMessage: "Password don't match",
         placeholder: "Confirm your password",
         label: "ConfirmPassword",
         pattern: values.password,
         required: true,
      },
   ];

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   // * Capturo el evento de cada uno de los inputs del formulario, de tal forma que accedo al name propio iterado de cada input, asignandole el valor de entrada correspondiente. Actualizo el estado(values)
   const onChange = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value,
      });
   };

   // console.log(values);

   return (
      <div className="app">
         <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
               <FormInput
                  key={input.id}
                  // * spread operator: paso a la prop todos las propiedades/valor que contiene el input
                  {...input}
                  // * Creo una nueva propiedad "VALUE" PARA EL INPUT, que paso por prop, a esta se le asigna el valor de entrada del input
                  // * itera el name de cada input y como cada propiedad del state(values) coincide con name, logramos acceder al valor INDIVIDUAL de cada una de ellas
                  value={values[input.name]}
                  onChange={onChange}
               />
            ))}
            <button type="submit">Submit</button>
         </form>
      </div>
   );
}

export default App;
