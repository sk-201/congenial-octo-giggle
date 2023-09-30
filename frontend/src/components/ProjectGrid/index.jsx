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
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function ProjectGrid() {
  const [projects, setProjects] = useState([]);
  const [state, setState] = useState(false);
  const [selectedId, setSelectedId] = useState(undefined);
  const [keyword, setKeyword] = useState("");
  //for filtering out records
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/search?keyword=${keyword}`
      );
      setProjects(response.data);
    } catch (error) {
      console.error("Error searching for projects:", error);
    }
  };
  //fetching all projects
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
  //for toggling sideDrawer
  const toggleDrawer = (id) => {
    if (typeof id !== "object") {
      setSelectedId(id);
    }
    setState((prev) => !prev);
  };
  //setting the value for keyword
  const handleChangeSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
    handleSearch();
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Box
            display="flex"
            flexDirection="row"
            width={"100vw"}
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              fontWeight={600}
              pt={1}
            >
              Projects
            </Typography>

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 250,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Project"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e) => handleChangeSearch(e)}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
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
