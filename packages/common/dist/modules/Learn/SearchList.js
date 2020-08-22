"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var SearchItem_1 = require("./SearchItem");
function SearchList(props) {
    return (react_1.default.createElement(react_native_1.FlatList, { style: {
            backgroundColor: props.searchBarFocused ? "rgba(0,0,0,0.3)" : "white",
        }, data: props.data, renderItem: function (_a) {
            var item = _a.item;
            return SearchItem_1.SearchItem(item, props.navigation);
        }, ItemSeparatorComponent: SearchItem_1.SearchItemSeperator, keyExtractor: function (item, index) { return index.toString(); } }));
}
exports.default = SearchList;
