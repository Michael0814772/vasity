import {
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import community from "../../../assets/community.png";
import subscribe from "../../../assets/subscribe.png";
import { styles } from "./styles";

const FooterOne = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={5}
        sx={{ px: { xs: 0, lg: 10 }, alignItems: "center", paddingBottom: 4 }}
      >
        <Grid item xs={12} md={6}>
          <img
            src={subscribe}
            alt="subscribe"
            className="mx-auto relative -top-10"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.gridTwoBox}>
            <img src={community} alt="community" className="pb-4" />
            <Typography
              variant="body1"
              sx={{ color: "white", fontWeight: "lighter", paddingBottom: 5 }}
            >
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  label="enter your email address"
                  sx={styles.boxTwoLabel}
                  variant="filled"
                />
                <Button variant="contained" sx={styles.btn}>
                  SUBSCRIBE
                </Button>
              </FormControl>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default FooterOne;
