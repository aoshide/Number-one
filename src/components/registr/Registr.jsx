import React from "react";
import './Registr.css';


export const Registr = () => {
   return (
      <div className="Registr">
         <div className="container">
            <h2>Registration Form</h2>
            <p>Please fill in your details below:</p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" placeholder="Enter your address" />
            <button>Submit</button>
         </div>
      </div>
   )
}


export default Registr;