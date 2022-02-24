import {Schema} from "mongoose";

export const CartSchema = new Schema({
    title:String,
    description:String,
    thumbnail:String,
    stock:Number,
    price:Number
});