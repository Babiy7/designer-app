import React from "react";
import classes from "./Article.module.scss";

import { Link } from "react-router-dom";

import Button from "../UI/Button/Button";

const Article = props => {
  return (
    <div className={classes.Article}>
      <div className={classes.Item}>
        <div className={classes.Header}>
          <div className={classes.Date}>
            {props.number} <br /> {props.month}
          </div>
          <Link to="/">
            <div className={classes.Photo}></div>
          </Link>
        </div>
        <div className={classes.Content}>
          <h3 className={classes.Title}>
            <Link to="/"> {props.title} </Link>
          </h3>

          <div className={classes.Category}>{props.category}</div>
          <div className={classes.Text}>
            <p>{props.children}</p>
          </div>
        </div>
        <Link to="/">
          <Button type="shadow">Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Article;
