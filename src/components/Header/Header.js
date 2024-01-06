import React from "react";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderIcons from "./HeaderIcon/HeaderIcons";
import HeaderMail from "./HeaderMail/HeaderMail";

const Header = () => {
  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile />
      <HeaderIcons />
      <HeaderMail />
    </div>
  );
};

export default Header;
