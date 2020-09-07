import React, { useEffect } from "react";
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
  window.scrollTo(0, 0);
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute(
      "href",
      "https://twitter.com/runthelistpod?ref_src=twsrc%5Etfw"
    );
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);
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
      <section className="twitterContainer">
        <div className="twitter-embed"></div>
      </section>
    </div>
  );
}
