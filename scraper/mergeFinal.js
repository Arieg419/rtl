const fs = require("fs");
const chalk = require("chalk");

const applePodcasts = require("./data/apple/applePodcastsCleaned.json");
const squarespaceEpisodes = require("./data/rtl/mergedRtl.json");

function linkify(text) {
  // starts with http or www regex
  const httpRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  const wwwRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  // check that we didn't get the handout bitly url
  let found = text.match(wwwRegex);
  if (found == null) {
    found = text.match(httpRegex);
    if (Array.isArray(found) && found.length) {
      found = found[0];
      found = found.split(".").slice(1).join(".");
    }
  }

  // check it's not like this: cardiology.https://www.runthelistpodcast.com/cardiology/#careers
  found = Array.isArray(found) ? found[0] : found;
  if (found && !found.startsWith("http") && !found.startsWith("www")) {
    found = found.split(".").slice(1).join(".");
  }
  return found;
}

function mergeDataSource() {
  const mergedData = [];
  const appleData = applePodcasts;
  const squarespaceData = squarespaceEpisodes.flat(1);
  appleData.forEach((a, aidx) => {
    const matchingEpisode = squarespaceData.find(
      (se) =>
        se.squarespaceTitle.toLowerCase() == a.applePodcastTitle.toLowerCase()
    );
    let mO;
    if (matchingEpisode) {
      const episodeIndex = parseInt(
        matchingEpisode.squarespaceTitle.split(":")[0].split(" ")[1]
      );
      mO = { ...a, ...matchingEpisode, episodeIndex };
      mergedData.push(mO);
    } else {
      const appleOriginLink = linkify(a.applePodcastSummary);
      const applePodcastCategory =
        appleOriginLink == null ? "" : appleOriginLink.split("/")[1];
      mO = {
        ...a,
        episodeIndex: parseInt(a.applePodcastTitle.split(":")[0].split(" ")[1]),
        appleOriginLink,
        applePodcastCategory,
      };
      mergedData.push(mO);
    }
    console.log(mO);
    console.log(`Found ${mergedData.length} episodes`);
  });
  mergedData.sort((a, b) => (a.episodeIndex > b.episodeIndex ? -1 : 1));
  fs.writeFileSync("./data/mergedHandout.json", JSON.stringify(mergedData));
}

mergeDataSource();
