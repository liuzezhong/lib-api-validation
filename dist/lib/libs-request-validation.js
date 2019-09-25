"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
exports.Validator = class_validator_1.Validator;
exports.Validate = class_validator_1.Validate;
exports.validate = class_validator_1.validate;
exports.ValidationError = class_validator_1.ValidationError;
exports.ValidateNested = class_validator_1.ValidateNested;
var validator = new class_validator_1.Validator();
var HalfWidth = /** @class */ (function () {
    function HalfWidth() {
    }
    HalfWidth.prototype.validate = function (text, args) {
        return validator.isHalfWidth(text);
    };
    HalfWidth.prototype.defaultMessage = function (args) {
        return "A field " + args.property + " must contain only half-width character(s)";
    };
    HalfWidth = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'HALF_WITDH_CHARACTER_ONLY', async: false })
    ], HalfWidth);
    return HalfWidth;
}());
exports.HalfWidth = HalfWidth;
var IsArray = /** @class */ (function () {
    function IsArray() {
    }
    IsArray.prototype.validate = function (obj, args) {
        return validator.isArray(obj);
    };
    IsArray.prototype.defaultMessage = function (args) {
        return args.property + " must be array";
    };
    IsArray = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'IS_ARRAY', async: false })
    ], IsArray);
    return IsArray;
}());
exports.IsArray = IsArray;
var IsBoolean = /** @class */ (function () {
    function IsBoolean() {
    }
    IsBoolean.prototype.validate = function (obj, args) {
        return validator.isBoolean(obj);
    };
    IsBoolean.prototype.defaultMessage = function (args) {
        return args.property + " must be boolean";
    };
    IsBoolean = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'IS_BOOLEAN', async: false })
    ], IsBoolean);
    return IsBoolean;
}());
exports.IsBoolean = IsBoolean;
var IsNotEmpty = /** @class */ (function () {
    function IsNotEmpty() {
    }
    IsNotEmpty.prototype.validate = function (obj, args) {
        return validator.arrayMinSize(obj, 0);
    };
    IsNotEmpty.prototype.defaultMessage = function (args) {
        return args.property + " must not be empty";
    };
    IsNotEmpty = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'IS_NOT_EMPTY', async: false })
    ], IsNotEmpty);
    return IsNotEmpty;
}());
exports.IsNotEmpty = IsNotEmpty;
var IsNumber = /** @class */ (function () {
    function IsNumber() {
    }
    IsNumber.prototype.validate = function (obj, args) {
        return validator.isNumber(obj);
    };
    IsNumber.prototype.defaultMessage = function (args) {
        return args.property + " must be number";
    };
    IsNumber = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'IS_NUMBER', async: false })
    ], IsNumber);
    return IsNumber;
}());
exports.IsNumber = IsNumber;
var IsObject = /** @class */ (function () {
    function IsObject() {
    }
    IsObject.prototype.validate = function (obj, args) {
        return typeof obj === 'object';
    };
    IsObject.prototype.defaultMessage = function (args) {
        return args.property + " must be object";
    };
    IsObject = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'IS_OBJECT', async: false })
    ], IsObject);
    return IsObject;
}());
exports.IsObject = IsObject;
var IsString = /** @class */ (function () {
    function IsString() {
    }
    IsString.prototype.validate = function (obj, args) {
        return validator.isString(obj);
    };
    IsString.prototype.defaultMessage = function (args) {
        return args.property + " must be string";
    };
    IsString = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'IS_STRING', async: false })
    ], IsString);
    return IsString;
}());
exports.IsString = IsString;
var MaxLength = /** @class */ (function () {
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
var MinLength = /** @class */ (function () {
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
var Required = /** @class */ (function () {
    function Required() {
    }
    Required.prototype.validate = function (obj, args) {
        return validator.isNotEmpty(obj);
    };
    Required.prototype.defaultMessage = function (args) {
        return "A field " + args.property + " is required.";
    };
    Required = __decorate([
        class_validator_1.ValidatorConstraint({ name: 'REQUIRED', async: false })
    ], Required);
    return Required;
}());
exports.Required = Required;
//# sourceMappingURL=libs-request-validation.js.map