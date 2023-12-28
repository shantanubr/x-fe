import React, { useState } from "react";
import "./App.css";

function App() {
  const [secretCode, setSecretCode] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const [tweetString, setTweetString] = useState<string>("");
  const [response, setResponse] = useState(null);

  const handleGetIn = () => {
    if (secretCode !== process.env.REACT_APP_SECRET_CODE) {
      setError(true);
    } else {
      setError(false);
      setIsAuthenticated(true);
    }
  };

  const sendTweet = async () => {
    try {
      const response = await fetch(
        `https://x-be.vercel.app/twitter-api/tweets`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "YourTwitterAuthorizationHeaderHere",
          },
          body: JSON.stringify({ text: tweetString }),
        }
      );

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-[#202020]">
      {isAuthenticated ? (
        <div className="text-white flex flex-col">
          <p>Tweet here...</p>
          <textarea
            value={tweetString}
            onChange={(e) => setTweetString(e.target.value)}
            className="bg-[#151515] mt-2 w-full"
          />
          <button
            onClick={sendTweet}
            className="border mt-4 text-white p-1 px-2 rounded-md">
            SEND TWEET
          </button>
          {response && (
            <div>
              <h2>Server Response:</h2>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </div>
      ) : (
        <>
          {error && (
            <div>
              <p className="text-rose-600">ERROR!</p>
            </div>
          )}
          <input
            type="text"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
          />
          <button
            onClick={handleGetIn}
            className="border mt-4 text-white p-1 px-2 rounded-md">
            GET IN
          </button>
        </>
      )}
    </div>
  );
}

export default App;
