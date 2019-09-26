"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var LakeelCommerceCheck = (function () {
    function LakeelCommerceCheck() {
    }
    LakeelCommerceCheck.prototype.validate = function (obj, args) {
        var res = false;
        var validator = new class_validator_1.Validator();
        if (obj === 'VC000001') {
            console.log('objobjobj', obj);
            res = validator.isString(obj);
        }
        return res;
    };
    LakeelCommerceCheck.prototype.defaultMessage = function (args) {
        console.log('argsargs', args);
        return args.property + " must be string.";
    };
    LakeelCommerceCheck = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'LAKEEL_COMMERCE_CHECK', async: false })
    ], LakeelCommerceCheck);
    return LakeelCommerceCheck;
}());
exports.LakeelCommerceCheck = LakeelCommerceCheck;
//# sourceMappingURL=LakeelCommerceCheck.js.map