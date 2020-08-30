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
var HandoutItem = /** @class */ (function (_super) {
    __extends(HandoutItem, _super);
    function HandoutItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandoutItem.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: {
                width: "100%",
                height: 250,
                borderWidth: 0.5,
                borderColor: "#dddddd",
                marginTop: this.props.topMargin,
            } },
            react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
                react_1.default.createElement(react_native_1.Image, { style: {
                        flex: 1,
                        resizeMode: "cover",
                    }, source: {
                        uri: this.props.imageUri,
                    } })),
            react_1.default.createElement(react_native_1.View, { style: {
                    flex: 1,
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    paddingLeft: 10,
                } },
                react_1.default.createElement(react_native_1.Text, { style: { fontSize: 16, color: "#b63838" } }, this.props.type),
                react_1.default.createElement(react_native_1.Text, { style: { fontSize: 10 } },
                    "Length: ",
                    this.props.price,
                    " minutes"))));
    };
    return HandoutItem;
}(react_1.Component));
exports.default = HandoutItem;
