import React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    recentEpisodesTitle: {
      padding: 30,
      fontFamily: "Poppins",
    },
  })
);
export default function () {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginBottom: 50,
      }}
    >
      <Typography className={classes.recentEpisodesTitle} variant="h4">
        Follow us on Twitter for all the latest and greatest
      </Typography>
      <a
        className="twitter-timeline"
        href="https://twitter.com/runthelistpod?ref_src=twsrc%5Etfw"
      >
        Tweets by runthelistpod
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  );
}
