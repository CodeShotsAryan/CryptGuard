import React from "react";
function SideNav() {
  return (
    <div className="sidenav">
      <div className="sidenav-1">
        <div className="sidenav-logo">Logo</div>
        <i className="fa-solid fa-circle-user cursor-pointer text-3xl text-red-600 transition-all duration-200 hover:text-icon-color"></i>
        <i className="fa-solid fa-house cursor-pointer text-red-600 transition-all duration-200 hover:text-icon-color"></i>
        <i className="fa-solid fa-folder-closed cursor-pointer text-red-600 transition-all duration-200 hover:text-icon-color"></i>
        <i className="fa-solid fa-lightbulb cursor-pointer text-red-600 transition-all duration-200 hover:text-icon-color"></i>
        {/* <i className="fa-solid fa-lightbulb cursor-pointer"></i> */}
      </div>
      <div className="sidenav-2">
        <i className="fa-solid fa-right-from-bracket cursor-pointer text-red-600 transition-all duration-200 hover:text-icon-color"></i>
      </div>
    </div>
  );
}

export default SideNav;
