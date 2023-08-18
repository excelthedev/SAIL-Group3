import React from "react";
import AuthLayout from "./common/layout/Authentication";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./views/landingpage/Landingpage";
import Monetisetalent from "./views/login/Monetisetalent";
import Pagelayout from "./common/layout/Pagelayout";

import Signup from "./views/singup/SignUp";
import useCustomApi from "./custom-hooks/useCustomApi";
import Dashboard from "./views/Dashboard/Dashboard";

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
      </Route>
    </Routes>
  );
};

export default App;
