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
var Search_1 = __importDefault(require("./Search"));
var AppBar_1 = require("../../ui/AppBar");
var styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    cardContainer: {
        flex: 1,
        padding: 10,
    },
    container: {
        flex: 1,
    },
});
function Learn(props) {
    return (React.createElement(react_native_1.View, { style: { flex: 1 } },
        React.createElement(AppBar_1.AppBar, { title: "Run the List", onPress: function () { } }),
        React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(Search_1.default, { navigation: props }))));
}
exports.Learn = Learn;
