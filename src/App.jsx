import React from "react";
import AuthLayout from "./common/layout/Authentication";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./views/landingpage/Landingpage";
import Monetisetalent from "./views/monetisetalent/Monetisetalent";

import Login from "./views/login/Login";
import useCustomApi from "./custom-hooks/useCustomApi";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="/monitize-talent" element={<Monetisetalent />} />
        <Route path="/login-page" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
