"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.forgetPassDto = exports.SigninUserDto = exports.SigninDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var SigninDto = /** @class */ (function () {
    function SigninDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], SigninDto.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], SigninDto.prototype, "passWord");
    return SigninDto;
}());
exports.SigninDto = SigninDto;
var SigninUserDto = /** @class */ (function () {
    function SigninUserDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], SigninUserDto.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], SigninUserDto.prototype, "passWord");
    return SigninUserDto;
}());
exports.SigninUserDto = SigninUserDto;
var forgetPassDto = /** @class */ (function () {
    function forgetPassDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], forgetPassDto.prototype, "email");
    return forgetPassDto;
}());
exports.forgetPassDto = forgetPassDto;
