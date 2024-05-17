export declare class listAllProductDto {
    page: number;
    limit: number;
    search: string;
}
export declare class getDetailProductDto {
    ProductId: number;
}
export declare class categoryDto {
    category: string;
}
export declare class typeDto {
    type: string;
}
export declare class brandDto {
    brand: string;
}
export declare class priceDto {
    price: number;
}
export declare class filterProductDto {
    page: number;
    limit: number;
    search: string;
    category: categoryDto[];
    type: typeDto[];
    brand: brandDto[];
}
