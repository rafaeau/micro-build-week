import Jumbotron from "./Jumbotron";
import { Carousel } from "react-bootstrap";

function displayCarousel() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <Jumbotron article="8" />
      </Carousel.Item>
      <Carousel.Item>
        <Jumbotron article="4" />
      </Carousel.Item>
      <Carousel.Item>
        <Jumbotron article="3" />
      </Carousel.Item>
      <Carousel.Item>
        <Jumbotron article="2" />
      </Carousel.Item>
      <Carousel.Item>
        <Jumbotron article="1" />
      </Carousel.Item>
    </Carousel>
  );
}

export default displayCarousel;
