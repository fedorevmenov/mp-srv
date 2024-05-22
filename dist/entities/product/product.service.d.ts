import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    getAllProducts(): Promise<Product[]>;
    getProductData(id: number): Promise<Product>;
    createProduct(productData: any): Promise<Product[]>;
    updateProductData(id: number, body: any): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: number): Promise<import("typeorm").DeleteResult>;
}
