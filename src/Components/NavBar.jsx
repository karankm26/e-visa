import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslator";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Apply for Visa",
    route: "/apply",
  },
  {
    id: 3,
    name: "Visa Status",
    route: "/status",
  },
  {
    id: 4,
    name: "Contact Us",
    route: "/contactUs",
  },
];
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          width={"60px"}
          height={"40px"}
          src={
            "data:image/png;base64,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"
          }
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item?.name}
                onClick={() => navigate(item.route)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="text-start"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              width={"60px"}
              height={"40px"}
              src={
                "data:image/png;base64,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"
              }
            />
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "flex" },
              marginTop: 2,
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.route}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={
                    location.pathname === item.route
                      ? { color: "#fff", background: "#5299df" }
                      : { color: "#fff", backgroundColor: "transparent" }
                  }
                >
                  {item.name}
                </Button>
              </NavLink>
            ))}
          </Box>
          <div className="mt-3 ms-2">
            <GoogleTranslate />
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
