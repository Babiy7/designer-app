import React from "react";
import NavLink from "./NavLink/NavLink";

const NavLinks = props => {
  return [
    { title: "work", link: "#works", active: true },
    { title: "about me", link: "#about-me", active: false },
    { title: "blog", link: "/", active: false },
    { title: "contact", link: "/", active: false }
  ].map(item => {
    return (
      <NavLink active={item.active} link={item.link}>
        {item.title}
      </NavLink>
    );
  });
};

export default NavLinks;
