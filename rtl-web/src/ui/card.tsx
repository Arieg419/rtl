import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import logo from "../assets/logo512.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
    width: "100%",
    backgroundSize: "contain",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Welcome card image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "Roboto" }}
          >
            Run the List
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Internal medicine podcast, made for med students and all learners.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/learn" style={{ textDecoration: "none" }}>
            Episodes
          </Link>
        </Button>
        {/* <Button
          variant="contained"
          style={{
            backgroundColor: "#1EA1F2",
            color: "#fff",
            marginRight: 10,
          }}
          onClick={() => {
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
          }}
        >
          <Typography>Install</Typography>
        </Button> */}
        <Button size="small" color="primary">
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
// className = "twitter-follow-button";
