import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

export const ProjectDetails = ({ toggleDrawer, state }) => {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Typography gutterBottom variant="subtitle1" component="h1">
        Title
      </Typography>
      <Typography variant="subtitle2">
        This is a media card. You can use this section to describe the content.
      </Typography>
      <Typography gutterBottom variant="subtitle1" component="h1">
        Title
      </Typography>
      <Typography variant="subtitle2">
        This is a media card. You can use this section to describe the content.
      </Typography>
      <Typography gutterBottom variant="subtitle1" component="h1">
        Title
      </Typography>
    </Box>
  );

  return (
    <div>
      <>
        <Drawer anchor="right" open={state} onClose={toggleDrawer}>
          {list("right")}
        </Drawer>
      </>
    </div>
  );
};
