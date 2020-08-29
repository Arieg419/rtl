import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import RunTheListIcon from "@material-ui/icons/FormatListNumberedOutlined";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import LearnIcon from "@material-ui/icons/BookOutlined";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Category from "./pages/Category";
import Handout from "./pages/Handout";

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
  })
);

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="run the list logo"
            >
              <RunTheListIcon />
              <Typography variant="h6" className={classes.title}>
                Run the List
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Route path="/" exact component={Home} />
        <Route path="/learn" exact component={Learn} />
        <Route path="/category/:cid" exact component={Category} />
        <Route path="/handout" exact component={Handout} />
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            console.log(`new val is `, newValue);
            setValue(newValue);
          }}
          showLabels
          className={classes.stickToBottom}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Learn"
            icon={<LearnIcon />}
            component={Link}
            to="/learn"
          />
        </BottomNavigation>
      </div>
    </Router>
  );
}

export default App;
