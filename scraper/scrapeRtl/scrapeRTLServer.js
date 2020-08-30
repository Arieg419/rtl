const { Console } = require("console");
const fs = require("fs");
const axios = require("axios");
const chalk = require("chalk");
const xpath = require("xpath"),
  dom = require("xmldom").DOMParser;

const BASE_URL = `https://www.runthelistpodcast.com`;
const MENU_LINKS_SEL = `//body//div[contains(@class, 'subnav')]//li[contains(@class, 'page-collection')]//a`;
const EPISODE_CONTAINER = `//body//div[contains(@class, 'row') and contains(@class, 'sqs-row')][1]`;
const EPISODE_TITLE_SEL = `//div[contains(@class, 'sqs-block-content')]//h2//text()`;
const EPISODE_SUMMARY_SEL = `//div[contains(@class, 'sqs-block-content')]//p/text()`;
const EPISODE_IMG_SEL = `//img[contains(@class, 'thumb-image')]`;
const EPISODE_HANDOUT_SEL = `//a[contains(@class, "sqs-block-image-link")]`;
const EPISODE_PODCAST_SEL = `//div[contains(@class, "sqs-audio-embed")]`;

const errorOutput = fs.createWriteStream("./stderr.log");
console = new Console({ stdout: process.stdout, stderr: errorOutput });

async function getDocFromUrl(url) {
  const res = await axios.get(url);
  const html = res.data;
  return await new dom().parseFromString(html);
}

async function genTargetWithContext(parsedEpisode, SEL, idx) {
  const selector = EPISODE_CONTAINER + SEL;
  return await xpath.select(selector, parsedEpisode);
}

function logEpisodeData(o) {
  chalk.underline;
  console.log(
    chalk.bgCyan("********************************************************")
  );
  console.log(
    chalk.cyanBright(chalk.underline("Title:") + " " + o.squarespaceTitle)
  );
  console.log(
    chalk.yellow(chalk.underline("Summary:") + " " + o.squarespaceSummary)
  );
  console.log(
    chalk.greenBright(chalk.underline("ImgUrl:") + " " + o.squarespaceImgUrl)
  );
  console.log(
    chalk.redBright(
      chalk.underline("SquarespacePodcastUrl:") + " " + o.squarespacePodcastUrl
    )
  );
  console.log(chalk.underline(`Handout:`) + " " + `${o.squarespaceHandout}`);
  console.log(
    chalk.blueBright(
      chalk.underline("SquarespacePodcastDuration:") +
        " " +
        millisToMinutesAndSeconds(o.squarespacePodcastDurationMS)
    )
  );
}

function logCategoryMetadata(categoryEpisodes) {
  console.log("**********************************************");
  categoryEpisodes.forEach((e) => {
    console.log(
      chalk.cyanBright(chalk.underline("Category:") + " " + e.category)
    );
    console.log(chalk.blue(chalk.underline("Title:") + " " + e.title));
  });
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function validatePayload(payload, idx) {
  if (payload === undefined || payload == null || payload[idx] === undefined) {
    return false;
  }
  return true;
}

async function genEpisodesFromCategoryPage(url) {
  const parsedEpisode = await getDocFromUrl(url);
  const episodeCandidates = await xpath.select(
    EPISODE_CONTAINER,
    parsedEpisode
  );
  console.log(chalk.greenBright(url));
  let categoryData = [];
  for (let idx = 0; idx < episodeCandidates.length; idx++) {
    if (idx == 0) {
      continue;
    }
    try {
      const title = await genTargetWithContext(
        parsedEpisode,
        EPISODE_TITLE_SEL,
        idx
      );
      if (!validatePayload(title, idx)) {
        console.error(`Failed to validate title!`, title);
        continue;
      }
      const summary = await genTargetWithContext(
        parsedEpisode,
        EPISODE_SUMMARY_SEL,
        idx
      );
      if (!validatePayload(summary, idx)) {
        console.error(`Failed to validate summary!`);
        continue;
      }
      const img = await genTargetWithContext(
        parsedEpisode,
        EPISODE_IMG_SEL,
        idx
      );
      if (!validatePayload(img, idx)) {
        console.error(`Failed to validate img!`);
        continue;
      }
      const podcast = await genTargetWithContext(
        parsedEpisode,
        EPISODE_PODCAST_SEL,
        idx
      );
      if (!validatePayload(podcast, idx)) {
        console.error(`Failed to validate podcast!`);
        continue;
      }
      const handout = await genTargetWithContext(
        parsedEpisode,
        EPISODE_HANDOUT_SEL,
        idx
      );
      console.log(handout[idx]["attributes"]["1"].value);

      const o = {
        squarespaceCategory: url.split(".com/")[1],
        squarespaceTitle: title[idx].data,
        squarespaceSummary: summary[idx].data,
        squarespaceImgUrl: img[idx].getAttribute("data-src"),
        squarespaceImgAlt: img[idx].getAttribute("alt"),
        squarespacePodcastUrl: podcast[idx].getAttribute("data-url"),
        squarespacePodcastDurationMS: podcast[idx].getAttribute(
          "data-duration-in-ms"
        ),
        squarespaceHandout:
          `https://runthelistpodcast.com` +
          handout[idx]["attributes"]["1"].value,
      };
      logEpisodeData(o);
      categoryData.push(o);
    } catch (e) {
      console.error(`Something went wrong! `, e);
    }
  }
  return categoryData;
}

async function genHomepage() {
  try {
    console.log(chalk.blue("Launching data fetcher... 🚀🚀🚀"));
    const parsedDoc = await getDocFromUrl(BASE_URL);
    const urls = await xpath.select(MENU_LINKS_SEL, parsedDoc);
    const mapped = urls.map((a) => BASE_URL + a.attributes["0"].value);
    const uniqCategories = [...new Set(mapped)];
    let episodes = [];
    for (let i = 0; i < uniqCategories.length; i++) {
      const u = uniqCategories[i];
      let categoryEpisodes = await genEpisodesFromCategoryPage(u);
      episodes.push(categoryEpisodes);
    }
    fs.writeFileSync(
      "./data/squareSpaceEpisodes.json",
      JSON.stringify(episodes)
    );
  } catch (err) {
    console.error(`Something went wrong... ${err}`);
  }
}

genHomepage();

async function genHandoutsFromCategoryPage(url) {
  const parsedEpisode = await getDocFromUrl(u);
  const handoutEls = await xpath.select(EPISODE_HANDOUT_SEL, parsedEpisode);
  console.log(chalk.greenBright(`Found ${handoutEls.length} handout nodes..`));
  const handoutUris = handoutEls.map((a) => a.getAttribute("href"));
}
