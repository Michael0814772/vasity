import { Container, Toolbar } from "@mui/material";
import React from "react";
import FooterOne from "./footerBody/FooterOne";
import FooterTwo from "./footerBody/FooterTwo";

const Footer = () => {
  return (
    <>
      <Toolbar sx={{ background: '#25201D' }}>
        <Container maxWidth="xl">
            <FooterOne />
            <FooterTwo />
        </Container>
      </Toolbar>
    </>
  );
};

export default Footer;
