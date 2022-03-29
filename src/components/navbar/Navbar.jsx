import React from "react";
import {
  AppBar,
  // Box,
  Button,
  Container,
  // IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { navbarStyle } from "./navbarStyle";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import navlist from "./navlist/navlist";
import appList from "./navlist/appList";


const Navbar = () => {
  // const [showAppbar, setShowAppbar] = useState(false);

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ background: "white" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", alignItems: "center", padding: 3 }}>
            {/* <IconButton
              size="large"
              edge="start"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            >
              <MenuIcon sx={{ color: "black", fontSize: 40 }} />
            </IconButton> */}
            <Typography noWrap component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="logo" />
            </Typography>
            {appList.map((list) => (
              <Typography
                key={list.id}
                sx={{ color: "black", mr: 4, display: { xs: 'none', md: 'block'} }}
                component={Link}
                to="/"
              >
                {list.list}
              </Typography>
            ))}

            <Button sx={{ color: "black", mr: 4 }}>LOG IN</Button>
            <Button sx={navbarStyle.signin}>
              SIGN UP
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar
        position="static"
        elevation={0}
        sx={navbarStyle.event}
      >
        <Container maxWidth="xl">
          <Toolbar>
              {navlist.map((list) => (
                <Typography component={Link} to="/" key={list.id} sx={navbarStyle.navList}>
                  {list.list}
                </Typography>
              ))}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
