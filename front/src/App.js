import React from 'react';
import Header from "./components/Header";
import Home from './pages/Home';
import FormAddWilder from './pages/FormAddWilder';
// import UpdateWilder from './pages/UpdateWilder';
import DeleteWilder from './components/DeleteWilder';
// import AddSkills from './components/AddSkill';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route  path="/">
            <Route index element={<Home/>}/>
            <Route path="addwilder" element={<FormAddWilder />} />
            {/* <Route path="update/:wilderId" element={<UpdateWilder />} /> */}
            <Route path="delete/:wilderId" element={<DeleteWilder />} />
            {/* <Route path="addskills/:wilderId" element={<AddSkills />} /> */}
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;