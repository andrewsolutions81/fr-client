import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Favorites from './pages/Favorites/Favorites';
import User from './pages/User/User';
import SingleHome from './pages/SingleHome/SingleHome';
import DevComp from './components/DevComp/DevComp';

function App() {

  // set user in store
  useEffect(() => {
    try {
      const token = document.cookie
      if(token){
        console.log("token found in app.tsx", token)
      } else {
        console.log("no token")
      }
    } catch (error) {
      console.log("Error in useEffect:", error);
    }



  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home/:id" element={<SingleHome />} />
        <Route path="/user" element={<User />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <Footer /> */}
      <DevComp />
    </div>
  );
}

export default App;
