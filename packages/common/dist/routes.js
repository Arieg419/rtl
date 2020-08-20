"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Home_1 = require("./modules/Home");
var Schema_1 = require("./modules/Schema");
var Tutorials_1 = require("./modules/Tutorials");
var index_1 = require("./router/index");
exports.Routes = function () {
    return (react_1.default.createElement(index_1.Router, null,
        react_1.default.createElement(index_1.Switch, null,
            react_1.default.createElement(index_1.Route, { exact: true, path: "/", component: Home_1.Home }),
            react_1.default.createElement(index_1.Route, { exact: true, path: "/tutorials", component: Tutorials_1.Tutorials }),
            react_1.default.createElement(index_1.Route, { exact: true, path: "schema", component: Schema_1.Schema }))));
};
