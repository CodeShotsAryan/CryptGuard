import React from "react";
import { useDispatch } from "react-redux";
import { makeTrue, makeFalse } from "../../app/store.js";
import { Link } from "react-router-dom";

function SideNav() {
  const dispatch = useDispatch();
  const handleMakeFalse = () => {
    dispatch(makeFalse());
  };

  return (
    <div className="sidenav p-7">
      <div className="sidenav-1">
        <div className="sidenav-logo">Logo</div>
        <Link to="/dashboard">
          <i className="fa-solid fa-house cursor-pointer transition-all duration-200 hover:text-logo-color"></i>
        </Link>
        <Link to="/fileslist">
          <i className="fa-solid fa-folder-closed cursor-pointer transition-all duration-200 hover:text-logo-color"></i>
        </Link>
        <i className="fa-solid fa-lightbulb cursor-pointer transition-all duration-200 hover:text-logo-color"></i>
        <i
          className="fa-solid fa-circle-user cursor-pointer text transition-all duration-200 hover:text-logo-color"
          // style={{ color: "#8532fa" }}
        ></i>
      </div>
      <Link to="/" className="sidenav-2" onClick={handleMakeFalse}>
        <i className="fa-solid fa-right-from-bracket cursor-pointer text-red-600 transition-all duration-200 hover:text-icon-color"></i>
      </Link>
    </div>
  );
}

export default SideNav;
