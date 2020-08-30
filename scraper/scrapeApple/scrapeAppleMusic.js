const fs = require("fs");
const chalk = require("chalk");
const podcastData = require("./data/applePodcasts").data;
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function cleanPodcastData() {
  console.log(`cleaning podcasts... found ${podcastData.length} episdoes`);
  const cleanedData = [];
  podcastData.forEach((e, i) => {
    const splitEpisode = e.split("\n");
    const applePodcastDate = splitEpisode[0];
    const applePodcastTitle = splitEpisode[1];
    const applePodcastSummary = splitEpisode
      .slice(3, splitEpisode.length - 2)
      .join("");
    const applePodcastLength = splitEpisode[splitEpisode.length - 1];
    console.log(chalk.magentaBright(`Date: ${applePodcastDate}`));
    console.log(chalk.cyan(`Title: ${applePodcastTitle}`));
    console.log(chalk.red(`Summary: ${applePodcastSummary}`));
    console.log(chalk.green(`Length: ${applePodcastLength}`));
    console.log(chalk.yellow(`***********************************`));
    const eData = {
      applePodcastDate,
      applePodcastTitle,
      applePodcastSummary,
      applePodcastLength,
    };
    cleanedData.push(eData);
  });
  console.log(`Writing ${cleanedData.length} episodes...`);
  // TODO: write to web app dir
  fs.writeFileSync(
    "./data/applePodcastsCleaned.json",
    JSON.stringify(cleanedData)
  );
}

cleanPodcastData();

function scrapeInBrowserConsole() {
  $x(`//body//div[contains(@class, "l-row")]`)
    .map((e) => e.innerText)
    .filter((t) => {
      let isEpisode = false;
      for (let i = 0; i < months.length; i++) {
        const currMonth = months[i];
        if (t.startsWith(currMonth)) {
          isEpisode = true;
        }
      }
      return isEpisode;
    });
}
