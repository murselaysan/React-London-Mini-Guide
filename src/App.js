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
  return (
    <div className="App">
     <Header />
    </div>
  );
}

export default App;
