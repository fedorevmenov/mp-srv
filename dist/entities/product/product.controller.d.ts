/// <reference types="multer" />
import { ProductService } from "./product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): Promise<{
        status: string;
        data: import("./product.entity").Product[];
    }>;
    getProduct(id: number): Promise<{
        status: string;
        data: import("./product.entity").Product;
    }>;
    createProduct(body: any, image: Express.Multer.File): Promise<{
        status: string;
    }>;
    updateProduct(id: number, body: any): Promise<{
        status: string;
    }>;
    deleteProduct(id: number): Promise<{
        status: string;
    }>;
}
