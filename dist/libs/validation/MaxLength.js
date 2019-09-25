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
var MaxLength = (function () {
    function MaxLength() {
    }
    MaxLength.prototype.validate = function (text, args) {
        return validator.maxLength(text, args.constraints[0]);
    };
    MaxLength.prototype.defaultMessage = function (args) {
        return "A field " + args.property + " exceeds. Max length is (" + args.constraints[0] + ").";
    };
    MaxLength = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'MAX_LENGTH_EXCEEDED', async: false })
    ], MaxLength);
    return MaxLength;
}());
exports.MaxLength = MaxLength;
//# sourceMappingURL=MaxLength.js.map