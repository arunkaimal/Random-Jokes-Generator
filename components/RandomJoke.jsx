"use client";

import React, { useEffect, useState } from "react";

const RandomJoke = () => {
  const [randomJokes, setRandomJokes] = useState({});
  const [showJokes, setShowJokes] = useState(true);
  const fetchRandomJokes = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const fetchdata = await res.json();

    setRandomJokes(fetchdata);
  };
  useEffect(() => {
    fetchRandomJokes();
  }, []);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-120 h-50 bg-gray-800 rounded-lg flex flex-col items-center px-3">
          <h1 className="text-center text-2xl mb-2 mt-3 bg-blue-950 w-full rounded-b-4xl">
            Jokes Generator
          </h1>
          <h2 className="text-center mb-1"> {randomJokes.setup} </h2>
          {showJokes ? (
            <button
              onClick={() => setShowJokes(false)}
              className="bg-black px-4 py-1 rounded cursor-pointer mb-2 hover:bg-white hover:text-black transition duration-500"
            >
              Reveal
            </button>
          ) : (
            <div className="flex flex-col items-center">
              <h2>{randomJokes.punchline}</h2>
              <button
                onClick={() => setShowJokes(true)}
                className="bg-black px-4 py-1 rounded cursor-pointer hover:bg-white hover:text-black transition duration-500"
              >
                Hide
              </button>
            </div>
          )}
          <div className="w-full ">
            <button
              onClick={() => fetchRandomJokes()}
              className="bg-blue-950 w-full py-1 rounded-t-4xl hover:bg-blue-700 transition duration-500 cursor-pointer"
            >
              Next Joke
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomJoke;
