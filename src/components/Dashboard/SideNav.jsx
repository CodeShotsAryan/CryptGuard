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
    <div className="sidenav">
      <div className="sidenav-1">
        <div className="sidenav-logo">Logo</div>
        <i className="fa-solid fa-circle-user cursor-pointer text-3xl text-red-600 transition-all duration-200 hover:text-icon-color"></i>
        <i className="fa-solid fa-house cursor-pointer text-red-600 transition-all duration-200 hover:text-icon-color"></i>
        <i className="fa-solid fa-folder-closed cursor-pointer text-red-600 transition-all duration-200 hover:text-icon-color"></i>
        <i className="fa-solid fa-lightbulb cursor-pointer text-red-600 transition-all duration-200 hover:text-icon-color"></i>
      </div>
      <Link to="/" className="sidenav-2" onClick={handleMakeFalse}>
        <i className="fa-solid fa-right-from-bracket cursor-pointer text-red-600 transition-all duration-200 hover:text-icon-color"></i>
      </Link>
    </div>
  );
}

export default SideNav;
