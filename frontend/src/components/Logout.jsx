import React from "react";
import { GoogleLogout } from "@react-oauth/google";

const clientId = "310573630688-ejk0p7oiis15sdmb3p3g5dus5q1krqea.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = (res) => {
    console.log("[Logout Success] currentUser:", res);
  };

  const onFailure = (res) => {
    console.log("[Logout Failed] res:", res);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
