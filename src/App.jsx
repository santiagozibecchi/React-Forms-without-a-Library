import { useRef, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
   //    const [username, setUsername] = useState("");

   console.log("re-rendered");

   const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data.entries()));
   };

   return (
      <div className="app">
         <form onSubmit={handleSubmit}>
            <FormInput name="Username" placeholder="Username" />
            <FormInput name="Email" placeholder="Email" />
            <FormInput name="Full Name" placeholder="Full Name" />
            <FormInput name="Other" placeholder="Other" />
            <button>Submit</button>
         </form>
      </div>
   );
}

export default App;
