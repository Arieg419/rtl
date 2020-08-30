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
exports.AppBar = function (_a) {
    var title = _a.title;
    return (React.createElement(react_native_1.View, { style: {
            width: "100%",
            height: 50,
            backgroundColor: "#55acee",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
        } },
        React.createElement(react_native_1.Text, { style: {
                fontWeight: "bold",
                fontSize: 20,
                paddingLeft: 20,
                color: "#fff",
            } }, title)));
};
