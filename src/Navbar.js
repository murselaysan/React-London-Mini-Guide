import React from "react";

export default function Navbar() {
  return (
    <div>
      <label for="cars">Choose a City:</label>
      <select name="cars" id="cars">
        <option value="" selected  disabled >Select a City</option>
        <option value="saab">Harrow</option>
        <option value="mercedes">Straddorf</option>
        <option value="audi">Heathrow</option>
      </select>
      <hr />
      <div className="navbar">
        <button className="btn btn-primary">Pharmacies</button>
        <button className="btn btn-primary">School and Colleges</button>
        <button className="btn btn-primary">Hospitals</button>
        <button className="btn btn-primary">Doctors</button>
      </div>
    </div>
  );
}
