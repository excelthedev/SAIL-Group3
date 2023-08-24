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
import ViewTalent from "./views/Dashboard/User/ViewTalent";
import Guestdashboard from "./views/Dashboard/Guestdashboard";
import GuestLayout from "./common/layout/GuestLayout";
import Notfound from "./views/404page/Notfound";
import ArtCraft from "./views/SideBars/ArtCraft";
import Technology from "./views/SideBars/Technology";
import Education from "./views/SideBars/Education";
import Event from "./views/SideBars/Event";
import Health from "./views/SideBars/Health";
import Media from "./views/SideBars/Media";

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
        <Route path="/user-profile" element={<ViewTalent />} />
        <Route path="/art-and-craft" element={<ArtCraft />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/education" element={<Education />} />
        <Route path="/event" element={<Event />} />
        <Route path="/media" element={<Media />} />
        <Route path="/health" element={<Health />} />
      </Route>

      <Route element={<GuestLayout />}>
        <Route path="/guest-dashboard" element={<Guestdashboard />} />
      </Route>
      <Route path="*" element={<Notfound />}></Route>

      {/* <Route element={<Pagelayout />}>
        <Route path="/user" element={<Test />} />
      </Route> */}
    </Routes>
  );
};

export default App;
