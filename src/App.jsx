import {  Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import SignUp from './pages/1-Login/SignUp';
import Login from './pages/Login/Login';
import UserPage from './pages/User/UserPage';
import VendorServices from './pages/VendorServices';
import CustomerRatings from './pages/CustomerRatings';
import Orders from './pages/Orders';
import Logout from './pages/LogOut/LogOut';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRouter';

function App() {
  const [auth, setAuth] = useState({ token: '', role: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      setAuth({ token, role });
    }
  }, []);

  const handleLogin = (token, userRole) => {
    setAuth({ token, role: userRole });
    localStorage.setItem('token', token);  // Save token to localStorage
    localStorage.setItem('role', userRole);  // Save role to localStorage
  };

  const handleLogout = () => {
    setAuth({ token: '', role: '' });
    localStorage.removeItem('token');  // Clear token from localStorage
    localStorage.removeItem('role');  // Clear role from localStorage
  };

  return (
    <AuthProvider>
        <Navbar isLoggedIn={!!auth.token} role={auth.role} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/user" element={<PrivateRoute element={<UserPage />} role="user" />} />
          <Route path="/vendorservices" element={<PrivateRoute element={<VendorServices />} role="vendor" />} />
          <Route path="/customerratings" element={<PrivateRoute element={<CustomerRatings />} role="vendor" />} />
          <Route path="/orders" element={<PrivateRoute element={<Orders />} role="vendor" />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
    </AuthProvider>
  );
}

export default App;
