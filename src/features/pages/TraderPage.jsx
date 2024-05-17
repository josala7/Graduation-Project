// import React, { useState, useEffect } from "react";
import { image1, image2, image3, image4, image5 } from "../../assets";
import Categories from "../layout/Categories";
import MostDemand from "../layout/MostDemand";
import Offers from "../layout/Offers";
import Slider from "../layout/Slider";

const slides = [
  { url: image1, title: "beach" },
  { url: image2, title: "boat" },
  { url: image3, title: "forest" },
  { url: image4, title: "city" },
  { url: image5, title: "italy" },
];
const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
};

function TraderPage() {
  return (
    <>
      {/* <Slider /> */}
      <div>
        <h1>Hello monsterlessons</h1>
        <div style={containerStyles}>
          <Slider slides={slides} />
        </div>
      </div>
      <Categories />
      <Offers />
      <MostDemand />
    </>
  );
}

export default TraderPage;
