import React from "react";
import AuthLayout from "./common/layout/Authentication";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./views/landingpage/Landingpage";
import Monetisetalent from "./views/login/Monetisetalent";
import Pagelayout from "./common/layout/Pagelayout";

import Signup from "./views/singup/SignUp";
import useCustomApi from "./custom-hooks/useCustomApi";
import Dashboard from "./views/Dashboard/Dashboard";
import User from "./views/Dashboard/User/User";
import Test from "./views/Dashboard/User/Test";
import Profile  from "./views/Dashboard/User/Profile";
const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login-page" element={<Monetisetalent />} />
        <Route path="/signup-page" element={<Signup />} />
      </Route>

      <Route element={<Pagelayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-profile" element={<Test />} />
        <Route path="/edit-profile" element={<Profile />} />
      </Route>

      {/* <Route element={<Pagelayout />}>
        <Route path="/user" element={<Test />} />
      </Route> */}
    </Routes>
  );
};

export default App;
