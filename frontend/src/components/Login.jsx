import React, { useState, useEffect, useRef } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import {
  getRefreshAndAccessToken,
  refreshTokenSetup,
  getAccessToken,
} from "../utils/refreshToken";
import Cookies from "js-cookie";
import ProfileMenu from "./ProfileMenu";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {

  const {handleLogin,handleLogout} = useAuth();

  const initialUserProperties = {
    access_token: "",
    expires_in: 0,
    id_token: "",
    refresh_token: "",
    scope: "",
    token_type: "",
  };

  const emailUserProfile = {
    email: "",
    family_name: "",
    given_name: "",
    hd: "",
    id: "",
    locale: "",
    name: "",
    picture: "",
    verified_email: false,
  };

  const [emailUser, setEmailUser] = React.useState(initialUserProperties);
  const [emailProfile, setEmailProfile] = React.useState(emailUserProfile);

  const navigate = useNavigate();

  const hasRefreshSetupRun = useRef(false);

  const googleLogin = useGoogleLogin({
    // adding scope to get full authority to get information
    // to get the refresh token we need to request for authentication code.
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      // set access token to the cookie expire in 1 hour with secure and httpOnly

      const { access_token, refresh_token, id_token } =
        await getRefreshAndAccessToken(codeResponse);

      // set refresh token to the cookie expire in 6 days with secure and httpOnly

      const res = await axios.post(
        `http://localhost:5000/api/students/google-auth`,
        {
          token: id_token,
        }
      );

      console.log("res: ", res.data);

      localStorage.setItem("user", JSON.stringify(res.data));

      Cookies.set("access_token", access_token, {
        expires: 1 / 24,
      });

      Cookies.set("refresh_token", refresh_token, {
        expires: 6,
      });

      setEmailUser({
        ...emailUser,
        access_token: access_token,
        refresh_token: refresh_token,
      });

      refreshTokenSetup();

      handleLogin();

      navigate("/");
    },
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

  React.useEffect(() => {
    if (!!emailUser.access_token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${emailUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${emailUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setEmailProfile(res.data);
        })
        .catch((err) => console.log("err: ", err));
    }
  }, [emailUser]);

  React.useEffect(() => {
    const fetchAccessToken = async () => {
      if (!hasRefreshSetupRun.current) {
        refreshTokenSetup();
        hasRefreshSetupRun.current = true; // Ensure this only runs once
      }
      if (Cookies.get("access_token")) {
        setEmailUser({
          ...emailUser,
          access_token: Cookies.get("access_token"),
        });
      } else {
        const accessToken = await getAccessToken();
        if (accessToken === null) {
          return logOut();
        } else {
          Cookies.set("access_token", accessToken, {
            expires: 1 / 24,
          });
          setEmailUser({
            ...emailUser,
            access_token: accessToken,
          });
        }
      }
    };
    fetchAccessToken();
  }, []);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setEmailProfile(null);
    setEmailUser(initialUserProperties);
    // remove the access token and refresh token from the cookie
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    localStorage.removeItem("user");
    handleLogout();
    navigate("/login");
  };

  return (
    <div>
      {emailProfile ? (
        <ProfileMenu avatar={emailProfile?.picture} handleLogOut={logOut} />
      ) : (
        <Button
          onClick={() => googleLogin()}
          className="bg-secondary text-white w-fit"
        >
          Sign in with Google{" "}
        </Button>
      )}
    </div>
  );
}
export default Login;
