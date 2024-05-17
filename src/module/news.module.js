"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewsModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var like_repository_1 = require("../dao/like.repository");
var news_repository_1 = require("../dao/news.repository");
var news_service_1 = require("../business/news.service");
var news_controller_1 = require("../service /news.controller");
var minio_service_1 = require("../minio/minio.service");
var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([
                    news_repository_1.NewsRepository, like_repository_1.LikeRepository
                ])],
            controllers: [news_controller_1.NewsController],
            providers: [news_service_1.NewsService,
                minio_service_1.MinioService,
            ]
        })
    ], NewsModule);
    return NewsModule;
}());
exports.NewsModule = NewsModule;
