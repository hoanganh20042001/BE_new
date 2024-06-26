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
exports.Review = void 0;
const typeorm_1 = require("typeorm");
let Review = class Review extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Review.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'content', nullable: true }),
    __metadata("design:type", String)
], Review.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'conDate', nullable: true }),
    __metadata("design:type", Date)
], Review.prototype, "conDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'value', nullable: true }),
    __metadata("design:type", Number)
], Review.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'productId', nullable: true }),
    __metadata("design:type", Number)
], Review.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userId', nullable: true }),
    __metadata("design:type", Number)
], Review.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", Date)
], Review.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", Date)
], Review.prototype, "updatedAt", void 0);
Review = __decorate([
    (0, typeorm_1.Entity)('review')
], Review);
exports.Review = Review;
//# sourceMappingURL=review.entity.js.map