import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Header from "./Header";
import './App.css';



function App() {
  const [isactive, setIsActive] = useState({
    pharmacies: false,
    highSchools: false,
    colleges: false,
    hospitals: false,
    Gps: false

  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [err, setErr] = useState(false);
  return (
    <div className="App">
     <Header />
     <select style={{ display: 'inline' }} id="citySelector" autoFocus="-1" value={city} onChange={(e) => { console.log('e value', e.target.value); setCity(e.target.value); }}>
        <option id="defaultcitySelection" value="no-city" defaultValue='' >select a city </option>
        <option value='Harrow'>Harrow</option>
        <option value="stratford" >Stratford</option>
        <option value='heathrow'>Heathrow</option>
      </select>
      {
        err && <><hr className="mt-2 mb-2" /><div className="alert-danger" ><h5>check out your request, a city and category must be chosen, No default values are provided</h5></div></>
      }
      
      <hr />
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <button className={isVisible.pharmacies ? "nav-link active" : "nav-link"} onClick={(e) => { grapPharmacies(); handleTabClick(e) }} value="pharmacies" >Pharmacies</button>
        </li>
        {/* <li className="nav-item">
          <button className={isVisible.highSchools ? "nav-link active" : "nav-link"} onClick={(e) => { handleTabClick(e) }} value="highSchools" >high schools</button>
        </li> */}
        <li className="nav-item">
          <button className={isVisible.colleges ? "nav-link active" : "nav-link"} onClick={(e) => { grapColleges(); handleTabClick(e) }} value="colleges" > schools & colleges</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.hospitals ? "nav-link active" : "nav-link"} onClick={(e) => { grapHospitals(); handleTabClick(e) }} value="hospitals" >hospitals</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.Gps ? "nav-link active" : "nav-link"} onClick={(e) => { grapDoctors(); handleTabClick(e) }} value="Gps" >doctors</button>
        </li>
      </ul>



      {/* <hr />
      <div>
        <span>show: {' '} {' '} {' '} {' '}</span>
        <div style={{ display: 'inline' }} class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="defaultChecked2" checked />
          <label class="custom-control-label" for="defaultChecked2">Default checked</label>
        </div>
      </div> */}
      <br className="mb-5" />
    </div>
  );
}

export default App;
