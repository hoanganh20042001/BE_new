"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.updateStatusPayDto = exports.updatePayDto = exports.createPayDto = exports.orderItemDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var orderItemDto = /** @class */ (function () {
    function orderItemDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], orderItemDto.prototype, "orderId");
    return orderItemDto;
}());
exports.orderItemDto = orderItemDto;
var createPayDto = /** @class */ (function () {
    function createPayDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], createPayDto.prototype, "userId");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], createPayDto.prototype, "status");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [orderItemDto] }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true })
    ], createPayDto.prototype, "orderItems");
    return createPayDto;
}());
exports.createPayDto = createPayDto;
var updatePayDto = /** @class */ (function () {
    function updatePayDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], updatePayDto.prototype, "PayId");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], updatePayDto.prototype, "accountNumber");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], updatePayDto.prototype, "bankName");
    return updatePayDto;
}());
exports.updatePayDto = updatePayDto;
var updateStatusPayDto = /** @class */ (function () {
    function updateStatusPayDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], updateStatusPayDto.prototype, "PayId");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], updateStatusPayDto.prototype, "status");
    return updateStatusPayDto;
}());
exports.updateStatusPayDto = updateStatusPayDto;
