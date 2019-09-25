"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var validator = new class_validator_1.Validator();
var IsNumber = (function () {
    function IsNumber() {
    }
    IsNumber.prototype.validate = function (obj, args) {
        return validator.isNumber(obj);
    };
    IsNumber.prototype.defaultMessage = function (args) {
        return args.property + " must be number.";
    };
    IsNumber = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'IS_NUMBER', async: false })
    ], IsNumber);
    return IsNumber;
}());
exports.IsNumber = IsNumber;
//# sourceMappingURL=IsNumber.js.map