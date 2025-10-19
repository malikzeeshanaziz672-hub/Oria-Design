import React from "react";
import "../GlobalCss/WTF.css";
import phoneImg from "../../public/Images/WTFphoneImg.png";
import Timer from "./Timer";
import whaitlistImg from "../../public/Images/3ae592f175af57dbae5f3c16dd77de75-removebg-preview 1.png"
const WTF = () => {
  return (
    <div className="wtfContainer">
      <div className="wtfHeader">
        <h1>We Tell Facts</h1>
        <div className="wtf"
        >
          <img src={phoneImg} alt="" />
          <div className="timer"
            style={{
              position: "absolute",
              right: "18%",
              top:"432px"
            }}
          >
            <Timer />
          </div>
        </div>
      </div>

      <div className="waitList">
        <div className="waitListBtn">
          Join the waitlist
        </div>
        <div className="waitImg">
        <img src={whaitlistImg} alt="" />

        </div>
      </div>
    </div>
  );
};

export default WTF;
