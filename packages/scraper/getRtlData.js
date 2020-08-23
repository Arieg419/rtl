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
const EPISODE_HANDOUT_SEL = `//body//a[contains(@class, "sqs-block-image-link")]`;
const EPISODE_PODCAST_SEL = `//div[contains(@class, "sqs-audio-embed")]`;

async function getDocFromUrl(url) {
  const res = await axios.get(url);
  const html = res.data;
  return await new dom().parseFromString(html);
}

async function genTargetWithContext(parsedEpisode, SEL, idx) {
  const selector = EPISODE_CONTAINER + `[${idx}]` + SEL;
  return xpath.select(selector, parsedEpisode);
}

async function genEpisodesFromCategoryPage(url) {
  const parsedEpisode = await getDocFromUrl(url);
  const episodeCandidates = await xpath.select(
    EPISODE_CONTAINER,
    parsedEpisode
  );
  let categoryData = [];
  episodeCandidates.forEach(async (e, idx) => {
    if (idx == 0) {
      return;
    }
    const title = await genTargetWithContext(
      parsedEpisode,
      EPISODE_TITLE_SEL,
      idx
    );
    const summary = await genTargetWithContext(
      parsedEpisode,
      EPISODE_SUMMARY_SEL,
      idx
    );
    const img = await genTargetWithContext(parsedEpisode, EPISODE_IMG_SEL, idx);
    const podcast = await genTargetWithContext(
      parsedEpisode,
      EPISODE_PODCAST_SEL,
      idx
    );
    categoryData.push({
      title: title[0] != undefined ? title[0].data : "",
      summary: summary[0] != undefined ? summary[0].data : "",
      imgUrl: img[0] != undefined ? img[0].getAttribute("data-src") : "",
      imgAlt: img[0] != undefined ? img[0].getAttribute("alt") : "",
      podcastUrl:
        podcast[0] != undefined ? podcast[0].getAttribute("data-url") : "",
      podcastDurationMS:
        podcast[0] != undefined
          ? podcast[0].getAttribute("data-duration-in-ms")
          : "",
    });
  });
  return categoryData;
}

async function genHomepage() {
  try {
    console.log(chalk.blue("Launching data fetcher... 🚀🚀🚀"));
    const parsedDoc = await getDocFromUrl(BASE_URL);
    const urls = await xpath.select(MENU_LINKS_SEL, parsedDoc);
    const mapped = urls.map((a) => BASE_URL + a.attributes["0"].value);
    const uniqCategories = [...new Set(mapped)];
    console.log(
      chalk.blueBright("Found " + uniqCategories.length + " categories...")
    );
    console.log(
      chalk.blueBright(
        `Fetching epidosde data for ${uniqCategories.length} episodes`
      )
    );
    let episodes = [];
    uniqCategories.forEach(async (u) => {
      console.log(`Current episode scrape: ${u}`);
      let categoryEpisodes = await genEpisodesFromCategoryPage(u);
      console.log(chalk.cyanBright(categoryEpisodes));
      episodes.push(categoryEpisodes);
    });
    fs.writeFileSync("./data/episodes.json", JSON.stringify(episodes));
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
  handoutUris.forEach((hu) => console.log(chalk.grey(hu)));
}
