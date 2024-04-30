import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Store from './Pages/Store';
import Wholesale from './Pages/Wholesale';
import JoinUs from './Pages/JoinUs';
import Contact from './Pages/Contact';


function App() {



  return (
    <Router >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nosotros' element={<AboutUs/>} />
        <Route path='/tienda' element={<Store/>} />
        <Route path='/mayoreo' element={<Wholesale/>} />
        <Route path='/reclutamiento' element={<JoinUs/>} />
        <Route path='/contacto' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
