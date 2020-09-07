import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
import ShareIcon from "@material-ui/icons/ShareOutlined";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { StaticBanner } from "material-ui-banner";

import Home from "./pages/Home";
import Twitter from "./pages/Twitter";
import Learn from "./pages/Learn";
import About from "./pages/About";
import Category from "./pages/Category";
import Handout from "./pages/Handout";
import Episode from "./pages/Episode";
import Footer from "./ui/footer";
import Logo from "./assets/logo512.png";

import "./App.css";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  // @ts-ignore
  window.deferredPrompt = e;
  StaticBanner.show({
    buttonLabel: "Install",
    buttonProps: {
      style: {
        backgroundColor: "#1EA1F2",
        color: "#FFF",
      },
      onClick: () => {
        //@ts-ignore
        deferredPrompt.prompt();
        //@ts-ignore
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }
        });
      },
    },
    icon: <img style={{ height: 32, width: 32 }} src={Logo} />,
    label:
      "For the best Run the List experience add the site to your homescreen.",
  });
});

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
        onClick={() => {}}
        onKeyDown={() => {}}
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
          <Link
            to={`/about`}
            style={{ textDecoration: "none", color: "#000" }}
            key={"about"}
          >
            <ListItem button key={"About"}>
              <ListItemIcon>
                <TeamIcon />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItem>
          </Link>
          <ListItem
            button
            key={"Share"}
            onClick={() => {
              if (!navigator.share) {
                return;
              }
              navigator
                .share({
                  title: "Run the List",
                  text: "Check out the run the list mobile app",
                  url: `https://runthelist.netlify.app/#`,
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
            }}
          >
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary={"Share"} />
          </ListItem>
        </List>
      </div>
    );
  };

  return (
    <div>
      <React.Fragment>
        <AppBar
          position="static"
          style={{ backgroundColor: "#1EA1F2", fontFamily: "Poppins" }}
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
        <StaticBanner />
        <Drawer
          anchor={"left"}
          open={state.left}
          onClose={toggleDrawer(false)}
          onClick={() => {
            setState({ left: false });
          }}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

function App() {
  const [drawerOpen] = React.useState(false);

  return (
    <Router>
      <div className="App">
        <TemporaryDrawer isDrawerOpen={drawerOpen} />
        <Route path="/" exact component={Home} />
        <Route path="/twitter" exact component={Twitter} />
        <Route path="/learn" exact component={Learn} />
        <Route path="/about" exact component={About} />
        <Route path="/category/:cid" exact component={Category} />
        <Route path="/handout/:docpath" exact component={Handout} />
        <Route path="/episode/:id" exact component={Episode} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
