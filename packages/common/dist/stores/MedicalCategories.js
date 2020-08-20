"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var react_1 = require("react");
var MedicalCategories = /** @class */ (function () {
    function MedicalCategories() {
    }
    __decorate([
        mobx_1.observable
    ], MedicalCategories.prototype, "kidey", void 0);
    __decorate([
        mobx_1.observable
    ], MedicalCategories.prototype, "liver", void 0);
    __decorate([
        mobx_1.observable
    ], MedicalCategories.prototype, "heart", void 0);
    __decorate([
        mobx_1.observable
    ], MedicalCategories.prototype, "pancreas", void 0);
    __decorate([
        mobx_1.observable
    ], MedicalCategories.prototype, "covid", void 0);
    return MedicalCategories;
}());
exports.MedicalCategoriesContext = react_1.createContext(new MedicalCategories());
