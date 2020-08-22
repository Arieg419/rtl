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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var AppBar_1 = require("../../ui/AppBar");
var HandoutItem_1 = __importDefault(require("./HandoutItem"));
var _a = react_native_1.Dimensions.get("window"), height = _a.height, width = _a.width;
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Category.prototype.componentWillMount = function () {
        this.startHeaderHeight = 80;
        if (react_native_1.Platform.OS == "android") {
            // @ts-ignore
            this.startHeaderHeight = 100 + react_native_1.StatusBar.currentHeight;
        }
    };
    Category.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.View, { style: { flex: 1, marginTop: 0 } },
                react_1.default.createElement(AppBar_1.AppBar, { title: "Cardiovascular", onPress: function () { } }),
                react_1.default.createElement(react_native_1.ScrollView, { scrollEventThrottle: 16 },
                    react_1.default.createElement(react_native_1.View, { style: { flex: 1, backgroundColor: "white", paddingTop: 10 } },
                        react_1.default.createElement(react_native_1.View, { style: { marginTop: 10, paddingHorizontal: 20 } },
                            react_1.default.createElement(react_native_1.Text, { style: { fontSize: 24, fontWeight: "700" } }, "Handouts"),
                            react_1.default.createElement(react_native_1.Text, { style: { fontWeight: "100", marginTop: 10 } }, "Curated cardiovascular handouts for review"),
                            react_1.default.createElement(react_native_1.View, { style: { width: width - 40, height: 200, marginTop: 20 } },
                                react_1.default.createElement(react_native_1.Image, { style: {
                                        flex: 1,
                                        height: undefined,
                                        width: undefined,
                                        resizeMode: "cover",
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        borderColor: "#dddddd",
                                    }, source: {
                                        uri: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                                    } })))),
                    react_1.default.createElement(react_native_1.View, { style: { marginTop: 40 } },
                        react_1.default.createElement(react_native_1.Text, { style: {
                                fontSize: 24,
                                fontWeight: "700",
                                paddingHorizontal: 20,
                            } }, "Related Podcasts"),
                        react_1.default.createElement(react_native_1.View, { style: {
                                paddingHorizontal: 20,
                                marginTop: 20,
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                            } },
                            react_1.default.createElement(HandoutItem_1.default, { width: height, height: width, type: "Cardiovascular events", price: 82, topMargin: 0, imageUri: "https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }),
                            react_1.default.createElement(HandoutItem_1.default, { height: height, width: width, type: "Cardiovascular and Covid19", price: 82, topMargin: 20, imageUri: "https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }),
                            react_1.default.createElement(HandoutItem_1.default, { height: height, width: width, type: "Cardiovascular and Covid19", price: 82, topMargin: 20, imageUri: "https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" })))))));
    };
    return Category;
}(react_1.Component));
exports.Category = Category;
