import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styles } from "./styles";

export const TestimonyDetails = ({
  image,
  imageName,
  name,
  address,
  btnName,
  details,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={styles.parentBox}>
          <img src={image} alt={imageName} className="pt-20 pb-7" />
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "25px" }}
          >
            {name}
          </Typography>
          <Box sx={styles.boxOne}>
            <Typography sx={{ marginRight: 2 }}>{address}</Typography>
            <Button
              sx={styles.btn}
            >
              {btnName}
            </Button>
          </Box>
          <Box>
            <Typography>{details}</Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
