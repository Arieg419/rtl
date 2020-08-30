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

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const getFormattedDate = (date: Date) => {
  let year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
};

export const categoryItems: Array<CategoryItemType> = [
  {
    title: "Gastroentorology",
    tags: [
      {
        title: "Cardio",
        bgColor: "",
      },
    ],
    lastUpdated:
      "Last update: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: Math.ceil(Math.random() * 10) + "resources",
  },
  {
    title: "Nephrology",
    tags: [
      {
        title: "Cardio",
        bgColor: "",
      },
    ],
    lastUpdated:
      "Last update: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: Math.ceil(Math.random() * 10) + "resources",
  },
  {
    title: "Cardio",
    tags: [
      {
        title: "Cardio",
        bgColor: "",
      },
    ],
    lastUpdated:
      "Last update: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: Math.ceil(Math.random() * 10) + "resources",
  },
  {
    title: "Covid",
    tags: [
      {
        title: "Cardio",
        bgColor: "",
      },
    ],
    lastUpdated:
      "Last update: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: Math.ceil(Math.random() * 10) + "resources",
  },
  {
    title: "Endocrinology",
    tags: [
      {
        title: "Cardio",
        bgColor: "",
      },
    ],
    lastUpdated:
      "Last update: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: Math.ceil(Math.random() * 10) + "resources",
  },
  {
    title: "Blood analysis",
    tags: [
      {
        title: "Cardio",
        bgColor: "",
      },
    ],
    lastUpdated:
      "Last update: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: Math.ceil(Math.random() * 10) + " resources",
  },
  {
    title: "Dialysis",
    tags: [
      {
        title: "Cardio",
        bgColor: "",
      },
    ],
    lastUpdated:
      "Last update: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: Math.ceil(Math.random() * 10) + " resources",
  },
  {
    title: "Trauma",
    tags: [
      {
        title: "Cardio",
        bgColor: "",
      },
    ],
    lastUpdated:
      "Last update: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: Math.ceil(Math.random() * 10) + " resources",
  },
  {
    title: "Managing up",
    tags: [
      {
        title: "Cardio",
        bgColor: "",
      },
    ],
    lastUpdated:
      "Last update: " +
      getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
    resources: Math.ceil(Math.random() * 10) + " resources",
  },
];
