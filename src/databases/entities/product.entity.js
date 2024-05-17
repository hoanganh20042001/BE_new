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
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Product.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'name', nullable: true })
    ], Product.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ name: 'image', nullable: true })
    ], Product.prototype, "image");
    __decorate([
        (0, typeorm_1.Column)({ name: 'discount', nullable: true })
    ], Product.prototype, "discount");
    __decorate([
        (0, typeorm_1.Column)({ name: 'discountedPrice', "default": 0 })
    ], Product.prototype, "discountedPrice");
    __decorate([
        (0, typeorm_1.Column)({ name: 'categoryId', nullable: true })
    ], Product.prototype, "categoryId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'typeId', nullable: true })
    ], Product.prototype, "typeId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'brandId', nullable: true })
    ], Product.prototype, "brandId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'quantity', nullable: true })
    ], Product.prototype, "quantity");
    __decorate([
        (0, typeorm_1.Column)({ name: 'price', nullable: true })
    ], Product.prototype, "price");
    __decorate([
        (0, typeorm_1.Column)({ name: 'sold', nullable: true })
    ], Product.prototype, "sold");
    __decorate([
        (0, typeorm_1.Column)({ name: 'date', nullable: true })
    ], Product.prototype, "date");
    __decorate([
        (0, typeorm_1.Column)({ name: 'status', "default": 'AVAILABLE' })
    ], Product.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ name: 'description', nullable: true })
    ], Product.prototype, "description");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' })
    ], Product.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' })
    ], Product.prototype, "updatedAt");
    Product = __decorate([
        (0, typeorm_1.Entity)('product')
    ], Product);
    return Product;
}(typeorm_1.BaseEntity));
exports.Product = Product;
