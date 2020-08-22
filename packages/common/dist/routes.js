"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Learn_1 = require("./modules/Learn");
var Home_1 = require("./modules/Home");
var Category_1 = require("./modules/Category");
var router_1 = require("./router");
exports.Routes = function () {
    return (react_1.default.createElement(router_1.Router, null,
        react_1.default.createElement(router_1.Switch, null,
            react_1.default.createElement(router_1.Route, { exact: true, path: "/", component: Home_1.Home }),
            react_1.default.createElement(router_1.Route, { exact: true, path: "/learn", component: Learn_1.Learn }),
            react_1.default.createElement(router_1.Route, { exact: true, path: "/learn/:category", component: Category_1.Category }),
            react_1.default.createElement(router_1.Route, { exact: true, path: "/learn/:category/:handout", component: Learn_1.Learn }))));
};
