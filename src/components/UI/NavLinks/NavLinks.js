import React from "react";
import MNavLink from "./NavLink/NavLink";

const NavLinks = props => {
  return [
    { title: "work", link: "/", active: true },
    { title: "about me", link: "/", active: false },
    { title: "blog", link: "/", active: false },
    { title: "contact", link: "/", active: false }
  ].map(item => {
    return (
      <MNavLink active={item.active} link={item.link}>
        {item.title}
      </MNavLink>
    );
  });
};

export default NavLinks;
