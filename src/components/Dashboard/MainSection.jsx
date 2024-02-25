import React from "react";
import { Grid, Box } from "@radix-ui/themes";
import FileDisplay from "./FileDisplay";
import CreateNew from "./CreateNew";
import { Link } from "react-router-dom";
import MainSectionImg1 from "../../assets/Mainsection1.png";
import "./MainSection.css";
function MainSection() {
  return (
    <div className="mainsection">
      <div className="mainsection1">
        <div className="main1">
          <h2 className="text-4xl">
            Explore the world <br />
            of <span className="text-logo-color">Encryption</span>
          </h2>
          <button id="btn">
            Create Files <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="main2">
          <img src={MainSectionImg1} />
        </div>
      </div>
      <div className="mainsection2">
        <div className="boxes1">
          <FileDisplay />
          <FileDisplay />
          <FileDisplay />
        </div>
        <div className="boxes2">
          <FileDisplay />
          <FileDisplay />
          <FileDisplay />
          {/* <Grid columns="3" gap="3" width="auto">
            <Box height="9" className="box-grid">
              <FileDisplay />
            </Box>
            <Box height="9" className="box-grid">
              <FileDisplay />
            </Box>
            <Box height="9" className="box-grid">
              <FileDisplay />
            </Box>
            <Box height="9" className="box-grid">
              <FileDisplay />
            </Box>
            <Box height="9" className="box-grid">
              <FileDisplay />
            </Box>
            <Box height="9" className="box-grid">
              <FileDisplay />
            </Box>
          </Grid> */}
        </div>
        <Link to={"draganddrop"}>
          <div>
            <CreateNew />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainSection;
