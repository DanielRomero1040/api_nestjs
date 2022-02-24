import { Document } from "mongoose";

export interface Product extends Document{
    title:String;
    description:String;
    thumbnail:String;
    stock:Number;
    price:Number;
    id?:string;
}