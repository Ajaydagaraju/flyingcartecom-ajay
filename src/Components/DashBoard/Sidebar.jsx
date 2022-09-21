import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { MenuItem, Menu, Avatar } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Navigate, useNavigate} from "react-router-dom"

import {
  Brightness2Outlined,
  Home,
  NotificationsNone,
} from "@material-ui/icons";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex",
  // },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //     backgroundColor: "white",
  //   }),
  // },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  notification: {
    margin: "0 20px",
  },
  profileIcon: {
    margin: " 0px 10px",
  },

  menuButton: {
    marginLeft: 10,
    color: "black",
  },
  hide: {
    display: "none",
  },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  //   whiteSpace: "nowrap",
  //   zIndex: 121212,
  // },
  // drawerOpen: {
  //   background: "#554994",
  //  color: 'white',
  //   width: drawerWidth,
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },

  icon: {
    color: "white",
    margin: "10px 0px",
  },
  active: {
    borderLeft: "5px solid white",
  },

  drawerClose: {
    background: "black",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  liststyle:{
    cursor:"pointer",
    "&:hover": {
      backgroundColor: '#eeeeee'
    }
  },
  // toolbar: {
  //   ...theme.mixins.toolbar,
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none"
  //   }
  // },
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing(3)
  // }
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    // backgroundColor:"white"
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#eeeeee",
    // padding: theme.spacing(3),
  },
}));

export default function Sidebar({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  console.log(children);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();


  const handleSignOut=() =>{
    sessionStorage.clear()
    navigate("/")
  }


  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  
  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "white", color: "black" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
          <IconButton
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            className={!open ? clsx(classes.menuButton): null}
          >
            <MenuIcon />
          </IconButton>
            Dashboard
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
              <MenuItem onClick={handleSignOut}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {/* <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >

        <List>
          <ListItem style ={{ marginBottom: "40px"}}>
            <ListItemIcon>
              <Home style={{ color: "white" }} fontSize="large" />
            </ListItemIcon>
          </ListItem>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem
              button
              key={text}
              className={`${index === 0 && classes.active}   `}
            >
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon className={classes.icon} />
                ) : (
                  <MailIcon className={classes.icon} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer> */}
          <Drawer
        className={classes.drawer}
        variant={isMdUp ? "permanent" : "temporary"}
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.toolbar} />
        <Divider />
        {/* <List>
          {["Dashboard", "AddPage", "Send email", "Drafts"].map((text, index) => (

            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <List className={classes.liststyle} >
          <ListItem onClick={()=>navigate("/body")}>
          <ListItemIcon  >
            <InboxIcon/>
          </ListItemIcon>
              <ListItemText >Dashboard</ListItemText> 
          </ListItem>
        </List>
        <List className={classes.liststyle}>
          <ListItem onClick={()=>navigate("/post")}>
          <ListItemIcon  >
            <InboxIcon/>
          </ListItemIcon>
              <ListItemText>Add Page</ListItemText> 
          </ListItem>
        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
