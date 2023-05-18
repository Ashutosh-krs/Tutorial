import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Components/RegistrationForm";
import TrainInfoForm from "./Components/TrainInfoForm";
import Home from "./Components/Home";
import BookingForm from "./Components/BookingForm";
import ForgotPassword from "./Components/ForgetPassword";
import Login from "./Components/Login";
import LoginAdmin from "./Components/LoginAdmin";
import TrainDetails from "./Components/TrainDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user-login" element={<Login />}></Route>
        <Route path="/admin-login" element={<LoginAdmin />}></Route>
        <Route path="/registration" element={<RegistrationForm />}></Route>
        <Route path="/search" element={<TrainInfoForm />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/booking" element={<BookingForm />}></Route>
        <Route path="/reset-password" element={<ForgotPassword />}></Route>
        <Route path="/train" element={<TrainDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
