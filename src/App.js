import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Header from "./Header";
import './App.css';



function App() {
  const [isVisible, setIsVisible] = useState({
    pharmacies: false,
    highSchools: false,
    colleges: false,
    hospitals: false,
    Gps: false

  });
  return (
    <div className="App">
     <Header />
    </div>
  );
}

export default App;
