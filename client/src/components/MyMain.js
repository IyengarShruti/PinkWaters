import peoplenobg from "../images/peoplenobg.png";
import React from "react";
const MyMain = () => {
    return (
      <div className="main-container">
        <div className="inner-container">
          <div className="text-container how-it-works">
            <p className="how-it-works-text">How it Works?</p>
          </div>
          <div className="C_text">
            <div className="frame5">
              <div className="C_Feature-title">
                <p className="C_Feature-title-text">
                  You are Heard!!
                </p>
              </div>
              <div className="C_paragraph">
                <div className="C_paragraph-divider"></div>
                <div className="intro">
                  <p className="C_paragraph-text">
                    Brief Intro: Lorem ipsum dolor sit amet consectetur. Posuere
                    aenean nec pretium libero pellentesque eget nunc amet
                    pellentesque. Hac amet lectus volutpat nisl ut lacus dui
                    tellus lorem.
                  </p>
                </div>
              </div>
              <div className="Btn_Secondary">
                <div className="Btn_Frame">
                  <p className="Btn_Frame-text">Start your free trial</p>
                </div>
                <img src={arrowRight} alt="Right Arrow" width="24" height="24" />
              </div>
            </div>
          </div>
          <div className="chart">
            <img src={peoplenobg} alt="Chart Image" />
          </div>
        </div>
      </div>
    );
  };
  
  export default MyMain;
  