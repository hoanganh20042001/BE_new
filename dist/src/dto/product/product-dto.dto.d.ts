export declare class createProductDto {
    name: string;
    discount: number;
    categoryId: number;
    typeId: number;
    quantity: number;
    price: number;
    brandId: number;
    description: string;
}
export declare class updateProductDto {
    productId: number;
    name: string;
    image: string;
    discount: number;
    categoryId: number;
    typeId: number;
    brandId: number;
    quantity: number;
    price: number;
    status: string;
    date: Date;
    description: string;
}
export declare class FileUploadDto {
    file: any;
}
