//import {useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectIsLoggedIn, selectIsRestoringSession } from "redux/auth/authSlice";
import { refreshUserOp } from "redux/auth/ops";

import NavBar from "./NavBar";
import UserMenu from "./UserMenu";
import { RestrictedRoute, PrivateRoute } from "./Routes";
//import NotFoundPage from "./Layouts/NotFoundPage";
const ContactsPage = lazy(() => import("./Layouts/ContactsPage"));
const LoginPage = lazy(() => import("./Layouts/LoginPage"));
const RegisterPage = lazy(() => import("./Layouts/RegisterPage"));

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRestoringSession = useSelector(selectIsRestoringSession);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserOp());
  }, [dispatch])
  /*if (!isLoggedIn) {
    dispatch(refreshUserOp());
    console.log("restoring session")
  }*/

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
      {(isLoggedIn && !isRestoringSession ) && <UserMenu />}

      {isRestoringSession ?
        <p>Restoring last session...</p>
        :
        <Routes>
          <Route exact path="/login" element={
            <RestrictedRoute fallbackRoute={"/contacts"}>
              <Suspense fallback={<p>Loading...</p>}>
                <LoginPage />
              </Suspense>
            </RestrictedRoute>
          }/>

          <Route exact path="/register" element={
            <RestrictedRoute fallbackRoute={"/contacts"}>
              <Suspense fallback={<p>Loading...</p>}>
                <RegisterPage />
              </Suspense>
            </RestrictedRoute>
          }/>

          <Route exact path="/contacts" element={
            <PrivateRoute>
              <Suspense fallback={<p>Loading...</p>}>
                <ContactsPage />
              </Suspense>
            </PrivateRoute>
          } />

          <Route path="*" element={<Navigate to={"/login"} replace={true} />} />         
        </Routes>
      }
      
      <ToastContainer />
    </div>
  );
};
