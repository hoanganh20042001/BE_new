"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProductDto = exports.priceDto = exports.brandDto = exports.typeDto = exports.categoryDto = exports.getDetailProductDto = exports.listAllProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class listAllProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1, required: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], listAllProductDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10, required: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], listAllProductDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], listAllProductDto.prototype, "search", void 0);
exports.listAllProductDto = listAllProductDto;
class getDetailProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], getDetailProductDto.prototype, "ProductId", void 0);
exports.getDetailProductDto = getDetailProductDto;
class categoryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], categoryDto.prototype, "category", void 0);
exports.categoryDto = categoryDto;
class typeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], typeDto.prototype, "type", void 0);
exports.typeDto = typeDto;
class brandDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], brandDto.prototype, "brand", void 0);
exports.brandDto = brandDto;
class priceDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], priceDto.prototype, "price", void 0);
exports.priceDto = priceDto;
class filterProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1, required: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], filterProductDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10, required: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], filterProductDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], filterProductDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [categoryDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], filterProductDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [typeDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], filterProductDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [brandDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], filterProductDto.prototype, "brand", void 0);
exports.filterProductDto = filterProductDto;
//# sourceMappingURL=list-all-product-dto.dto.js.map