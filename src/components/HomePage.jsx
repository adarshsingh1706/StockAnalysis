import React from "react";

const HomePage = () => {
  const handleLogin = () => {
    const upstoxAuthUrl = `https://upstox.com/oauth/authorize?apiKey=${
      import.meta.env.VITE_UPSTOX_API_KEY
    }&redirect_uri=${encodeURIComponent(import.meta.env.VITE_REDIRECT_URI)}&response_type=code`;
  
    console.log("Generated URL: ", upstoxAuthUrl);
    window.location.href = upstoxAuthUrl;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login with Upstox
      </button>
    </div>
  );
};

export default HomePage;
