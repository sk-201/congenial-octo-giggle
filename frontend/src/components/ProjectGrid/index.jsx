import { React, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ProjectDetails } from "../ProjectDetails";
import axios from "axios";
import { ButtonBase } from "@mui/material";

export default function ProjectGrid() {
  const [projects, setProjects] = useState([]);
  const [state, setState] = useState(false);
  const [selectedId, setSelectedId] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const toggleDrawer = (id) => {
    if (typeof id !== "object") {
      setSelectedId(id);
    }
    setState((prev) => !prev);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap fontWeight={600}>
            Projects
          </Typography>
        </Toolbar>
      </AppBar>
      <ProjectDetails
        toggleDrawer={toggleDrawer}
        state={state}
        projectId={selectedId}
      />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        ></Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <ButtonBase onClick={() => toggleDrawer(card?._id)}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h1"
                        bgcolor="#5d6acf"
                        borderRadius={10}
                        color="#f1f1f1"
                        fontWeight={600}
                      >
                        Title
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={400}>
                        {card?.Project?.Title}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h1"
                        bgcolor="#c27e25"
                        borderRadius={10}
                        color="#f1f1f1"
                        fontWeight={600}
                      >
                        Technologies
                      </Typography>
                      <Typography variant="button" fontWeight={200}>
                        {card?.Project?.Technologies}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h1"
                        bgcolor="#56ba80"
                        borderRadius={10}
                        color="#f1f1f1"
                        fontWeight={600}
                      >
                        Other Information
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        fontWeight={600}
                        color="#d13414"
                      >
                        {card?.Other_Information?.Availability}
                      </Typography>
                    </CardContent>
                  </ButtonBase>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
