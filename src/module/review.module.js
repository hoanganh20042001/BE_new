"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReviewModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var review_repository_1 = require("../dao/review.repository");
var review_service_1 = require("../business/review.service");
var review_controller_1 = require("../service /review.controller");
var ReviewModule = /** @class */ (function () {
    function ReviewModule() {
    }
    ReviewModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([
                    review_repository_1.ReviewRepository
                ])],
            controllers: [review_controller_1.ReviewController],
            providers: [review_service_1.ReviewService]
        })
    ], ReviewModule);
    return ReviewModule;
}());
exports.ReviewModule = ReviewModule;
