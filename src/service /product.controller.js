"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProductController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var auth_guard_1 = require("../dto/auth/guards/auth.guard");
var platform_express_1 = require("@nestjs/platform-express");
var ProductController = /** @class */ (function () {
    function ProductController(ProductService, minioService) {
        this.ProductService = ProductService;
        this.minioService = minioService;
    }
    ProductController.prototype.uploadFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var bucketName, objectName, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bucketName = 'test';
                        objectName = file.originalname;
                        return [4 /*yield*/, this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg')];
                    case 1:
                        url = _a.sent();
                        return [2 /*return*/, { url: url }];
                }
            });
        });
    };
    ProductController.prototype.createProduct = function (file, payload // Thay thế bằng DTO chính xác của bạn
    ) {
        return __awaiter(this, void 0, void 0, function () {
            var bucketName, objectName, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!file) {
                            throw new common_1.BadRequestException('No file uploaded');
                        }
                        bucketName = 'products';
                        objectName = file.originalname;
                        return [4 /*yield*/, this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg')];
                    case 1:
                        url = _a.sent();
                        return [2 /*return*/, this.ProductService.createProduct(payload, url)];
                }
            });
        });
    };
    ProductController.prototype.listAllProduct = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.ProductService.listAllProduct(payload)];
            });
        });
    };
    ProductController.prototype.getDetailProduct = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.ProductService.getDetailProduct(payload)];
            });
        });
    };
    ProductController.prototype.updateProduct = function (file, payload // Thay thế bằng DTO chính xác của bạn
    ) {
        return __awaiter(this, void 0, void 0, function () {
            var bucketName, objectName, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!file) {
                            throw new common_1.BadRequestException('No file uploaded');
                        }
                        bucketName = 'product';
                        objectName = file.originalname;
                        return [4 /*yield*/, this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg')];
                    case 1:
                        url = _a.sent();
                        return [2 /*return*/, this.ProductService.updateProduct(payload, url)];
                }
            });
        });
    };
    ProductController.prototype.deleteProduct = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.ProductService.deleteProduct(payload)];
            });
        });
    };
    ProductController.prototype.filterProduct = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.ProductService.filterProduct(payload)];
            });
        });
    };
    __decorate([
        (0, common_1.Post)('upload'),
        (0, swagger_1.ApiOperation)({ summary: 'Upload file' }),
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, swagger_1.ApiBody)({
            required: true,
            schema: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'name'
                    },
                    ethnicId: {
                        type: 'number',
                        description: 'id dân tộc'
                    },
                    priorityGroupId: {
                        type: 'number',
                        description: 'id đối tượng ưu tiên của học sinh'
                    }
                }
            }
        }),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
        __param(0, (0, common_1.UploadedFile)())
    ], ProductController.prototype, "uploadFile");
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
                    name: {
                        type: 'string',
                        description: 'Name'
                    },
                    discount: {
                        type: 'number',
                        description: 'Discount'
                    },
                    categoryId: {
                        type: 'number',
                        description: 'Category ID'
                    },
                    typeId: {
                        type: 'number',
                        description: 'Type ID'
                    },
                    quantityId: {
                        type: 'number',
                        description: 'Quantity ID'
                    },
                    price: {
                        type: 'number',
                        description: 'Price'
                    },
                    brandId: {
                        type: 'number',
                        description: 'Brand ID'
                    },
                    // date: {
                    //   type: 'string',
                    //   format: 'date',
                    //   description: 'Date'
                    // },
                    description: {
                        type: 'string',
                        description: 'Description'
                    }
                },
                required: ['file']
            }
        }),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
        (0, common_1.Post)('create'),
        __param(0, (0, common_1.UploadedFile)()),
        __param(1, (0, common_1.Body)())
    ], ProductController.prototype, "createProduct");
    __decorate([
        (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
        (0, swagger_1.ApiBearerAuth)(),
        (0, common_1.Get)('list-all'),
        __param(0, (0, common_1.Query)())
    ], ProductController.prototype, "listAllProduct");
    __decorate([
        (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
        (0, swagger_1.ApiBearerAuth)(),
        (0, common_1.Get)('detail'),
        __param(0, (0, common_1.Query)())
    ], ProductController.prototype, "getDetailProduct");
    __decorate([
        (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
        (0, swagger_1.ApiBearerAuth)(),
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, swagger_1.ApiBody)({
            description: 'update',
            schema: {
                type: 'object',
                properties: {
                    file: {
                        type: 'string',
                        format: 'binary',
                        description: 'File to upload'
                    },
                    payload: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'number',
                                description: 'id'
                            },
                            name: {
                                type: 'string',
                                description: 'Name'
                            },
                            discount: {
                                type: 'number',
                                description: 'Discount'
                            },
                            categoryId: {
                                type: 'number',
                                description: 'Category ID'
                            },
                            typeId: {
                                type: 'number',
                                description: 'Type ID'
                            },
                            quantityId: {
                                type: 'number',
                                description: 'Quantity ID'
                            },
                            price: {
                                type: 'number',
                                description: 'Price'
                            },
                            brandId: {
                                type: 'number',
                                description: 'Brand ID'
                            },
                            date: {
                                type: 'string',
                                format: 'date',
                                description: 'Date'
                            },
                            description: {
                                type: 'string',
                                description: 'Description'
                            },
                            status: {
                                type: 'string',
                                description: 'Description'
                            }
                        },
                        required: ['name']
                    }
                },
                required: ['file', 'payload']
            }
        }),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
        (0, common_1.Post)('update'),
        __param(0, (0, common_1.UploadedFile)()),
        __param(1, (0, common_1.Body)())
    ], ProductController.prototype, "updateProduct");
    __decorate([
        (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
        (0, swagger_1.ApiBearerAuth)(),
        (0, common_1.Post)('delete'),
        __param(0, (0, common_1.Query)())
    ], ProductController.prototype, "deleteProduct");
    __decorate([
        (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
        (0, swagger_1.ApiBearerAuth)(),
        (0, common_1.Get)('filter'),
        __param(0, (0, common_1.Query)())
    ], ProductController.prototype, "filterProduct");
    ProductController = __decorate([
        (0, swagger_1.ApiTags)('product'),
        (0, common_1.Controller)('product')
    ], ProductController);
    return ProductController;
}());
exports.ProductController = ProductController;
