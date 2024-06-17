import { useState, useEffect } from "react";
import { IconButton, Box, Container } from "@mui/material";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { orders1, orders2, orders3, orders4, orders5 } from "../../assets";

function Slider() {
  // Array of slide objects with image URLs
  const slides = [
    {
      url: orders1,
    },
    {
      url: orders2,
    },
    {
      url: orders3,
    },
    {
      url: orders4,
    },
    {
      url: orders5,
    },
  ];

  // State to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Effect to automatically transition to next slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run the effect whenever currentIndex changes

  return (
    <Container
      maxWidth={false}
      sx={{ position: "relative", height: "580px", mt: "20px", mb: "20px" }}
    >
      {/* Display current slide */}
      <Box
        sx={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          transition: "background-image 0.5s ease-in-out",
        }}
      ></Box>

      {/* Left Arrow */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "16px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        }}
      >
        <BsChevronCompactLeft size={30} />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        }}
      >
        <BsChevronCompactRight size={30} />
      </IconButton>

      {/* Dot indicators for each slide */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "16px",
          width: "100%",
        }}
      >
        {slides.map((slide, slideIndex) => (
          <IconButton
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            sx={{
              color: currentIndex === slideIndex ? "primary.main" : "grey.500",
            }}
          >
            <RxDotFilled />
          </IconButton>
        ))}
      </Box>
    </Container>
  );
}

export default Slider;
