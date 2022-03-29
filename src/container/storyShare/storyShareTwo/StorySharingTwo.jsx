import {
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { styles } from "./styles";
import womanshopping from "../../../assets/womanshopping.png";
import vector from "../../../assets/vector.png";

const StorySharing = () => {
  return (
    <>
      <Toolbar>
        <Container maxWidth="xl">
          <Grid container columnSpacing={7} sx={styles.parentGrid}>
            <Grid item xs={12} md={6} sx={styles.gridTwo}>
              <Box sx={styles.parentBox}>
                <Box sx={{ marginBottom: 8 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bolder'}}>
                    Josiah’s Experience
                  </Typography>

                  <Button variant="outlined" sx={styles.btn}>
                    VENDOR
                  </Button>
                </Box>

                <Box>
                  <Typography sx={styles.usability}>
                    I had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back! I
                    had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back!
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "lighter",
                      color: "#FF5C00",
                    }}
                  >
                    Share your own story!
                  </Typography>
                  <img src={vector} alt="vector" />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <img
                src={womanshopping}
                alt="womanshopping"
                className="mx-auto"
              />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </>
  );
};

export default StorySharing;
