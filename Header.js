import React from "react";
import icon from './images/icon.png'

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={icon} alt="DeepakKeep"  className="logo"/>
        <h3>DeepakNotes</h3>
      </div>
    </div>
  );
};

export default Header;
