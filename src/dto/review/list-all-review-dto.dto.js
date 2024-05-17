"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.getDetailReviewDto = exports.listReviewByProductIdDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var listReviewByProductIdDto = /** @class */ (function () {
    function listReviewByProductIdDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], listReviewByProductIdDto.prototype, "productId");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], listReviewByProductIdDto.prototype, "search");
    return listReviewByProductIdDto;
}());
exports.listReviewByProductIdDto = listReviewByProductIdDto;
var getDetailReviewDto = /** @class */ (function () {
    function getDetailReviewDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, class_validator_1.IsNumber)()
    ], getDetailReviewDto.prototype, "ReviewId");
    return getDetailReviewDto;
}());
exports.getDetailReviewDto = getDetailReviewDto;
