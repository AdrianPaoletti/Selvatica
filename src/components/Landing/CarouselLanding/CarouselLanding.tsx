/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Carousel } from "react-bootstrap";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

interface CarouselLandingProps {
  isMenuOpen: boolean;
}

const CarouselLanding = ({ isMenuOpen }: CarouselLandingProps) => {
  const [isMouseOut, setIsMouseOut] = useState<boolean>(false);
  return (
    <Carousel
      id="carousel"
      fade
      interval={10000}
      indicators={false}
      className={isMouseOut ? "carousel__mouse-out" : ""}
      onMouseLeave={() => setIsMouseOut(true)}
      onMouseEnter={() => setIsMouseOut(false)}
      prevIcon={
        <span className="carousel__button">
          <WestIcon fontSize="inherit" color="inherit" />
        </span>
      }
      nextIcon={
        <span className="carousel__button">
          <EastIcon fontSize="inherit" color="inherit" />
        </span>
      }
    >
      <Carousel.Item>
        <img
          className={`d-block carousel__image ${
            isMenuOpen ? "carousel__image--active" : ""
          }`}
          src="/images/1-medium.jpg"
          alt="arbicultura image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block carousel__image ${
            isMenuOpen ? "carousel__image--active" : ""
          }`}
          src="/images/2-medium.jpg"
          alt="arbicultura image"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselLanding;
