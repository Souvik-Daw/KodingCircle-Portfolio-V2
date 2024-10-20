import React from 'react';
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import SoundSection from "./SoundSection";
import DisplaySection from "./DisplaySection";
import WebgiViewer from "./WebgiViewer";
import Loader from "./Loader";

function home() {
    return (
        <>
          {/* <Nav /> */}
          <Loader/>
          <Jumbotron/>
          <SoundSection/>
          <DisplaySection/>
          <WebgiViewer/>
        </>
    );
}

export default home;

