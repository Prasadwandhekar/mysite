import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router ,Routes , Route } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>

         <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/about" element={<App/>}/>
            <Route path="/contact" element={<App/>}/>
            <Route path="/skills" element={<App/>}/>
            <Route path="/projects" element={<App/>}/>
            <Route path="/education" element={<App/>}/>


         </Routes>

    </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
