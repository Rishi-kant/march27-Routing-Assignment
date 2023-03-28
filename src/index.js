import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './AboutUs';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <BrowserRouter>
     <App />
     <Routes>
       <Route  path="/" element={<About/>}/>
       <Route  path="/login" element={<Login/>}/>
       <Route  path="/register" element={<Register/>}/>
     </Routes>
   </BrowserRouter>
  </React.StrictMode>
);


