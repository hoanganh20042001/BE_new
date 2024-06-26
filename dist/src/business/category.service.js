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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("../dao/category.repository");
let CategoryService = class CategoryService {
    constructor(CategoryRepository) {
        this.CategoryRepository = CategoryRepository;
    }
    async createCategory(input) {
        try {
            const newCategory = this.CategoryRepository.create(input);
            return await newCategory.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllCategory(payload) {
        const { search, limit, page } = payload;
        const listCategory = this.CategoryRepository
            .createQueryBuilder('b')
            .select('b.*')
            .addSelect('(ROW_NUMBER() OVER (ORDER BY b.id))', 'row_number')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listCategory.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listCategory.getRawMany(),
                listCategory.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailCategory(payload) {
        const { CategoryId } = payload;
        const Category = await this.CategoryRepository.findOne(CategoryId);
        return Category;
    }
    async updateCategory(payload) {
        const findCategoryById = await this.CategoryRepository.findOne(payload.categoryId);
        if (!findCategoryById) {
            throw new common_1.BadRequestException("Category_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findCategoryById), payload);
        return await this.CategoryRepository.save(updatedItem);
    }
    async deleteCategory(payload) {
        const { CategoryId } = payload;
        const Category = await this.CategoryRepository.findOne(CategoryId);
        if (!Category) {
            throw new common_1.BadRequestException("Category_is_not_exist");
        }
        await this.CategoryRepository.remove(Category);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map