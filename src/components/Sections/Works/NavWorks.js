import React from "react";
import classes from "./Works.module.scss";

const NavWorks = props => {
  return (
    <div className={classes.Nav}>
      {[
        { title: "All" },
        { title: "App" },
        { title: "Websites" },
        { title: "Interactions" }
      ].map(item => (
        <a
          href="#/"
          className={classes.Link}
          onClick={() => props.handleCategory(item.title)}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default NavWorks;
