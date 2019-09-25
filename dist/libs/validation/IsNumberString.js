"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var IsNumberString = (function () {
    function IsNumberString() {
    }
    IsNumberString.prototype.validate = function (obj, args) {
        var regex = new RegExp(/[0-9]/);
        return regex.test(obj);
    };
    IsNumberString.prototype.defaultMessage = function (args) {
        return args.property + " must be number.";
    };
    IsNumberString = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'IS_NUMBER_STRING', async: false })
    ], IsNumberString);
    return IsNumberString;
}());
exports.IsNumberString = IsNumberString;
//# sourceMappingURL=IsNumberString.js.map