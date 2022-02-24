import { Controller, Get , Post, Put, Delete, Body, Param} from '@nestjs/common';

import {CreateProductDto} from "./dto/create-product.dto";
import { ProductsService } from "./products.service";
import {Product} from "./interfaces/Product"

@Controller('products')
export class ProductsController {
    constructor( private productService: ProductsService){}

    @Get()
    async getProducts():Promise<Product[]>{        
        return await this.productService.getAll();
    };
    @Get(`:id`)
    getById(@Param(`id`) id):Promise<Product[]>{        
        return this.productService.getById(id);
    };

    @Post()
    addProduct(@Body() product: CreateProductDto):{}{
        return this.productService.add(product);
    };

    @Put(`:id`)
    update(@Param(`id`) id, @Body() product: CreateProductDto):Promise<Product[]>{
        return this.productService.updateById(id,product);
    };

    @Delete(`:id`)
    delete(@Param(`id`) id):Promise<Product[]>{
        return this.productService.deleteById(id);
    };
}
