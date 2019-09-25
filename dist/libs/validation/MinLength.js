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
var MinLength = (function () {
    function MinLength() {
    }
    MinLength.prototype.validate = function (text, args) {
        return validator.minLength(text, args.constraints[0]);
    };
    MinLength.prototype.defaultMessage = function (args) {
        return "A field '" + args.property + "' is too short. Min length is (" + args.constraints[0] + ").";
    };
    MinLength = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'MIN_LENGTH_SHORT', async: false })
    ], MinLength);
    return MinLength;
}());
exports.MinLength = MinLength;
//# sourceMappingURL=MinLength.js.map