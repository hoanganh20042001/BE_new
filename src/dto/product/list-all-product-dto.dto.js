"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.filterProductDto = exports.priceDto = exports.brandDto = exports.typeDto = exports.categoryDto = exports.getDetailProductDto = exports.listAllProductDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var listAllProductDto = /** @class */ (function () {
    function listAllProductDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ "default": 1, required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1)
    ], listAllProductDto.prototype, "page");
    __decorate([
        (0, swagger_1.ApiProperty)({ "default": 10, required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1)
    ], listAllProductDto.prototype, "limit");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], listAllProductDto.prototype, "search");
    return listAllProductDto;
}());
exports.listAllProductDto = listAllProductDto;
var getDetailProductDto = /** @class */ (function () {
    function getDetailProductDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], getDetailProductDto.prototype, "ProductId");
    return getDetailProductDto;
}());
exports.getDetailProductDto = getDetailProductDto;
var categoryDto = /** @class */ (function () {
    function categoryDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return String; }),
        (0, class_validator_1.IsString)()
    ], categoryDto.prototype, "category");
    return categoryDto;
}());
exports.categoryDto = categoryDto;
var typeDto = /** @class */ (function () {
    function typeDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return String; }),
        (0, class_validator_1.IsString)()
    ], typeDto.prototype, "type");
    return typeDto;
}());
exports.typeDto = typeDto;
var brandDto = /** @class */ (function () {
    function brandDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return String; }),
        (0, class_validator_1.IsString)()
    ], brandDto.prototype, "brand");
    return brandDto;
}());
exports.brandDto = brandDto;
var priceDto = /** @class */ (function () {
    function priceDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], priceDto.prototype, "price");
    return priceDto;
}());
exports.priceDto = priceDto;
var filterProductDto = /** @class */ (function () {
    function filterProductDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ "default": 1, required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1)
    ], filterProductDto.prototype, "page");
    __decorate([
        (0, swagger_1.ApiProperty)({ "default": 10, required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1)
    ], filterProductDto.prototype, "limit");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], filterProductDto.prototype, "search");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [categoryDto] }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true })
    ], filterProductDto.prototype, "category");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [typeDto] }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true })
    ], filterProductDto.prototype, "type");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [brandDto] }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true })
    ], filterProductDto.prototype, "brand");
    return filterProductDto;
}());
exports.filterProductDto = filterProductDto;
