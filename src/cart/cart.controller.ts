import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateProductsCartDto } from './dto/create-cart.dto';
import { Cart } from './interfaces/Cart';

@Controller('cart')
export class CartController {    
    constructor( private cartService: CartService){}

    @Get()
    async getProducts():Promise<Cart[]>{        
        return await this.cartService.getAll();
    };
    @Get(`:id`)
    getById(@Param(`id`) id):Promise<Cart[]>{        
        return this.cartService.getById(id);
    };

    @Post()
    addProduct(@Body() product: CreateProductsCartDto):{}{
        return this.cartService.add(product);
    };

    @Put(`:id`)
    update(@Param(`id`) id, @Body() product: CreateProductsCartDto):Promise<Cart[]>{
        return this.cartService.updateById(id,product);
    };

    @Delete(`:id`)
    delete(@Param(`id`) id):Promise<Cart[]>{
        return this.cartService.deleteById(id);
    };
}
