import axios from "axios";
import Cookies from "js-cookie";

export const refreshTokenSetup = () => {
  let refreshTiming = 58 * 60 * 1000; // refresh every 59 minutes

  const getNewAccessToken = async () => {
    const refreshToken = Cookies.get("refresh_token");
    if (!refreshToken) {
      console.log("No refresh token available");
      return;
    }

    let payloadForAccessToken = {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: import.meta.env.GOOGLE_CLIENT_ID,
      client_secret: import.meta.env.GOOGLE_CLIENT_SECRET,
    };

    try {
      const res = await axios.post(
        `https://oauth2.googleapis.com/token`,
        payloadForAccessToken,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const newAccessToken = res.data.access_token;
      console.log("newAccessToken: ", newAccessToken);

      Cookies.set("access_token", newAccessToken, {
        expires: 1 / 24,
      });
    } catch (error) {
      console.error("Error in getRefreshToken:", error);
      throw error; // Re-throw the error to handle it in the calling function
    }

    setTimeout(getNewAccessToken, refreshTiming);
  };
  setTimeout(getNewAccessToken, refreshTiming);
};

export const getRefreshAndAccessToken = async (codeResponse) => {
  // get refresh token using authorization code
  let payload = {
    grant_type: "authorization_code",
    code: codeResponse.code,
    client_id: import.meta.env.GOOGLE_CLIENT_ID,
    client_secret: import.meta.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  };

  try {
    const res = await axios.post(
      `https://oauth2.googleapis.com/token`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response data:", res.data);
    return res.data; // Return refresh_token for use in calling code
  } catch (error) {
    console.error("Error in getRefreshToken:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export const getAccessToken = async () => {
  const refreshToken = Cookies.get("refresh_token");
  if (!refreshToken) {
    console.log("No refresh token available");
    return null;
  }

  let payloadForAccessToken = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: import.meta.env.GOOGLE_CLIENT_ID,
    client_secret: import.meta.env.GOOGLE_CLIENT_SECRET,
  };

  try {
    const res = await axios.post(
      `https://oauth2.googleapis.com/token`,
      payloadForAccessToken,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newAccessToken = res.data.access_token;
    return newAccessToken;
  } catch (error) {
    console.error("Error in getRefreshToken:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
