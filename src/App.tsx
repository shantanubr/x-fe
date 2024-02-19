import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [secretCode, setSecretCode] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const [tweetString, setTweetString] = useState<string>("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetIn = () => {
    if (secretCode !== process.env.REACT_APP_SECRET_CODE) {
      setError(true);
    } else {
      setError(false);
      setIsAuthenticated(true);
    }
  };

  const sendTweet = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/twitter-api/tweets`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "YourTwitterAuthorizationHeaderHere",
          },
          body: JSON.stringify({
            text: tweetString,
            secretCode: secretCode,
          }),
        }
      );

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (response) {
      setLoading(false);
    }
  }, [response])

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-[#202020]">
      {isAuthenticated ? (
        <div className="text-white flex flex-col w-full items-center">
          <p>Tweet here...</p>
          <textarea
            value={tweetString}
            onChange={(e) => setTweetString(e.target.value)}
            className="bg-[#151515] mt-2 w-10/12 sm:w-1/2 h-40"
            onKeyDown={(e) => {
              if (e.key === "Enter")
                sendTweet();
            }}
          />
          <button
            onClick={sendTweet}
            className="border mt-4 text-white p-1 px-2 rounded-md">
            SEND TWEET
          </button>
          {loading && (
            <div className="flex items-center mt-4">
              <h2>{`Sending tweet...`}</h2>
            </div>
          )}
          {response && (
            <div className="flex items-center mt-4">
              <h2>{`Tweet Sent!`}</h2>
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
            type="password"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                handleGetIn();
            }}
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
