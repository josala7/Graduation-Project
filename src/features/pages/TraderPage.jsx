// import React, { useState, useEffect } from "react";
import { Container, useMediaQuery, useTheme } from "@mui/material";
// import { image1, image2, image3, image4, image5 } from "../../assets";
import Categories from "../layout/Categories";
import MostDemand from "../layout/MostDemand";
import Offers from "../layout/Offers";
// import { Galleria } from "primereact/galleria";
// import { useEffect } from "react";
// import { Galleria } from 'primereact/galleria';
// import { PhotoService } from "../layout/PhotoService";
import { orders1, orders2, orders3, orders4, orders5 } from "../../assets";
import Slider from "../layout/Slider";

function TraderPage() {
  const slides = [
    { url: orders1, title: "city" },
    { url: orders2, title: "boat" },
    { url: orders3, title: "beach" },
    { url: orders4, title: "forest" },
    { url: orders5, title: "italy" },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const containerStyles = {
    width: isMobile ? "100%" : "950px",
    height: isMobile ? "200px" : "340px",
    margin: "auto",
    marginTop: "20px",
  };

  return (
    <Container>
      <div>
        <div style={containerStyles}>
          <Slider slides={slides} />
        </div>
      </div>
      <Categories />
      <Offers />
      <MostDemand />
    </Container>
  );
}

export default TraderPage;
