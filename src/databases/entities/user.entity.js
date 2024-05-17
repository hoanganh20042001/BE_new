"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'userName' })
    ], User.prototype, "userName");
    __decorate([
        (0, typeorm_1.Column)({ name: 'passWord' })
    ], User.prototype, "passWord");
    __decorate([
        (0, typeorm_1.Column)({ name: 'code' })
    ], User.prototype, "code");
    __decorate([
        (0, typeorm_1.Column)({ name: 'forgetPassCode' })
    ], User.prototype, "forgetPassCode");
    __decorate([
        (0, typeorm_1.Column)({ name: 'roleId', "default": 2 })
    ], User.prototype, "roleId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'fullName' })
    ], User.prototype, "fullName");
    __decorate([
        (0, typeorm_1.Column)({ name: 'phoneNumber' })
    ], User.prototype, "phoneNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'email' })
    ], User.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({ name: 'addressId' })
    ], User.prototype, "addressId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'isActive', "default": 0 })
    ], User.prototype, "isActive");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' })
    ], User.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' })
    ], User.prototype, "updatedAt");
    User = __decorate([
        (0, typeorm_1.Entity)('user')
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
