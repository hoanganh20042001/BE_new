"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.getCostDto = exports.listPayByUserIdDto = exports.getDetailPayDto = exports.listPayByStatusDto = exports.listAllPayDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var pay_dto_dto_1 = require("./pay-dto.dto");
var listAllPayDto = /** @class */ (function () {
    function listAllPayDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], listAllPayDto.prototype, "search");
    return listAllPayDto;
}());
exports.listAllPayDto = listAllPayDto;
var listPayByStatusDto = /** @class */ (function () {
    function listPayByStatusDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], listPayByStatusDto.prototype, "status");
    return listPayByStatusDto;
}());
exports.listPayByStatusDto = listPayByStatusDto;
var getDetailPayDto = /** @class */ (function () {
    function getDetailPayDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], getDetailPayDto.prototype, "PayId");
    return getDetailPayDto;
}());
exports.getDetailPayDto = getDetailPayDto;
var listPayByUserIdDto = /** @class */ (function () {
    function listPayByUserIdDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], listPayByUserIdDto.prototype, "userId");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], listPayByUserIdDto.prototype, "search");
    return listPayByUserIdDto;
}());
exports.listPayByUserIdDto = listPayByUserIdDto;
var getCostDto = /** @class */ (function () {
    function getCostDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], getCostDto.prototype, "discountId");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [pay_dto_dto_1.orderItemDto] }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true })
    ], getCostDto.prototype, "orderItems");
    return getCostDto;
}());
exports.getCostDto = getCostDto;
