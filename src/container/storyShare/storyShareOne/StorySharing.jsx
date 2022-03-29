import React from "react";
import { Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import blacksmiling from "../../../assets/blacksmiling.png";
import vector from "../../../assets/vector.png";
import { storyStyles } from "./storyStyles";
import { Box } from "@mui/system";

const StorySharing = () => {
  return (
    <>
      <Toolbar sx={{ background: "#222222" }}>
        <Container maxWidth="xl">
          <Grid container columnSpacing={7} sx={storyStyles.parentGrid}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ backgroundColor: "#2E2E2E", borderRadius: "100%" }}
            >
              <img src={blacksmiling} alt="blacksmiling" className="mx-auto" />
            </Grid>
            <Grid item xs={12} md={6} sx={storyStyles.gridTwo}>
              <Box sx={storyStyles.parentBox}>
                <Box sx={{ marginBottom: 8 }}>
                  <Typography variant="h4" gutterBottom>
                    Tolu & Joy’s Experience
                  </Typography>

                  <Button variant="outlined" sx={storyStyles.btn}>
                    Customer
                  </Button>
                </Box>

                <Box>
                  <Typography sx={storyStyles.usability}>
                    I had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back! I
                    had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back!
                  </Typography>

                  <Typography sx={{ fontSize: "30px", fontWeight: "lighter" }}>
                    Share your own story!
                  </Typography>
                  <img src={vector} alt="vector" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </>
  );
};

export default StorySharing;
