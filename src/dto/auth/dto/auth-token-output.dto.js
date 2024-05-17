"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.saveTokenCodeDto = exports.RefreshTokenInput = exports.UserRefreshTokenClaims = exports.UserAccessTokenClaims = exports.AuthTokenOutput2 = exports.AuthTokenOutput = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var AuthTokenOutput = /** @class */ (function () {
    function AuthTokenOutput() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], AuthTokenOutput.prototype, "accessToken");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], AuthTokenOutput.prototype, "refreshToken");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], AuthTokenOutput.prototype, "user");
    return AuthTokenOutput;
}());
exports.AuthTokenOutput = AuthTokenOutput;
var AuthTokenOutput2 = /** @class */ (function () {
    function AuthTokenOutput2() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], AuthTokenOutput2.prototype, "accessToken");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], AuthTokenOutput2.prototype, "refreshToken");
    return AuthTokenOutput2;
}());
exports.AuthTokenOutput2 = AuthTokenOutput2;
var UserAccessTokenClaims = /** @class */ (function () {
    function UserAccessTokenClaims() {
    }
    __decorate([
        (0, class_transformer_1.Expose)()
    ], UserAccessTokenClaims.prototype, "id");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], UserAccessTokenClaims.prototype, "username");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], UserAccessTokenClaims.prototype, "role");
    return UserAccessTokenClaims;
}());
exports.UserAccessTokenClaims = UserAccessTokenClaims;
var UserRefreshTokenClaims = /** @class */ (function () {
    function UserRefreshTokenClaims() {
    }
    return UserRefreshTokenClaims;
}());
exports.UserRefreshTokenClaims = UserRefreshTokenClaims;
var RefreshTokenInput = /** @class */ (function () {
    function RefreshTokenInput() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, swagger_1.ApiProperty)()
    ], RefreshTokenInput.prototype, "refreshToken");
    return RefreshTokenInput;
}());
exports.RefreshTokenInput = RefreshTokenInput;
var saveTokenCodeDto = /** @class */ (function () {
    function saveTokenCodeDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, swagger_1.ApiProperty)()
    ], saveTokenCodeDto.prototype, "code");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, swagger_1.ApiProperty)()
    ], saveTokenCodeDto.prototype, "accessToken");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, swagger_1.ApiProperty)()
    ], saveTokenCodeDto.prototype, "refreshToken");
    return saveTokenCodeDto;
}());
exports.saveTokenCodeDto = saveTokenCodeDto;
