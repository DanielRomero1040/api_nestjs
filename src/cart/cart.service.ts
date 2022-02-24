import { Injectable } from '@nestjs/common';
import { Cart } from './interfaces/Cart';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductsCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {    
    constructor(@InjectModel(`cart`) private cartModel:Model<Cart>){}

    async getAll(){
        try{
            return await this.cartModel.find().exec();
        }catch(e){
            //throw new CustomError(500, "Error en ProductsDao getAll");
        }
    };

    async getById(id){
        try{
            let products;
            products = await this.cartModel.find({
                _id:id
            }).exec().catch((e)=>{});
            if(!products){
                products = [];
            }
            return products;
        }catch(e){            
            //throw new CustomError(500, "Error en ProductsDao getById");
        }
    };

    async add(newProduct : CreateProductsCartDto){

        try{
            //validar
            let isProductAlreadyCreate = false;
            let msg = {};
            let product = await this.cartModel.findOne({
                title: newProduct.title
            });
            console.log("product",product)
            if(!product){
                let productNew = await this.cartModel.create({
                    title: newProduct.title,
                    description:newProduct.description,
                    thumbnail:newProduct.thumbnail,
                    stock:newProduct.stock,
                    price:newProduct.price,
                    _id:newProduct._id
                })
                console.log('nuevo producto',productNew);
                msg ={
                    isProductAlreadyCreate: isProductAlreadyCreate,
                    product:productNew
                }
                return msg
            }
            msg ={
                isProductAlreadyCreate:true,
                product
            }
            return msg;

        }catch(e){
            //throw new CustomError(500, "Error en ProductsDao add");
        };

        
    }
    async updateById(id, productUpdated){
        try{
            let product;            
            product = await this.cartModel.findOneAndUpdate({ _id: id },{
                title: productUpdated.title,
                description:productUpdated.description,
                thumbnail:productUpdated.thumbnail,
                stock:productUpdated.stock,
                price:productUpdated.price
            }).catch((e)=>{
                return product;
            });
            return product;
        }catch{
            //throw new CustomError(500, "Error en ProductsDao updateById");
        };
        
    }
    async deleteById(id){
        try{
            let product;
            product = await this.cartModel.deleteOne({ _id: id }).catch((e)=>{
                return product;
            });
            return product;            
        }catch{
            //throw new CustomError(500, "Error en ProductsDao deleteById");            
        };
        
    }
  

}
