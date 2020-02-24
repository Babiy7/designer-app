import React from "react";
import classes from "./Article.module.scss";

import Button from "../UI/Button/Button";
import { Margin } from "../UI/Helper/Helper";
import tianjin from "../../assets/images/tianjin.jpg";

const Article = props => {
  return (
    <article className={classes.Article}>
      <div className={classes.Header}>
        <div className={classes.Date}>
          {props.number} <br /> {props.month}
        </div>

        <div className={classes.Photo}>
          <div className={classes.Husk} />
          <img src={tianjin} alt="tianjin" height="300" />
        </div>
      </div>

      <div className={classes.Content}>
        <h3 className={classes.Title}>{props.title}</h3>

        <div className={classes.Category}>{props.category}</div>

        <div className={classes.Text}>
          <p>{props.children}</p>
        </div>
      </div>

      <Margin top="42" right="15">
        <Button type="shadow">Read more</Button>
      </Margin>
    </article>
  );
};

export default Article;
