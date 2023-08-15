import React from "react";
import AuthLayout from "./common/layout/Authentication";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./views/landingpage/Landingpage";
import Monetisetalent from "./views/monetisetalent/Monetisetalent";
import MonetiseCont from "./views/monetisetalent/MonetiseCont";
import Login from "./views/login/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="/monitize-talent" element={<Monetisetalent />} />
        <Route path="/monitize-page-two" element={<MonetiseCont />} />
        <Route path="/login-page" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
