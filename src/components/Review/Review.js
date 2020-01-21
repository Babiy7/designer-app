import React from "react";
import classes from "./Review.module.scss";

import { ContentCenterVertical } from "../UI/Helper/Helper";
import Star from "../../assets/svg/star-solid.svg";
import StarHalf from "../../assets/svg/star-half-solid.svg";

const Review = () => {
  return (
    <div className={classes.Review}>
      <div className={classes.Item}>
        <ContentCenterVertical>
          <div className={classes.Text}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              aspernatur, qui sunt repudiandae omnis enim nobis unde quod nihil
              delectus officia praesentium soluta id officiis dolores hic!
              Tempore, cum optio.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              aspernatur, qui sunt repudiandae omnis enim nobis unde quod nihil
              delectus officia praesentium soluta id officiis dolores hic!
              Tempore, cum optio.
            </p>
          </div>
          <div className={classes.Author}>
            <div className={classes.Image} />
            <div className={classes.Name}>Edward M. Brooks</div>
            <div className={classes.Company}>Marketing House</div>
            <div className={classes.Rating}>
              {[1, 2, 3, 4].map(() => (
                <img src={Star} alt="star" className={classes.Star} />
              ))}
              <img src={StarHalf} alt="star" className={classes.Star} />
            </div>
          </div>
        </ContentCenterVertical>
      </div>
    </div>
  );
};

export default Review;
