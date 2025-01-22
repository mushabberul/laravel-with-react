import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,Link } from "react-router";

import Home from './Home';
import About from './About';


function MyApp() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    );

}


ReactDOM.createRoot(document.getElementById('app')).render(<MyApp />);
