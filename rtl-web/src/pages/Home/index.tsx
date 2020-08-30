import React from "react";
import { Typography } from "@material-ui/core";
import Card from "../../ui/card";
import EpisodeCard from "../../ui/episodeCard";
import recentEpisodes from "../../data/mergedHandout.json";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    recentEpisodesTitle: {
      padding: 30,
      fontFamily: "Poppins",
    },
  })
);

const episodeMedia = [
  "https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3952224/pexels-photo-3952224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const getRandomMedia = () => {
  return episodeMedia[Math.ceil(Math.random() * episodeMedia.length - 1)];
};

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
      <Card />
      <Typography className={classes.recentEpisodesTitle} variant="h4">
        Recent Episodes
      </Typography>
      {recentEpisodes.slice(0, 11).map((r) => {
        const title = r.applePodcastTitle || r.squarespaceCategory;
        return !title ? null : (
          <EpisodeCard
            title={title}
            description={r.squarespaceSummary || r.applePodcastSummary}
            releaseDate={r.applePodcastDate}
            imgUri={getRandomMedia()}
            key={title}
          />
        );
      })}
    </div>
  );
}
