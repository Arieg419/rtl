import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EpisodeCard from "../../ui/episodeCard";
import PodcastCard from "../../ui/podcastCard";
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

const recentEpisodes = [
  {
    title: "Nephrology 101 with Dr. Emily",
    description:
      "Fam ugh messenger bag echo park PBR&B. Gentrify fanny pack stumptown scenester ugh locavore sriracha four loko four dollar toast williamsburg bushwick. Synth readymade stumptown selvage cold-pressed. Vegan leggings VHS.",
    imgUri:
      "https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    releaseDate: "June 27th, 2020",
  },
  {
    title: "Endocrinology by the numbers",
    description:
      "Fam ugh messenger bag echo park PBR&B. Gentrify fanny pack stumptown scenester ugh locavore sriracha four loko four dollar toast williamsburg bushwick. Synth readymade stumptown selvage cold-pressed. Vegan leggings VHS.",
    imgUri:
      "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    releaseDate: "June 27th, 2020",
  },
];

export default function () {
  const classes = useStyles();
  const path = window.location.pathname.split("/")[2];
  const es = data.filter((e) => {
    if (
      e.squarespaceCategory?.toLowerCase() === path.toLowerCase() ||
      e.applePodcastCategory?.toLowerCase() === path.toLowerCase()
    ) {
      return true;
    }
    return false;
  });
  console.log(`found resources`);
  console.log(es);

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
            imgUri={
              "https://images.pexels.com/photos/208518/pexels-photo-208518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            key={i}
          />
        ))}
      <Typography variant="h6" gutterBottom>
        Podcasts
      </Typography>
      {recentEpisodes.map((r, i) => (
        <PodcastCard key={r.title + i} />
      ))}
    </div>
  );
}
