"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomDate = function (start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
var getFormattedDate = function (date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return month + "/" + day + "/" + year;
};
exports.categoryItems = [
    {
        title: "Gastroentorology",
        tags: [
            {
                title: "Cardio",
                bgColor: "",
            },
        ],
        lastUpdated: "Last update: " +
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
        lastUpdated: "Last update: " +
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
        lastUpdated: "Last update: " +
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
        lastUpdated: "Last update: " +
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
        lastUpdated: "Last update: " +
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
        lastUpdated: "Last update: " +
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
        lastUpdated: "Last update: " +
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
        lastUpdated: "Last update: " +
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
        lastUpdated: "Last update: " +
            getFormattedDate(randomDate(new Date(2018, 0, 1), new Date())),
        resources: Math.ceil(Math.random() * 10) + " resources",
    },
];
