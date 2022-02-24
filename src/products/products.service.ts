import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import {Product} from "./interfaces/Product";
import { Model } from "mongoose";
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(`products`) private productModel:Model<Product>){}

    async getAll(){
        try{
            return await this.productModel.find().exec();
        }catch(e){
            //throw new CustomError(500, "Error en ProductsDao getAll");
        }
    };

    async getById(id){
        try{
            let products;
            products = await this.productModel.find({
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

    async add(newProduct : CreateProductDto){

        try{
            //validar
            let isProductAlreadyCreate = false;
            let msg = {};
            let product = await this.productModel.findOne({
                title: newProduct.title
            });
            console.log("product",product)
            if(!product){
                let productNew = await this.productModel.create({
                    title: newProduct.title,
                    description:newProduct.description,
                    thumbnail:newProduct.thumbnail,
                    stock:newProduct.stock,
                    price:newProduct.price
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
            product = await this.productModel.findOneAndUpdate({ _id: id },{
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
            product = await this.productModel.deleteOne({ _id: id }).catch((e)=>{
                return product;
            });
            return product;            
        }catch{
            //throw new CustomError(500, "Error en ProductsDao deleteById");            
        };
        
    }
  

  
}
