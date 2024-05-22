import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import {Repository} from "typeorm"

import {genSalt, hash} from "bcrypt"
import { updateUserDto } from "./dto/updateProduct.dto";



@Injectable()
export class ProductService{

    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ){}

    public async getAllProducts(){
        return await this.productRepository.find()
    }

    public async getProductData( id: number){
        return await this.productRepository.findOne({where:{id}})
    }

    async createProduct(productData: any) {
        const newProduct = this.productRepository.create({ ...productData })
        return await this.productRepository.save(newProduct)
      }

    public async updateProductData(id: number, body:any){
        return await this.productRepository.update({id}, body)

    }

    public async deleteProduct(id: number){
        return await this.productRepository.delete(id)
    }

}

