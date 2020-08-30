"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
var react_native_1 = require("react-native");
function SearchList(props) {
    return (react_1.default.createElement(react_native_1.View, { style: {
            height: 80,
            backgroundColor: "#ccd6dd",
            justifyContent: "center",
            paddingHorizontal: 5,
        } },
        react_1.default.createElement(react_native_1.View, { style: {
                height: 50,
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center",
            } },
            react_1.default.createElement(react_native_1.View, { style: {
                    backgroundColor: "white",
                    borderBottomWidth: 1,
                    borderBottomColor: "#dddddd",
                } },
                react_1.default.createElement(react_native_1.View, { style: {
                        flexDirection: "row",
                        padding: 10,
                        paddingLeft: 0,
                        backgroundColor: "white",
                        marginHorizontal: 20,
                        shadowOffset: { width: 0, height: 0 },
                        shadowColor: "black",
                        shadowOpacity: 0.2,
                        elevation: 1,
                        marginTop: react_native_1.Platform.OS == "android" ? 30 : 10,
                    } },
                    react_1.default.createElement(FontAwesome_1.default, { name: "ios-search", size: 20, style: { marginRight: 10 } }),
                    react_1.default.createElement(react_native_1.TextInput, { underlineColorAndroid: "transparent", placeholder: "Try Cardiovascular", placeholderTextColor: "grey", style: {
                            flex: 1,
                            fontWeight: "700",
                            backgroundColor: "white",
                            fontSize: 16,
                        }, onChangeText: props.searchItems }))))));
}
exports.default = SearchList;
