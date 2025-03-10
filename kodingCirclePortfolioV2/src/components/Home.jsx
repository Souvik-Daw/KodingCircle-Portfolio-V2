import React from 'react';
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import SoundSection from "./SoundSection";
import DisplaySection from "./DisplaySection";
import WebgiViewer from "./WebgiViewer";
import Loader from "./Loader";
import { useState, useEffect } from "react";

function home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay (e.g., API fetch or heavy component load)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <>
            <Loader />
            <Jumbotron />
            <SoundSection />
            <DisplaySection />
            <WebgiViewer />
          </>
        )}
      </div>
    </>
  );
}

export default home;

