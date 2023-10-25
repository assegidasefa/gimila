import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// import "./App.less";
import React, { Suspense } from "react";
import ReactLoading from "react-loading";
import ProfileCompleteScreen from "../screens/ProfileCompleteScreen/ProfileCompleteScreen";
import ROLES from "../common/Roles";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function WholeSalerRoutingLazyLoading() {
  const user = localStorage.getItem("user");
  // console.log("user", user);
  // if (!localStorage.getItem("user")) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <div>
      <Suspense
        fallback={
          <div className="absolute top-1/2 w-full flex items-center justify-center">
            <ReactLoading type="cylon" color="black" />
          </div>
        }
      >
        <Routes>
          {/* <Route
            path="/wholesaler"
            element={
              <PrivateRoute roles={[ROLES.WholeSaler]}>
                <wholeSalercomponent />
              </PrivateRoute>
            }
          /> */}

          <Route
            path="/profile"
            element={
              <PrivateRoute roles={[ROLES.WholeSaler]}>
                <ProfileCompleteScreen />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default WholeSalerRoutingLazyLoading;
