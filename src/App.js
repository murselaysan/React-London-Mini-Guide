import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Header from "./Header";
import './App.css';
import Navbar from './Navbar';
import Table from './Table';
import Data  from "./data/Harrow.json"


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
     <Navbar />
     <Table info ={Data} />
     
    </div>
  );
}

export default App;
