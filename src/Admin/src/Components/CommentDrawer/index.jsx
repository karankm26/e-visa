import React, { useState, useEffect } from "react";
import MessageIcon from "@mui/icons-material/Message";
import {
  Typography,
  ListItemButton,
  ListItemText,
  ListItem,
  Divider,
  List,
  Drawer,
  Box,
} from "@mui/material";
import { getComments, getOrders } from "../../API";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
  }, []);
  const toggleDrawer = (anchor) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: !state[anchor] });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        marginTop: 8,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {" "}
      <Typography variant="h5" sx={{ marginLeft: 2 }}>
        Messages
      </Typography>
      <List>
        {comments.map((text, index) => (
          <ListItem key={text.id} disablePadding sx={{ lineHeight: 2 }}>
            <ListItemButton>
              <ListItemText primary={text.body} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <MessageIcon
        onClick={toggleDrawer("right", true)}
        sx={{ cursor: "pointer" }}
      />
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
