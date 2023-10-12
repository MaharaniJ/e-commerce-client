import React from "react";
import Banner from "./Banner";
import "./main.css";
import Slide from "./Slide";

function Main() {
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <Slide />
    </div>
  );
}

export default Main;
