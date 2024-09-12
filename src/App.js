import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice"; // Make sure to import 'selectUser'
import ProfileScreen from "./ProfileScreen";

function App() {
  const user = useSelector(selectUser); // Now 'selectUser' is imported and used correctly
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout()); // Make sure to call logout as a function
      }
    });

    return unsubscribe;
  }, [dispatch]); // It's a good practice to include 'dispatch' in the dependency array

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            {" "}
            {/* Use <Routes> here */}
            <Route path="/profile" element={<ProfileScreen />} />{" "}
            {/* Use 'element' prop */}
            <Route path="/" element={<HomeScreen />} />{" "}
            {/* Use 'element' prop */}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
