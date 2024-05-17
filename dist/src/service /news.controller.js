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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../dto/auth/guards/auth.guard");
const list_all_news_dto_dto_1 = require("../dto/news/list-all-news-dto.dto");
const news_dto_dto_1 = require("../dto/news/news-dto.dto");
const news_service_1 = require("../business/news.service");
const platform_express_1 = require("@nestjs/platform-express");
const minio_service_1 = require("../minio/minio.service");
let NewsController = class NewsController {
    constructor(NewsService, minioService) {
        this.NewsService = NewsService;
        this.minioService = minioService;
    }
    async createProduct(file, payload) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        const bucketName = 'news';
        const objectName = file.originalname;
        const url = await this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg');
        return this.NewsService.createNew(payload, url);
    }
    async addLike(payload) {
        return this.NewsService.addLike(payload);
    }
    async addView(payload) {
        return this.NewsService.addView(payload);
    }
    async listAllNews(payload) {
        return this.NewsService.listAllNews(payload);
    }
    async getDetailNews(payload) {
        return this.NewsService.getDetailNews(payload);
    }
    async updateNews(payload) {
        return await this.NewsService.updateNews(payload);
    }
    async deleteNews(payload) {
        return this.NewsService.deleteNews(payload);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'create',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'File to upload'
                },
                title: {
                    type: 'string',
                    description: 'Name'
                },
                content: {
                    type: 'string',
                    description: 'content'
                }
            },
            required: ['file']
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, news_dto_dto_1.createNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('add-like'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_dto_dto_1.addLikeDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "addLike", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('add-view'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_dto_dto_1.addViewDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "addView", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('list-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_news_dto_dto_1.listAllNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "listAllNews", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_news_dto_dto_1.getDetailNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "getDetailNews", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_dto_dto_1.updateNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "updateNews", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_news_dto_dto_1.getDetailNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "deleteNews", null);
NewsController = __decorate([
    (0, swagger_1.ApiTags)('news'),
    (0, common_1.Controller)('news'),
    __metadata("design:paramtypes", [news_service_1.NewsService,
        minio_service_1.MinioService])
], NewsController);
exports.NewsController = NewsController;
//# sourceMappingURL=news.controller.js.map