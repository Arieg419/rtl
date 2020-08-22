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
var tagBgColors = ["#FF2FB4", "#DA6EF6", "#979CFF", "#00aced"];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handlePress = function () { };
        return _this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.handlePress },
                react_1.default.createElement(react_native_1.Text, { style: getBtnStyle() }, "Cardio"))));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
var getBtnStyle = function () {
    return {
        backgroundColor: tagBgColors[Math.floor(Math.random() * tagBgColors.length)],
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 6,
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        overflow: "hidden",
        padding: 6,
        textAlign: "center",
    };
};
var styles = react_native_1.StyleSheet.create({
    container: {
        marginRight: 10,
    },
});
