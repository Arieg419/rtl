import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EpisodeCard from "../../ui/episodeCard";
import data from "../../data/mergedHandout.json";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    textAlign: "left",
    padding: 20,
    paddingBottom: 60,
    overflowX: "hidden",
  },
});

const images = [
  "https://images.pexels.com/photos/208518/pexels-photo-208518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/163186/globuli-medical-bless-you-homeopathy-163186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3902885/pexels-photo-3902885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

function getRandomImage() {
  return images[Math.ceil(Math.random() * images.length - 1)];
}

export default function () {
  const classes = useStyles();
  const locationAsList = window.location.href.split("/");
  const path = locationAsList[locationAsList.length - 1];
  const fixedPath = path === "Hematology" ? "hematologyoncology" : path;
  const es = data.filter((e) => {
    const category =
      e.squarespaceCategory?.toLowerCase() ||
      e.applePodcastCategory?.toLowerCase();
    if (
      category === fixedPath.toLowerCase() ||
      category === fixedPath.toLowerCase()
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className={classes.root}>
      <Typography variant="overline" display="block" gutterBottom>
        {es.length} resources
      </Typography>
      <Typography variant="h4" gutterBottom>
        {path}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Resources
      </Typography>
      {es
        .sort((a, b) => (a.episodeIndex < b.episodeIndex ? 1 : -1))
        .map((r, i) => (
          <EpisodeCard
            title={r.squarespaceTitle || r.applePodcastTitle}
            description={r.squarespaceSummary || r.applePodcastSummary}
            releaseDate={r.applePodcastDate}
            imgUri={getRandomImage()}
            handout={r.squarespaceHandout}
            podcastUrl={r.squarespacePodcastUrl}
            key={i}
          />
        ))}
      {/* <Typography variant="h6" gutterBottom>
        Podcasts
      </Typography>
      {[].map((r, i) => (
        <PodcastCard key={r.title + i} />
      ))} */}
    </div>
  );
}
