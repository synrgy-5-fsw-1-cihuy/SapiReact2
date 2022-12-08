import Carousel from "react-bootstrap/Carousel";
import style from "./Slider.module.css";

const Slider = () => {
  return (
    <div className="d-flex justify-content-center">
      <Carousel className={style["Carousel"]}>
        <Carousel.Item >
          <img
            className="mw-100"
            src="https://ik.imagekit.io/dcjlghyytp1/cb201e90c04a05ddfe0c2444a8954010?tr=f-auto,mw-100"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mw-100"
            src="https://ik.imagekit.io/dcjlghyytp1/3e8a20f63e54e6b1bb0d038a7b200f87?tr=f-auto,mw-100"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mw-100"
            src="https://ik.imagekit.io/dcjlghyytp1/b157368de305b518c1b362e77826c54a?tr=f-auto,mw-100"
            alt="First slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
