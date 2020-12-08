import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import Booking from './pages/Booking/Booking';
import Dashboard from './pages/Dashboard/Dashboard';
import MasterForm from './pages/Registration/MasterForm';
import HomeSignIn from './pages/HomeSignIn/HomeSignIn';
import SessionDetails from './pages/SessionDetails/SessionDetails';
import Village from './pages/Village/Village';
import VillageForm from './pages/Village/VillageForm';
// import Donation from "./registration/Donation"

function Routes() {
  return (
    <div>
      {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
      {/* <PrivateRoute exact path="/booking/" component={Booking} /> */}
      <Route exact path="/signin/" component={HomeSignIn} />
      <Route exact path="/signup/" component={MasterForm} />
      <Route
        exact
        path="/sessiondetails/:sessionid/"
        component={SessionDetails}
      />
      {/* <Route exact path="/donate/" component={Donation} /> */}
      <Route exact path="/village" component={Village} />
      <Route exact path="/village/edit" component={VillageForm} />
    </div>
  );
}

export default Routes;
