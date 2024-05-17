"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FileUploadDto = exports.updateProductDto = exports.createProductDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var createProductDto = /** @class */ (function () {
    function createProductDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], createProductDto.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], createProductDto.prototype, "discount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], createProductDto.prototype, "categoryId");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], createProductDto.prototype, "typeId");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], createProductDto.prototype, "quantity");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], createProductDto.prototype, "price");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], createProductDto.prototype, "brandId");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], createProductDto.prototype, "description");
    return createProductDto;
}());
exports.createProductDto = createProductDto;
var updateProductDto = /** @class */ (function () {
    function updateProductDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], updateProductDto.prototype, "ProductId");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "image");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "discount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "categoryId");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "typeId");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "brandId");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "quantity");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "price");
    __decorate([
        (0, swagger_1.ApiProperty)({ "default": 'AVAILABLE' }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "status");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "date");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], updateProductDto.prototype, "description");
    return updateProductDto;
}());
exports.updateProductDto = updateProductDto;
var FileUploadDto = /** @class */ (function () {
    function FileUploadDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' })
    ], FileUploadDto.prototype, "file");
    return FileUploadDto;
}());
exports.FileUploadDto = FileUploadDto;
