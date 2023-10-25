import React, { Suspense } from "react";
import ReactLoading from "react-loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import { Navigate } from "react-router-dom";
import ROLES from "../common/Roles";
const RetailerComponent = React.lazy(() =>
  import("../components/RetailerComponent")
);

function RetailerRoutingLazyLoading() {
  // if (!localStorage.getItem("user")) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <div>
      <Suspense
        fallback={
          <div className="fixed top-1/2 w-full flex items-center justify-center">
            <ReactLoading type="cylon" color="black" />
          </div>
        }
      >
        <Routes>
          <Route
            path="/retailer"
            element={
              <PrivateRoute roles={[ROLES.Retailer]}>
                <RetailerComponent />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RetailerRoutingLazyLoading;
