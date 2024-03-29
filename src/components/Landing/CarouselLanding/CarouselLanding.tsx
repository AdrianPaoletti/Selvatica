/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

interface CarouselLandingProps {
  isMenuOpen: boolean;
}

const CarouselLanding = ({ isMenuOpen }: CarouselLandingProps) => {
  const [isMouseOut, setIsMouseOut] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  const images: { source: string }[] = [
    { source: "/images/3-medium.jpg" },
    { source: "/images/8-medium.jpg" },
    { source: "/images/7-medium.jpg" },
    { source: "/images/9-medium.jpg" },
  ];
  return (
    <Carousel
      id="carousel"
      fade
      interval={10000}
      indicators={false}
      touch
      className={isMouseOut ? "carousel__mouse-out" : ""}
      onMouseLeave={() => setIsMouseOut(true)}
      onMouseEnter={() => setIsMouseOut(false)}
      prevIcon={
        screenWidth > 800 && (
          <span className="carousel__button">
            <WestIcon fontSize="inherit" color="inherit" />
          </span>
        )
      }
      nextIcon={
        screenWidth > 800 && (
          <span className="carousel__button">
            <EastIcon fontSize="inherit" color="inherit" />
          </span>
        )
      }
    >
      {images.map(({ source }) => (
        <Carousel.Item key={source}>
          <img
            className={`d-block carousel__image`}
            src={source}
            alt="arbicultura image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselLanding;
