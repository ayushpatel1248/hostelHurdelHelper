import React from 'react';

import Login from './Components/Login/Login';
import StudentPanel from './Components/StudentPanel/StudentPanel'
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/complain" element={<StudentPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;