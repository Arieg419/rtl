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
var Card_1 = require("./Card");
exports.WelcomeCard = function (_a) {
    var header = _a.header, onPress = _a.onPress;
    return (React.createElement(Card_1.Card, { onPress: onPress },
        React.createElement(react_native_1.Text, { style: {
                fontWeight: "bold",
                fontSize: 16,
                paddingTop: 10,
                paddingBottom: 10,
            } }, header),
        React.createElement(react_native_1.Text, null, "I'm baby vape tacos banh mi blog deep v. Gentrify bicycle rights whatever vinyl lomo knausgaard. Offal austin distillery hella aesthetic celiac actually listicle artisan poutine four loko. Sartorial disrupt small batch, trust fund seitan gochujang meh PBR&B mustache kinfolk fixie marfa. Subway tile vegan lomo whatever tumblr. Chia gluten-free chartreuse mixtape poke pickled wolf bitters coloring book.")));
};
