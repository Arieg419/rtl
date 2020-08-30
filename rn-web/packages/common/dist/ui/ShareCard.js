"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
    },
    card: {
        width: "100%",
        borderRadius: 10,
        borderColor: "lightgray",
        backgroundColor: "#ecf0f1",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
    },
    h1: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#000",
        margin: 10,
    },
    body: {
        color: "#000",
        paddingHorizontal: 10,
        textAlign: "justify",
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },
    thumb: {
        width: 100,
        height: 100,
        marginTop: 20,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    shareBtn: {
        margin: 20,
        backgroundColor: "#FE7371",
        padding: 10,
        width: "80%",
        borderRadius: 20,
    },
    shareTxt: {
        fontSize: 20,
        color: "#fff",
        alignSelf: "center",
    },
});
exports.ShareCard = function (props) {
    var ShareFn = function () { return __awaiter(_this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, react_native_1.Share.share({
                            message: "\n        If you are planning to build a camera app using expo camera SDK, you have came to the right place.\n        In this article we\u2019re going to explore the React Native Camera Expo in multiple ways.\n        And I will try my best to make it a full in depth guide with examples, for future references.",
                            title: "React Native Camera Expo Example",
                            url: "https://reactnativemaster.com/react-native-camera-expo-example/",
                        })];
                case 1:
                    result = _a.sent();
                    if (result.action === react_native_1.Share.sharedAction) {
                        alert("Post Shared");
                    }
                    else if (result.action === react_native_1.Share.dismissedAction) {
                        // dismissed
                        alert("Post cancelled");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    alert(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.View, { style: styles.card },
            React.createElement(react_native_1.Image, { style: styles.thumb, source: {
                    uri: "https://images.squarespace-cdn.com/content/v1/5d2501c14c57720001ff2b07/1565816227012-UMYL9OXSVM1BMNYWHHFU/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/circle-cropped.png?format=100w",
                } }),
            React.createElement(react_native_1.Text, { style: styles.h1 }, "Podcast summaries with \u2764\uFE0F"),
            React.createElement(react_native_1.Text, { style: styles.body }, "Offal austin distillery hella aesthetic celiac actually listicle artisan poutine four loko. Sartorial disrupt small batch, trust fund seitan gochujang meh PBR&B mustache kinfolk fixie marfa. Subway tile vegan lomo whatever tumblr. Chia gluten-free chartreuse mixtape poke pickled wolf bitters coloring book.."),
            React.createElement(react_native_1.TouchableOpacity, { style: styles.shareBtn, onPress: function () { return props.onPress(); } },
                React.createElement(react_native_1.Text, { style: styles.shareTxt }, "Get Started")))));
};
