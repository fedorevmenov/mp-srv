import { Controller, Get, Res, Req, Post, Put, Delete, Patch, UseInterceptors, Param, ParseIntPipe, Body, HttpCode, UploadedFile } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { Request, Response } from "express"
import { ProductService } from "./product.service"
import { getMulterOptions, renameUploadedFile } from '@helpers/fileUploader'
import { PRODUCTS_IMAGES_FOLDER_PATH } from '@consts/storagePaths'


@Controller('products')

export class ProductController{
    constructor(

       private readonly productService: ProductService
    ){}

    @Get('/')
    @HttpCode(200)
    async getAllProducts(){
        const products = await this.productService.getAllProducts()

        return  {
            status: 'ok',
            data: products
        }

    }

    @Get('/:id')
    @HttpCode(200)
    async getProduct(@Param ('id', ParseIntPipe) id:number){
        const productData = await this.productService.getProductData(id)
        return {status: 'ok', data: productData}
    }

    @Post('/')
    @HttpCode(201)
    @UseInterceptors(FileInterceptor('image', getMulterOptions('images/products')))
    async createProduct(
      @Body() body: any,
      @UploadedFile() image: Express.Multer.File,
    ) {
        console.log(111, image)
      const renamedFilename = renameUploadedFile(image.filename, PRODUCTS_IMAGES_FOLDER_PATH)
      await this.productService.createProduct({ ...body, image: renamedFilename })
      return { status: 'ok' }
    }

    @Put('/:id')
    @HttpCode(200)
    async updateProduct(
        @Param('id', ParseIntPipe) id: number,
        @Body() body:any
    ){
        this.productService.updateProductData(id, body)
        return {status: 'ok'}
    }

    @Delete('/:id')
    @HttpCode(200)
    async deleteProduct(@Param('id', ParseIntPipe) id: number,){
        this.productService.deleteProduct(id)
        return {status: 'ok'}
    }


}


