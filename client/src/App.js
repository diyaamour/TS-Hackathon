import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home.js';
import { AllEntries } from './views/AllEntries';
import { OneReview } from './views/OneReview';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/entries' element={<AllEntries />} />
        <Route path='/reviews/:id' element={<OneReview />} />
      </Routes>
    </div>
  );
}

export default App;