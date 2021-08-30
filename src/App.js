import React from "react";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import BigLinks from "./components/BigLinks";
import Footer from "./components/Footer";
import OffCanvas from "./components/Offcanvas";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Slider></Slider>
      <BigLinks></BigLinks>
      <Footer></Footer>
      <OffCanvas></OffCanvas>
    </div>
  );
}

export default App;
