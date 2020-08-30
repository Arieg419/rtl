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
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 110,
        borderRadius: 10,
        borderColor: "lightgray",
        borderWidth: 1,
        elevation: 10,
    },
    card: {
        width: "100%",
        borderRadius: 10,
        borderColor: "lightgray",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    listItem: {
        margin: 10,
        padding: 25,
        backgroundColor: "#ecf0f1",
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5,
    },
    h1: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#000",
        margin: 20,
    },
});
function Item(_a) {
    var item = _a.item;
    return (react_1.default.createElement(react_native_1.View, { style: styles.listItem },
        react_1.default.createElement(react_native_1.Image, { source: { uri: item.photo }, style: { width: 60, height: 60, borderRadius: 30 } }),
        react_1.default.createElement(react_native_1.View, { style: { alignItems: "center", flex: 1 } },
            react_1.default.createElement(react_native_1.Text, { numberOfLines: 1, style: { fontWeight: "bold" } }, item.topic),
            react_1.default.createElement(react_native_1.Text, { numberOfLines: 1 }, item.name),
            react_1.default.createElement(react_native_1.Text, { numberOfLines: 1 }, "Aired: 2/13/2020")),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: {
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
            } },
            react_1.default.createElement(react_native_1.Text, { style: { color: "#0085bd" } }, "Open"))));
}
var PodcastFlatlist = /** @class */ (function (_super) {
    __extends(PodcastFlatlist, _super);
    function PodcastFlatlist() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [
                {
                    name: "Episode 43",
                    link: "miyah.myles@gmail.com",
                    topic: "Covid 19",
                    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
                },
                {
                    name: "Episode 42",
                    link: "june.cha@gmail.com",
                    topic: "Cirrhosis",
                    photo: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                    name: "Episode 41",
                    link: "iida.niskanen@gmail.com",
                    topic: "Pancreatitis",
                    photo: "https://randomuser.me/api/portraits/women/68.jpg",
                },
                {
                    name: "Episode 41",
                    link: "renee.sims@gmail.com",
                    topic: "Lower GI Bleed",
                    photo: "https://randomuser.me/api/portraits/women/65.jpg",
                },
                {
                    name: "Episode 40",
                    link: "jonathan.nu\u00f1ez@gmail.com",
                    topic: "Atrial fibrillation",
                    photo: "https://randomuser.me/api/portraits/men/43.jpg",
                },
            ],
        };
        return _this;
    }
    PodcastFlatlist.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.Text, { style: styles.h1 }, "Listen to the Podcast\uD83D\uDC42\uD83C\uDFA7"),
            react_1.default.createElement(react_native_1.FlatList, { style: { flex: 1 }, data: this.state.data, renderItem: function (_a) {
                    var item = _a.item;
                    return react_1.default.createElement(Item, { item: item });
                }, keyExtractor: function (item) { return item.link; } })));
    };
    return PodcastFlatlist;
}(react_1.default.Component));
exports.default = PodcastFlatlist;
