import React from "react";
import { Box, styled } from "@mui/material";
import {
  BiscoMisr,
  corona,
  domty,
  egyptfoods,
  elano,
  juhayna,
  spiro,
  sutra,
} from "../../assets";

const logos = [
  { src: BiscoMisr, alt: "Bisco Misr", width: "100px", height: "200px" },
  { src: corona, alt: "Corona", width: "100px", height: "100px" },
  { src: domty, alt: "Domty", width: "100px", height: "150px" },
  { src: egyptfoods, alt: "Egypt Foods", width: "100px", height: "150px" },
  { src: elano, alt: "Elano", width: "100px", height: "150px" },
  { src: juhayna, alt: "Juhayna" },
  { src: spiro, alt: "Spiro", width: "100px", height: "150px" },
  { src: sutra, alt: "Sutra", width: "100px", height: "150px" },
];

const StyledBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  padding: "60px 0",
  backgroundColor: "white",
  whiteSpace: "nowrap",
  position: "relative",
  marginTop: "25px",
  "&:before, &:after": {
    position: "absolute",
    top: 0,
    width: "250px",
    height: "100%",
    content: '""',
    zIndex: 2,
  },
  "&:before": {
    left: 0,
    background: "linear-gradient(to left, rgba(255, 255, 255, 0), white)",
  },
  "&:after": {
    right: 0,
    background: "linear-gradient(to right, rgba(255, 255, 255, 0), white)",
  },
  "@keyframes slide": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
  ".logos-slide": {
    display: "inline-block",
    whiteSpace: "nowrap",
  },
  ".logos-slide img": {
    height: "40px",
    margin: "0 40px",
  },
  ".slide1": {
    animation: "slide 50s infinite linear",
  },
  ".slide2": {
    animation: "slide 50s infinite linear",
  },
}));

function LandingPartners() {
  return (
    <StyledBox>
      <Box className="logos-slide slide1">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
        ))}
      </Box>
      <Box className="logos-slide slide2">
        {logos.map((logo, index) => (
          <img
            key={index + logos.length * 2}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length * 3}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
        ))}
      </Box>
    </StyledBox>
  );
}

export default LandingPartners;
