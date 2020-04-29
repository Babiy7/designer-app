import React from "react";
import classes from "./ModalProject.module.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import city1 from "../../../assets/images/tianjin.jpg";
import city2 from "../../../assets/images/city.jpg";
import city3 from "../../../assets/images/clouds.jpg";

const images = [
  {
    name: "city1",
    img: city1
  },
  {
    name: "city2",
    img: city2
  },
  {
    name: "city3",
    img: city3
  }
];

class ModalProject extends React.Component {
  next = () => {
    this.slider.slickNext();
  };

  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: ""
    };
    return (
      <Modal
        overflow={false}
        size="md"
        show={this.props.show}
        unShow={this.props.unShow}
      >
        <div className={classes.ModalProject}>
          <div className={classes.Left}>
            <Slider
              style={{ height: "100%" }}
              ref={c => (this.slider = c)}
              {...settings}
            >
              {images.map(item => (
                <img
                  key={item.name}
                  src={item.img}
                  alt={item.name}
                  className={classes.Image}
                />
              ))}
            </Slider>
          </div>

          <div className={classes.Right}>
            <div className={classes.Content}>
              <h2 className={classes.Title}>PROJECT TITLE</h2>

              <div className={classes.SubTitle}>
                <div className={classes.Category}>CATEGORY</div>
                <div className={classes.Date}>2018</div>
              </div>

              <h4 className={classes.ClientTitle}>Client: </h4>
              <div className={classes.ClientSubTitle}>Creative Agency</div>

              <div className={classes.Text}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                  veniam fuga commodi inventore laudantium sapiente sed aut
                  eaque nesciunt perferendis. Nulla reiciendis, velit officia
                  beatae molestiae ratione vitae commodi architecto.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                  veniam fuga commodi inventore laudantium sapiente sed aut
                  eaque nesciunt perferendis. Nulla reiciendis, velit officia
                  beatae molestiae ratione vitae commodi architecto.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                  veniam fuga commodi inventore laudantium sapiente sed aut
                  eaque nesciunt perferendis. Nulla reiciendis, velit officia
                  beatae molestiae ratione vitae commodi architecto.
                </p>
              </div>
            </div>

            <div className={classes.Buttons}>
              <Button type="previous" onClick={() => this.previous()}>
                Previous
              </Button>
              <Button type="next" onClick={() => this.next()}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ModalProject;
