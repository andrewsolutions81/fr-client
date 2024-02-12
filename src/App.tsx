import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Favorites from "./pages/Favorites/Favorites";
import User from "./pages/User/User";
import SingleHome from "./pages/SingleHome/SingleHome";
import DevComp from "./components/DevComp/DevComp";
import apiUserById from "./api/apiUserById";
import { useDispatch , useSelector } from "react-redux";
import { setUser } from "./store/features/authSlice";

function App() {
  const dispatch = useDispatch();
  const [userState, setUserState] = useState({});
  const isLogged = useSelector((state : any) => state.auth.isLogged);



  const token :string = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  function getUserIdFromToken(token: string) {
    const [, payloadBase64] = token.split(".");
    const decodedPayload = atob(payloadBase64);
    const payload = JSON.parse(decodedPayload);
    return payload.id;
  }

  const setUserOnStore = async (token: string) => {
    try {
      const getUserData = async (token:string) => {
        const userId = getUserIdFromToken(token);
        if(token){
          if (userId) {
            const res = await apiUserById(userId);
            const userFromApi = res.data
            setUserState(userFromApi)
            dispatch(setUser(userFromApi))
          } else {
            console.error("No user id")
          }
        }
      };
      getUserData(token)
    } catch (error: any) {
      console.error(error);
    }
  }

  useEffect(() => {
    if(!isLogged){
      setUserOnStore(token)
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
