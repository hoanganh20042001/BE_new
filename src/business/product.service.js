"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.ProductService = void 0;
var common_1 = require("@nestjs/common");
var ProductService = /** @class */ (function () {
    function ProductService(productRepository, brandRepository, typeRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.brandRepository = brandRepository;
        this.typeRepository = typeRepository;
        this.categoryRepository = categoryRepository;
    }
    ProductService.prototype.createProduct = function (input, url) {
        return __awaiter(this, void 0, void 0, function () {
            var newProduct, discountedPrice, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        newProduct = this.productRepository.create(input);
                        return [4 /*yield*/, newProduct.save()];
                    case 1:
                        _a.sent();
                        discountedPrice = 0;
                        discountedPrice = ((100 - newProduct.discount) * newProduct.price) / 100;
                        newProduct.discountedPrice = discountedPrice;
                        newProduct.image = url;
                        return [4 /*yield*/, newProduct.save()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        throw new common_1.BadRequestException('Có lỗi xảy ra!');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.prototype.listAllProduct = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var search, limit, page, listProduct, _a, list, count, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        search = payload.search, limit = payload.limit, page = payload.page;
                        listProduct = this.productRepository
                            .createQueryBuilder('b')
                            .select(['b.*',
                            't.name as type',
                            'br.name as brand',
                            'c.name as category'
                        ])
                            .leftJoin('type', 't', 'b.typeId = t.id')
                            .leftJoin('brand', 'br', 'b.brandId = br.id')
                            .leftJoin('category', 'c', 'b.categoryId = c.id')
                            .orderBy('b.id', 'ASC')
                            .limit(limit)
                            .offset(limit * (page - 1));
                        if (search) {
                            //viết hết tất car các trường cần tìm kiếm
                            listProduct.andWhere('( b.name LIKE :search OR b.description LIKE :search OR t.name LIKE :search OR br.name LIKE :search OR c.name LIKE :search )', { search: "%".concat(search, "%") });
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([
                                listProduct.getRawMany(),
                                listProduct.getCount()
                            ])];
                    case 2:
                        _a = _b.sent(), list = _a[0], count = _a[1];
                        return [2 /*return*/, { list: list, count: count }];
                    case 3:
                        error_2 = _b.sent();
                        throw new common_1.BadRequestException('Có lỗi xảy ra!');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.prototype.getDetailProduct = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var ProductId, Product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ProductId = payload.ProductId;
                        return [4 /*yield*/, this.productRepository
                                .createQueryBuilder('b')
                                .select(['b.*',
                                't.name as type',
                                'br.name as brand',
                                'c.name as category'
                            ])
                                .leftJoin('type', 't', 'b.typeId = t.id')
                                .leftJoin('brand', 'br', 'b.brandId = br.id')
                                .leftJoin('category', 'c', 'b.categoryId = c.id')
                                .where('b.id = :id', { id: ProductId }).getRawOne()];
                    case 1:
                        Product = _a.sent();
                        return [2 /*return*/, Product];
                }
            });
        });
    };
    ProductService.prototype.updateProduct = function (payload, url) {
        return __awaiter(this, void 0, void 0, function () {
            var findProductById, updatedItem, discountedPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productRepository.findOne(payload.ProductId)];
                    case 1:
                        findProductById = _a.sent();
                        if (!findProductById) {
                            throw new common_1.BadRequestException("Product_is_not_exist");
                        }
                        updatedItem = __assign(__assign({}, findProductById), payload);
                        return [4 /*yield*/, this.productRepository.save(updatedItem)];
                    case 2:
                        _a.sent();
                        discountedPrice = 0;
                        if (findProductById.discount < 100) {
                            discountedPrice = ((findProductById.discount + 100) * findProductById.price) / 100;
                        }
                        else {
                            discountedPrice = findProductById.discount + findProductById.price;
                        }
                        findProductById.discountedPrice = discountedPrice;
                        findProductById.image = url;
                        return [4 /*yield*/, findProductById.save()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductService.prototype.deleteProduct = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var ProductId, Product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ProductId = payload.ProductId;
                        return [4 /*yield*/, this.productRepository.findOne(ProductId)];
                    case 1:
                        Product = _a.sent();
                        if (!Product) {
                            throw new common_1.BadRequestException("Product_is_not_exist");
                        }
                        return [4 /*yield*/, this.productRepository.remove(Product)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { status: 200, message: 'Xóa thành công!' }];
                }
            });
        });
    };
    ProductService.prototype.filterProduct = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var names, types, listProduct, _a, list, count, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        names = payload.type;
                        console.log(payload.type);
                        return [4 /*yield*/, this.typeRepository.createQueryBuilder("t")
                                .where("t.name IN (:...names)", { names: names })
                                .getRawMany()];
                    case 1:
                        types = _b.sent();
                        console.log(types);
                        console.log(types); // Logging the fetched types
                        listProduct = this.productRepository
                            .createQueryBuilder('b')
                            .select([
                            'b.*',
                            't.name as type',
                            'br.name as brand',
                            'c.name as category'
                        ])
                            .leftJoin('type', 't', 'b.typeId = t.id')
                            .leftJoin('brand', 'br', 'b.brandId = br.id')
                            .leftJoin('category', 'c', 'b.categoryId = c.id');
                        if (Array.isArray(payload.brand) && payload.brand.length > 0) {
                            listProduct.andWhere("br.name IN (:...names)", { names: payload.brand });
                            console.log(1);
                        }
                        if (payload.type.length > 0) {
                            listProduct.andWhere("t.name IN (:...types)", { types: types });
                            console.log(2);
                        }
                        if (Array.isArray(payload.category) && payload.category.length > 0) {
                            listProduct.andWhere("c.name IN (:...names)", { names: payload.category });
                            console.log(3);
                        }
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Promise.all([
                                listProduct.getRawMany(),
                                listProduct.getCount()
                            ])];
                    case 3:
                        _a = _b.sent(), list = _a[0], count = _a[1];
                        return [2 /*return*/, { list: list, count: count }];
                    case 4:
                        error_3 = _b.sent();
                        throw new common_1.BadRequestException('Có lỗi xảy ra!');
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductService = __decorate([
        (0, common_1.Injectable)()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
