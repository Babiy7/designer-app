import React from "react";
import classes from "./Works.module.scss";

import Portfolio from "../Portfolio/Portfolio";
import Button from "../UI/Button/Button";
import { ContentCenterHorisontal, Margin } from "../UI/Helper/Helper";

const Works = () => {
  return (
    <div className={classes.Works}>
      <div className={classes.Container}>
        <div className={classes.Nav}>
          {[
            { title: "All" },
            { title: "App" },
            { title: "Websites" },
            { title: "Interactions" }
          ].map(item => (
            <a href="#/" className={classes.Link}>
              {item.title}
            </a>
          ))}
        </div>
        <div className={classes.Portfolios}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <Portfolio />
          ))}
        </div>
        <ContentCenterHorisontal>
          <Margin top="35">
            <Button>Load more work</Button>
          </Margin>
        </ContentCenterHorisontal>
      </div>
    </div>
  );
};

export default Works;
