"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var data_1 = require("./data");
var SearchHeader_1 = __importDefault(require("./SearchHeader"));
var SearchList_1 = __importDefault(require("./SearchList"));
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            searchBarFocused: false,
            data: data_1.categoryItems,
        };
        _this.searchItems = function (text) {
            if (text.length === 0) {
                _this.setState({
                    data: data_1.categoryItems,
                    value: "Search",
                });
                return;
            }
            var newData = _this.state.data.filter(function (item) {
                var itemData = "" + item.title.toUpperCase();
                var textData = text.toUpperCase();
                if (text.length > 0) {
                    return itemData.indexOf(textData) > -1;
                }
            });
            _this.setState({
                data: newData,
                value: text,
            });
        };
        _this.keyboardDidShow = function () {
            _this.setState({ searchBarFocused: true });
        };
        _this.keyboardWillShow = function () {
            _this.setState({ searchBarFocused: true });
        };
        _this.keyboardWillHide = function () {
            _this.setState({ searchBarFocused: false });
        };
        return _this;
    }
    Search.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(SearchHeader_1.default, { searchBarFocused: this.state.searchBarFocused, searchItems: this.searchItems }),
            react_1.default.createElement(SearchList_1.default, { data: this.state.data, searchBarFocused: this.state.searchBarFocused, navigation: this.props.navigation })));
    };
    return Search;
}(react_1.default.Component));
exports.default = Search;
