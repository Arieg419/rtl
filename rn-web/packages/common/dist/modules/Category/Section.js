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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Section.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: {
                height: 130,
                width: 130,
                marginLeft: 20,
                borderWidth: 0.5,
                borderColor: "#dddddd",
            } },
            react_1.default.createElement(react_native_1.View, { style: { flex: 2 } },
                react_1.default.createElement(react_native_1.Image, { source: {
                        uri: this.props.imageUri,
                    }, style: styles.imgStyle }))));
    };
    return Section;
}(react_1.Component));
exports.default = Section;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imgStyle: {
        flex: 1,
        resizeMode: "cover",
        height: undefined,
        width: undefined,
    },
});
