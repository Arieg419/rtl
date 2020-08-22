"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var SearchTags_1 = __importDefault(require("./SearchTags"));
function CategoryItem(item) {
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, { style: { padding: 20, paddingBottom: 5, fontSize: 20 } }, item.title),
        React.createElement(react_native_1.Text, { style: { paddingLeft: 20, padding: 4, fontSize: 14 } }, Math.ceil(Math.random() * 10) + " resources"),
        React.createElement(react_native_1.Text, { style: { paddingLeft: 20, padding: 4, fontSize: 14 } }, item.lastUpdated),
        React.createElement(react_native_1.Text, { style: { paddingLeft: 20, paddingTop: 5, fontSize: 15 } }, "Tags:"),
        React.createElement(react_native_1.View, { style: {
                flexDirection: "row",
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "flex-start",
            } },
            React.createElement(SearchTags_1.default, null),
            React.createElement(SearchTags_1.default, null),
            React.createElement(SearchTags_1.default, null))));
}
exports.CategoryItem = CategoryItem;
function CategoryItemSeperator() {
    return (React.createElement(react_native_1.View, { style: {
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE",
        } }));
}
exports.CategoryItemSeperator = CategoryItemSeperator;
