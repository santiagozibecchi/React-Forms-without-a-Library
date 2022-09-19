import { useRef, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

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
         placeholder: "Username",
         label: "Username",
      },
      {
         id: 2,
         name: "email",
         type: "text",
         placeholder: "Email",
         label: "Email",
      },
      {
         id: 3,
         name: "birthday",
         type: "text",
         placeholder: "Birthday",
         label: "Birthday",
      },
      {
         id: 4,
         name: "password",
         type: "password",
         placeholder: "Password",
         label: "Password",
      },
      {
         id: 5,
         name: "confirmPassword",
         type: "password",
         placeholder: "Confirm your password",
         label: "ConfirmPassword",
      },
   ];

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <div className="app">
         <form onSubmit={handleSubmit}>
            <FormInput name="Username" placeholder="Username" />
            <button>Submit</button>
         </form>
      </div>
   );
}

export default App;
