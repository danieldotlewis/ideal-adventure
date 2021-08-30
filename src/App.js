import React from "react";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import BigLinks from "./components/BigLinks";
import GreySection from "./components/GreySection";
import Footer from "./components/Footer";
import OffCanvas from "./components/Offcanvas";

function App() {
  return (
    <div id="gls-offcanvas-content">
      <Nav></Nav>
      <Slider></Slider>
      <div id="main-content">
        {" "}
        <BigLinks></BigLinks>
        <GreySection></GreySection>
      </div>
      <Footer></Footer>
      <OffCanvas></OffCanvas>
    </div>
  );
}

export default App;
