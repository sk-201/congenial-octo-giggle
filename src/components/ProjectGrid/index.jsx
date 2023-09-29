import * as React from "react";
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
import { ButtonBase } from "@mui/material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ProjectGrid() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState((prev) => !prev);
  };
  return (
    <>
      <CssBaseline />

      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Projects
          </Typography>
        </Toolbar>
      </AppBar>
      <ProjectDetails toggleDrawer={toggleDrawer} state={state} />
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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <ButtonBase onClick={toggleDrawer}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h1"
                      >
                        Title
                      </Typography>
                      <Typography variant="subtitle2">
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h1"
                      >
                        Title
                      </Typography>
                      <Typography variant="subtitle2">
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h1"
                      >
                        Title
                      </Typography>
                      <Typography variant="subtitle2">
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h1"
                      >
                        Title
                      </Typography>
                      <Typography variant="subtitle2">
                        This is a media card. You can use this section to
                        describe the content.
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
