import React from "react";
import "../GlobalCss/Home.css";
import NavBar from "../components/NavBar";
import GetEarly from "../components/GetEarly";
import WTF from "../components/WTF";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div
        style={{
          position: "relative",
        }}
      >
        <h1
          className="WTFh1"
          style={{
            position: "absolute",
            zIndex: 1,
            top: -30,
          }}> WTF</h1>
        <WTF />
      </div>
      <GetEarly />
    </div>
  );
};

export default Home;
