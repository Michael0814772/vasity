import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import testimonial from "../../assets/testimonial.png";
import { amazingStyles } from "./amazingStyles";

const Amazing = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container sx={amazingStyles.parentGrid}>
          <Grid item xs={12} md={6} sx={{ paddingBottom: 4 }}>
            <Box sx={{ width: '88%', mx: {xs: 'auto'}, marginRight: {md: 'auto'}}}>
              <Typography variant="h2" sx={amazingStyles.gridOne}>
                Amazing <br /> Experiences from Our Wonderful Customers
              </Typography>
              <Typography variant="body1" sx={amazingStyles.gridTwo}>
                Here is what customers and vendors are saying about us, you can
                share your stories with us too.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={testimonial} alt="testimonial" className="mx-auto md:mr-auto" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Amazing;
