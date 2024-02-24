import React from "react";
import { Grid, Box } from "@radix-ui/themes";
import FileDisplay from "./FileDisplay";
import CreateNew from "./CreateNew";
function MainSection() {
  return (
    <div className="mainsection">
      <div className="mainsection1">
        <div className="main1">
          <h2 className="text-4xl">
            Explore the world <br />
            of <span className="text-logo-color">Encryption</span>
          </h2>
          <button>
            Create Files <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="main2">
          <img src="data:image/jpeg;base64,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" />
        </div>
      </div>
      <div className="mainsection2">
      <div >
        <Grid columns="3" gap="3" width="auto">
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
        </Grid>
      </div>
      <div >
        <CreateNew/>
      </div>
      </div>
    </div>
  );
}

export default MainSection;
