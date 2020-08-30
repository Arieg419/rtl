import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import RunTheListIcon from "@material-ui/icons/FormatListNumberedOutlined";
import HamburgerIcon from "@material-ui/icons/MenuOutlined";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import LearnIcon from "@material-ui/icons/BookOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import TeamIcon from "@material-ui/icons/PeopleOutlined";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import Home from "./pages/Home";
import Twitter from "./pages/Twitter";
import Learn from "./pages/Learn";
import Category from "./pages/Category";
import Handout from "./pages/Handout";
import Footer from "./ui/footer";

import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: 10,
    },
    stickToBottom: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  })
);

type Anchor = "left";

function TemporaryDrawer(props: { isDrawerOpen: boolean }) {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState({ left: open });
  };

  const list = (anchor: Anchor) => {
    return (
      <div
        className={clsx(classes.list)}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <Link
            to={`/`}
            style={{ textDecoration: "none", color: "#000" }}
            key={"home"}
          >
            <ListItem button key={"Home"}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
          <Link
            to={`/learn`}
            style={{ textDecoration: "none", color: "#000" }}
            key={"learn"}
          >
            <ListItem button key={"Learn"}>
              <ListItemIcon>
                <LearnIcon />
              </ListItemIcon>
              <ListItemText primary={"Episodes"} />
            </ListItem>
          </Link>
          <Link
            to={`/twitter`}
            style={{ textDecoration: "none", color: "#000" }}
            key={"twitter"}
            onClick={() => {
              history.replace("/twitter");
              window.location.reload(false);
            }}
          >
            <ListItem button key={"Twitter"}>
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemText primary={"Twitter"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {["About"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <TeamIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      <React.Fragment>
        <AppBar
          position="static"
          style={{ backgroundColor: "#6739F8", fontFamily: "Poppins" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="run the list logo"
              onClick={toggleDrawer(true)}
            >
              <HamburgerIcon />
              <Typography variant="h6" className={classes.title}>
                Run the List
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor={"left"} open={state.left} onClose={toggleDrawer(false)}>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

function App() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <Router>
      <div className="App">
        <TemporaryDrawer isDrawerOpen={drawerOpen} />
        <Route path="/" exact component={Home} />
        <Route path="/twitter" exact component={Twitter} />
        <Route path="/learn" exact component={Learn} />
        <Route path="/category/:cid" exact component={Category} />
        <Route path="/handout" exact component={Handout} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
