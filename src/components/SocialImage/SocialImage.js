import React from "react";
import classes from "./SocialImage.module.scss";

import facebook from "../../assets/images/facebook.png";
import dribbble from "../../assets/images/dribbble.png";
import behance from "../../assets/images/behance.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import linkdin from "../../assets/images/linkdin.png";

const SocialImage = props => {
  let image = null;

  switch (props.type) {
    case "behance": {
      image = <img className={classes.Image} src={behance} alt="behance" />;
      return image;
    }

    case "in": {
      image = <img className={classes.Image} src={linkdin} alt="in" />;
      return image;
    }

    case "instagram": {
      image = <img className={classes.Image} src={instagram} alt="instagram" />;
      return image;
    }

    case "twitter": {
      image = <img className={classes.Image} src={twitter} alt="twitter" />;
      return image;
    }

    case "dribbble": {
      image = <img className={classes.Image} src={dribbble} alt="dribble" />;
      return image;
    }

    case "facebook": {
      image = <img className={classes.Image} src={facebook} alt="facebook" />;
      return image;
    }

    default: {
      return image;
    }
  }
};

export default SocialImage;
