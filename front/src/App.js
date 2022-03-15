import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormAddWilder from './pages/FormAddWilder';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="*" element={<Home/>} />
        <Route path="/addwilder" element={<FormAddWilder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;