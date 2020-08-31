const hema = require("../../data/hema.json");
const cardio = require("../../data/cardiology.json");
const endo = require("../../data/endocrinology.json");
const gastro = require("../../data/gastro.json");
const healthEq = require("../../data/healthEquity.json");
const nephro = require("../../data/nephrology.json");
const covid = require("../../data/covid.json");

export type TagItemType = {
  title: string;
  bgColor: string;
};

export type CategoryItemType = {
  title: string;
  tags: Array<TagItemType>;
  lastUpdated: string;
  resources: string;
};

function getCategory(title: string, cat: any) {
  return {
    title,
    tags: [],
    lastUpdated:
      "Last updated: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: cat.length + " resources",
  };
}

export const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const getFormattedDate = (date: Date) => {
  let year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
};

// const tagColorPalette = ["#00899F", "#004A85", "#004A85", "#F22086"];

export const categoryItems = [
  getCategory("Hematology", hema),
  getCategory("Cardiology", cardio),
  getCategory("Endocrinology", endo),
  getCategory("Gastroenterology", gastro),
  getCategory("Health-Equity", healthEq),
  getCategory("Covid-19", covid),
  getCategory("Nephrology", nephro),
];
