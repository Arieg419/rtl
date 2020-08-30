"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
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
function Handout(props) {
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.Text, null, "This is the Handout module.")));
}
exports.default = Handout;
