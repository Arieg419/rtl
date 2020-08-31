import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import EpisodeCard from "../../ui/episodeCard";
import mergedHandout from "../../data/mergedHandout.json";
import AudioPlayer from "material-ui-audio-player";

const muiTheme = createMuiTheme({});

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

interface Props {
  title: string;
}
export default function (props: Props) {
  window.scrollTo(0, 0);
  const titleProp = decodeURIComponent(
    window.location.href.split("/").pop() || ""
  );
  const r = mergedHandout.find(
    (e) =>
      e.squarespaceTitle?.toLowerCase() === titleProp.toLowerCase() ||
      e.applePodcastTitle.toLowerCase() === titleProp.toLowerCase()
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        margin: 20,
      }}
    >
      {r ? (
        <EpisodeCard
          title={r.squarespaceTitle || r.applePodcastTitle}
          description={r.squarespaceSummary || r.applePodcastSummary}
          releaseDate={r.applePodcastDate}
          imgUri={getRandomImage()}
          handout={r.squarespaceHandout}
        />
      ) : null}
      <ThemeProvider theme={muiTheme}>
        <AudioPlayer
          elevation={1}
          width="100%"
          variation="default"
          spacing={3}
          autoplay={false}
          order="standart"
          src={r?.squarespacePodcastUrl || ""}
        />
      </ThemeProvider>
    </div>
  );
}
