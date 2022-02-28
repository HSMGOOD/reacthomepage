import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Land from "./components/landing/Landing";
import Comunity from "./components/comunity/Comunity";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Land/>}/>
      <Route path="/comunity" element={<Comunity/>}/>
    </Routes>
  )
}

export default App
