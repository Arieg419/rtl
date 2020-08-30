function scrapeInChromeConsole() {
  const EPISODE_CONTAINER = `//body//div[@class='row sqs-row' and @id]`;
  const EPISODE_TITLE_SEL = `.//div[contains(@class, 'sqs-block-content')]//h2//text()`;
  const EPISODE_SUMMARY_SEL = `.//div[contains(@class, 'sqs-block-content')]//p/text()`;
  const EPISODE_IMG_SEL = `.//img[contains(@class, 'thumb-image')]`;
  const EPISODE_HANDOUT_SEL = `.//a[contains(@class, "sqs-block-image-link")]`;
  const EPISODE_PODCAST_SEL = `.//div[contains(@class, "sqs-audio-embed")]`;
  const es = $x(EPISODE_CONTAINER);
  let ed = [];
  es.forEach((e, idx) => {
    if (idx === 0) {
      return;
    }
    const squarespaceCategory = window.location.pathname.slice(
      1,
      window.location.pathname.length
    );
    const squarespaceTitleEl = $x(EPISODE_TITLE_SEL, e);
    if (!Array.isArray(squarespaceTitleEl) || squarespaceTitleEl.length === 0) {
      return;
    }
    const handoutData = $x(EPISODE_HANDOUT_SEL, e);
    const squarespaceTitle = squarespaceTitleEl[0].wholeText;
    const squarespaceSummary = $x(EPISODE_SUMMARY_SEL, e)[0].wholeText;
    const squarespaceImgUrl = $x(EPISODE_IMG_SEL, e);
    const squarespaceHandout =
      handoutData == null ||
      !Array.isArray(handoutData) ||
      handoutData.length === 0
        ? null
        : handoutData[0].href;
    const squarespacePodcastUrl = $x(EPISODE_PODCAST_SEL, e)[0].dataset.url;
    ed.push({
      squarespaceCategory,
      squarespaceTitle,
      squarespaceSummary,
      squarespaceImgUrl,
      squarespaceHandout,
      squarespacePodcastUrl,
    });
  });
  console.log(`Found episodes...`);
  console.log(ed);
  console.log(JSON.stringify(ed));
}
scrapeInChromeConsole();
