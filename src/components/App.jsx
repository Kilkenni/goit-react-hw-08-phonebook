//import {useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import { selectLoginStatus } from "redux/auth/authSlice";

import NavBar from "./NavBar";
import UserMenu from "./UserMenu";
const ContactsPage = lazy(() => import("./Layouts/ContactsPage"));
const LoginPage = lazy(() => import("./Layouts/LoginPage"));
const RegisterPage = lazy(() => import("./Layouts/RegisterPage"));

export const App = () => {
  const isLoggedIn = useSelector(selectLoginStatus);

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',

        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <NavBar />
      {isLoggedIn && <UserMenu />}

      <Routes>
        <Route exact path="/" element={
          <Suspense fallback={<p>Loading...</p>}>
            <LoginPage />
          </Suspense>  
        }/>

        <Route exact path="/register" element={
          <Suspense fallback={<p>Loading...</p>}>
            <RegisterPage />
          </Suspense>
        }/>

        <Route exact path="/contacts" element={
          <Suspense fallback={<p>Loading...</p>}>
            <ContactsPage />
          </Suspense>   
        } />

        <Route path="*" element={<Navigate to={"/"} replace={true} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
