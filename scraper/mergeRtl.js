const fs = require("fs");
const hema = require("./data/rtl/hema.json");
const cardio = require("./data/rtl/cardiology.json");
const endo = require("./data/rtl/endocrinology.json");
const gastro = require("./data/rtl/gastro.json");
const healthEq = require("./data/rtl/healthEquity.json");
const nephro = require("./data/rtl/nephrology.json");
const merge = [hema, cardio, endo, gastro, healthEq, nephro];
const flattened = merge.flat(1);
// .sort((a, b) => (a.episodeIndex > b.episodeIndex ? 1 : -1));

fs.writeFileSync("./data/rtl/mergedRtl.json", JSON.stringify(flattened));
