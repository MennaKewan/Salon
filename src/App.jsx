import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';

import Login from './pages/1-Login/Login';
import Navbar2 from './components/Navbar2/Navbar';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import Order from './pages/Order/Order';
import LogOut from './pages/LogOut/LogOut';

import SignUp from './pages/signup/signup';

import Navbar3 from './components/Navbar3/Navbar3';
import './App.css'

function App() {
  return (
    <div > 
      <Navbar2/> 
      
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/login" element={<Login />} />
       <Route path="/Service" element={<Service/>} />
       <Route path="/Contact" element={<Contact/>} />
       <Route path="/Order" element={<Order/>} />
       <Route path="/LogOut" element={<LogOut/>} />
       <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
