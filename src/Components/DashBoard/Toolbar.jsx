import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Avatar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Brightness2Outlined, NotificationsNone } from "@material-ui/icons";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const styles = (theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: theme.spacing(10)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  notification: {
    margin: "0 20px"
  },
  profileIcon: {
    margin: " 0px 10px"
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

const ToolbarComponent = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { classes } = props;

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="transparent"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={props.openDrawerHandler}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>

          <div className={classes.grow} />
          <div>
            <Brightness2Outlined />
          </div>

          <div className={classes.notification}>
            <NotificationsNone />
          </div>

          <Typography>Demo Name</Typography>
          <Avatar
            className={classes.profileIcon}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />

          <div>
            <ArrowDropDownIcon
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(ToolbarComponent);
