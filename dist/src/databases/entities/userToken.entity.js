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
exports.UserToken = void 0;
const typeorm_1 = require("typeorm");
let UserToken = class UserToken extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'token' }),
    __metadata("design:type", String)
], UserToken.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expired' }),
    __metadata("design:type", String)
], UserToken.prototype, "expired", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userId' }),
    __metadata("design:type", Number)
], UserToken.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deviceInfo' }),
    __metadata("design:type", String)
], UserToken.prototype, "deviceInfo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isActive' }),
    __metadata("design:type", Number)
], UserToken.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", Date)
], UserToken.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", Date)
], UserToken.prototype, "updatedAt", void 0);
UserToken = __decorate([
    (0, typeorm_1.Entity)('userToken')
], UserToken);
exports.UserToken = UserToken;
//# sourceMappingURL=userToken.entity.js.map