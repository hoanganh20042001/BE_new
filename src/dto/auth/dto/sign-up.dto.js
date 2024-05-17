"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.resetPassword = exports.confirmationInput = exports.SignupDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var SignupDto = /** @class */ (function () {
    function SignupDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], SignupDto.prototype, "fullName");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], SignupDto.prototype, "passWord");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], SignupDto.prototype, "identity");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsString)()
    ], SignupDto.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsString)()
    ], SignupDto.prototype, "phoneNumber");
    __decorate([
        (0, swagger_1.ApiProperty)({ "default": 2 }),
        (0, class_validator_1.IsNumber)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsOptional)()
    ], SignupDto.prototype, "roleId");
    return SignupDto;
}());
exports.SignupDto = SignupDto;
var confirmationInput = /** @class */ (function () {
    function confirmationInput() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsString)()
    ], confirmationInput.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, swagger_1.ApiProperty)()
    ], confirmationInput.prototype, "code");
    return confirmationInput;
}());
exports.confirmationInput = confirmationInput;
var resetPassword = /** @class */ (function () {
    function resetPassword() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsString)()
    ], resetPassword.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], resetPassword.prototype, "passWord");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], resetPassword.prototype, "repassWord");
    return resetPassword;
}());
exports.resetPassword = resetPassword;
