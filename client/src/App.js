import React from 'react';

import Login from './Components/Login/Login';
import StudentPanel from './Components/StudentPanel/StudentPanel'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from './Components/userRegister/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/complain" element={<StudentPanel />} />
        <Route path="/userLogin" element={<Login/>} />
        <Route path="/userRegister" element={<Register/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;