"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.addViewDto = exports.addLikeDto = exports.updateNewsDto = exports.createNewsDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var createNewsDto = /** @class */ (function () {
    function createNewsDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], createNewsDto.prototype, "title");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], createNewsDto.prototype, "content");
    return createNewsDto;
}());
exports.createNewsDto = createNewsDto;
var updateNewsDto = /** @class */ (function () {
    function updateNewsDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], updateNewsDto.prototype, "newsId");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], updateNewsDto.prototype, "title");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsOptional)()
    ], updateNewsDto.prototype, "newDate");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], updateNewsDto.prototype, "content");
    return updateNewsDto;
}());
exports.updateNewsDto = updateNewsDto;
var addLikeDto = /** @class */ (function () {
    function addLikeDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], addLikeDto.prototype, "newsId");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], addLikeDto.prototype, "userId");
    return addLikeDto;
}());
exports.addLikeDto = addLikeDto;
var addViewDto = /** @class */ (function () {
    function addViewDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], addViewDto.prototype, "newsId");
    return addViewDto;
}());
exports.addViewDto = addViewDto;
