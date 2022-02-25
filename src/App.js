import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Land from "./components/landing/Landing";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Land/>}/>
    </Routes>
  )
}

export default App
