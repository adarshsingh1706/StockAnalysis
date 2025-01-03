import React, { useEffect } from "react";

const CallbackPage = () => {
  const fetchAccessToken = async (requestToken) => {
    try {
      const response = await fetch("https://api.upstox.com/login/authorization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey: import.meta.env.VITE_UPSTOX_API_KEY,
          apiSecret: import.meta.env.VITE_UPSTOX_API_SECRET,
          requestToken,
        }),
      });

      const data = await response.json();

      if (data.access_token) {
        //storing in local storage
        localStorage.setItem("accessToken", data.access_token);
        // redirecting to dashboard
        window.location.href = "/dashboard"; 
      } else {
        console.error("Failed to fetch access token:", data);
      }
    } catch (error) {
      console.error("Error during token exchange:", error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestToken = params.get("request_token");

    if (requestToken) {
      fetchAccessToken(requestToken);
    } else {
      console.error("No request token found in the URL");
    }
  }, []);

  return <div className="text-center text-white">Processing login...</div>;
};

export default CallbackPage;
