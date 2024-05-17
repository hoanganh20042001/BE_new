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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("../dao/product.repository");
const category_repository_1 = require("../dao/category.repository");
const brand_repository_1 = require("../dao/brand.repository");
const type_repository_1 = require("../dao/type.repository");
const minio_service_1 = require("../minio/minio.service");
let ProductService = class ProductService {
    constructor(productRepository, brandRepository, typeRepository, categoryRepository, minioService) {
        this.productRepository = productRepository;
        this.brandRepository = brandRepository;
        this.typeRepository = typeRepository;
        this.categoryRepository = categoryRepository;
        this.minioService = minioService;
    }
    async createProduct(input, url) {
        try {
            const newProduct = this.productRepository.create(input);
            await newProduct.save();
            let discountedPrice = 0;
            discountedPrice = ((100 - newProduct.discount) * newProduct.price) / 100;
            newProduct.discountedPrice = discountedPrice;
            newProduct.image = url;
            return await newProduct.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllProduct(payload) {
        const { search, limit, page } = payload;
        const listProduct = this.productRepository
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
            listProduct.andWhere('( b.name LIKE :search OR b.description LIKE :search OR t.name LIKE :search OR br.name LIKE :search OR c.name LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listProduct.getRawMany(),
                listProduct.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailProduct(payload) {
        const { ProductId } = payload;
        const Product = await this.productRepository
            .createQueryBuilder('b')
            .select(['b.*',
            't.name as type',
            'br.name as brand',
            'c.name as category'
        ])
            .leftJoin('type', 't', 'b.typeId = t.id')
            .leftJoin('brand', 'br', 'b.brandId = br.id')
            .leftJoin('category', 'c', 'b.categoryId = c.id')
            .where('b.id = :id', { id: ProductId }).getRawOne();
        return Product;
    }
    async updateProduct(payload, url) {
        console.log(payload);
        const findProductById = await this.productRepository.findOne({ id: payload.productId });
        console.log(findProductById);
        this.minioService.deleteImage(findProductById.image);
        if (!findProductById) {
            throw new common_1.BadRequestException("Product_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findProductById), payload);
        await this.productRepository.save(updatedItem);
        let discountedPrice = 0;
        if (findProductById.discount < 100) {
            discountedPrice = ((findProductById.discount + 100) * findProductById.price) / 100;
        }
        else {
            discountedPrice = findProductById.discount + findProductById.price;
        }
        findProductById.discountedPrice = discountedPrice;
        findProductById.image = url;
        return await findProductById.save();
    }
    async deleteProduct(payload) {
        const { ProductId } = payload;
        const Product = await this.productRepository.findOne(ProductId);
        if (!Product) {
            throw new common_1.BadRequestException("Product_is_not_exist");
        }
        await this.productRepository.remove(Product);
        return { status: 200, message: 'Xóa thành công!' };
    }
    async filterProduct(payload) {
        const names = payload.type;
        console.log(payload.type);
        const types = await this.typeRepository.createQueryBuilder("t")
            .where("t.name IN (:...names)", { names })
            .getRawMany();
        console.log(types);
        console.log(types);
        const listProduct = this.productRepository
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
            listProduct.andWhere("t.name IN (:...types)", { types });
            console.log(2);
        }
        if (Array.isArray(payload.category) && payload.category.length > 0) {
            listProduct.andWhere("c.name IN (:...names)", { names: payload.category });
            console.log(3);
        }
        try {
            const [list, count] = await Promise.all([
                listProduct.getRawMany(),
                listProduct.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        brand_repository_1.BrandRepository,
        type_repository_1.TypeRepository,
        category_repository_1.CategoryRepository,
        minio_service_1.MinioService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map