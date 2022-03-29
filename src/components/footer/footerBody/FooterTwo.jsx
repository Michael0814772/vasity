import { Grid, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterTwo = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={0}
        rowSpacing={4}
        sx={{ mx: { md: "auto" }, color: "white", paddingBottom: 5 }}
      >
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "16px", paddingBottom: 2 }}
          >
            Company
          </Typography>
          <ul className="allLi">
            <li>About us</li>
            <li>Term of Use</li>
            <li>Privacy Policy</li>
            <li>Press & Media</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, fontSize: "16px", paddingBottom: 2 }}
          >
            Products
          </Typography>
          <ul className="allLi">
            <li>Marketplace</li>
            <li>Magazine</li>
            <li>Seller</li>
            <li>Wholesale</li>
            <li>Services</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, fontSize: "16px", paddingBottom: 2 }}
          >
            Careers
          </Typography>
          <ul className="allLi">
            <li>Become a Campus Rep</li>
            <li>Become a Vasiti Influencer</li>
            <li>Become a Campus writer</li>
            <li>Become an Affiliate</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, fontSize: "16px", paddingBottom: 2 }}
          >
            Get in touch
          </Typography>
          <ul className="allLi">
            <li>Contact us</li>
            <li>Partner with us</li>
            <li>Advertise with us</li>
            <li>Help/FAQs</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, fontSize: "16px", paddingBottom: 2 }}
          >
            Join our community
          </Typography>
          <ul className="flex gap-3 pb-10">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
          </ul>

          <Typography
            variant="body1"
            sx={{ fontWeight: 400, fontSize: "14px" }}
          >
            Email Newsletter
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default FooterTwo;
