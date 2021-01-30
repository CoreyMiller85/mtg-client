import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <h1 className="logo">Logo</h1>
      <ul className="link-list">
        <li>Search</li>
        <li>Collection</li>
        <li>Sign-In</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

export default Header;
