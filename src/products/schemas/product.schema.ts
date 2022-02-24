import {Schema} from "mongoose";

export const ProductSchema = new Schema({
    title:String,
    description:String,
    thumbnail:String,
    stock:Number,
    price:Number
});