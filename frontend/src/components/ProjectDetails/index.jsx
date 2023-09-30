import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import axios from "axios";
export const ProjectDetails = ({ toggleDrawer, state, projectId }) => {
  const [project, setProject] = useState(null);

  //fetching single project details by projectId
  useEffect(() => {
    if (projectId) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/project/${projectId}`)
        .then((response) => {
          setProject(response.data);
        })
        .catch((error) => {
          console.error("Error fetching project by ID:", error);
        });
    }
  }, [projectId]);

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      p={10}
      bgcolor={"#3b3b3b"}
    >
      <Box bgcolor="#5d6acf">
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h1"
          color="#f1f1f1"
          fontWeight={600}
          textAlign="center"
        >
          Title
        </Typography>
        <Typography
          variant="subtitle2"
          mb={5}
          color="#f1f1f1"
          fontWeight={500}
          fontSize={30}
          textAlign="center"
        >
          {project?.Project?.Title}
        </Typography>
      </Box>
      <Box bgcolor="#e08712" height={120} py={5}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h1"
          color="#f1f1f1"
          fontWeight={600}
          textAlign="center"
        >
          Frontend Technologies
        </Typography>
        <Typography
          variant="subtitle2"
          mb={5}
          color="#f1f1f1"
          fontWeight={600}
          textAlign="center"
        >
          {project?.Technical_Skillset?.Frontend ?? "NA"}
        </Typography>
      </Box>
      <Box bgcolor="#c91e4f" height={120} py={5} mt={5}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h1"
          color="#f1f1f1"
          fontWeight={600}
          textAlign="center"
        >
          Backend Technologies
        </Typography>
        <Typography
          variant="subtitle2"
          mb={5}
          color="#f1f1f1"
          fontWeight={600}
          textAlign="center"
        >
          {project?.Technical_Skillset?.Backend ?? "NA"}
        </Typography>
      </Box>
      <Box bgcolor="#63186b" height={120} py={5} mt={5}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h1"
          color="#f1f1f1"
          fontWeight={600}
          textAlign="center"
        >
          Databases
        </Typography>
        <Typography
          variant="subtitle2"
          mb={5}
          color="#f1f1f1"
          fontWeight={600}
          textAlign="center"
        >
          {project?.Technical_Skillset?.Databases ?? "NA"}
        </Typography>
      </Box>
      <Box bgcolor="#2cd8de" height={120} py={5} mt={5}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h1"
          color="#f1f1f1"
          fontWeight={600}
          textAlign="center"
        >
          Infrastructure
        </Typography>
        <Typography
          variant="subtitle2"
          color="#f1f1f1"
          fontWeight={600}
          textAlign="center"
        >
          {project?.Technical_Skillset?.Infrastructre ?? "NA"}
        </Typography>
      </Box>
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
